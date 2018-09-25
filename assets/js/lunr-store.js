---
# create lunr store 
---
{%- assign items = site.data.metadata -%}
var store = [ 
    {% for item in items %} 
    { 
        "indexId": {{ item.indexid | jsonify }},
        "title": {{ item.title | jsonify }},
        "creator": {{ item.creator | jsonify }},
        "subjects": {{ item.subject | split: ";" | jsonify }},
        "date": {{ item.date | jsonify }},
        "description": {{ item.description | jsonify }},
        "place": {{ item.place | jsonify }}
    }{%- unless forloop.last -%},{%- endunless -%}
    {%- endfor -%}
];
