---
# create lunr store for search page
---
{% if site.data.theme.search-child-objects == false %}
{%- assign items = site.data[site.metadata] | where_exp: 'item','item.objectid and item.parentid == nil' -%}
{% else %}
{%- assign items = site.data[site.metadata] | where_exp: 'item','item.objectid' -%}
{% endif %}
{%- assign fields = site.data.config-search -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.objectid | jsonify }}, {% for f in fields %}{{ f.field | jsonify }}: {% if item[f.field] %}{{ item[f.field] | normalize_whitespace | replace: '""','"' | jsonify }}{% else %}"none"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
