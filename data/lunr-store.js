---
# create lunr store for search page
---
{%- assign items = site.data[site.metadata] -%}
{%- assign fields = site.data.config-search -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.objectid | jsonify }}, {% for f in fields %}{{ f.field | jsonify }}: {% if item[f.field] %}{{ item[f.field] | normalize_whitespace | replace: '""','"' | jsonify }}{% else %}"none"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
