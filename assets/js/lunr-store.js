---
# create lunr store for search page
---
{%- assign items = site.data[site.data.theme.metadata] -%}
{%- assign fields = site.data.search-config -%}
var store = [ 
{%- for item in items -%} 
{ "id": {{ item.objectid | jsonify }}, {% for f in fields %}{{ f.field | jsonify }}: {% if item[f.field] %}{{ item[f.field] | replace: '""','"' | jsonify }}{% else %}"none"{% endif %}{% unless forloop.last %},{% endunless %}{% endfor %} }{%- unless forloop.last -%},{%- endunless -%}
{%- endfor -%}
];
