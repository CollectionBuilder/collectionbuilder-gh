{% comment %}
    Bootstrap Card, https://getbootstrap.com/docs/4.4/components/card/
    Options:
    - "text" = main card text, can use markdown formatting. Use a Liquid capture to add more complex content.
    - "header" = card header text (in bar above card content)
    - "title" = card title text inside card content area
    - "objectid" = the given object (photo or youtube) will create a card cap image
    - "width" will use Bootstrap sizing to set the % size, choose from "25", "50", "75", or "100"
    - "float" will use Bootstrap float utility to add float, choose from "left" or "right"
{% endcapture %}
{%- endcomment -%}
<div class="card mb-3 {{include.class}} {% if include.float %}float-{{ include.float }} {% endif %}{% if include.width %}w-{{ include.width }}{% endif %}">
{% if include.objectid %}
{% assign item = site.data[site.metadata] | where: "objectid", include.objectid | first %}
<img class="card-img-top" src="{% if item.youtubeid %}{{ 'https://img.youtube.com/vi/' | append: item.youtubeid | append: '/hqdefault.jpg' | relative_url }}{% else %}{{ '/objects/' | append: item.filename | relative_url }}{% endif %}" alt="{{ item.title | escape }}">
{%- endif -%}
{% if include.header %}<h5 class="card-header">{{ include.header }}</h5>{% endif %}
<div class="card-body">
{% if include.title %}<h5 class="card-title">{{ include.title }}</h5>{% endif %}
<div class="card-text" markdown="1">

{{ include.text }}

</div>
</div>
</div>