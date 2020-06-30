{% comment %}
    Bootstrap button, https://getbootstrap.com/docs/4.4/components/button/
    Options:
    - "text" = main button text, can use markdown formatting. Use a Liquid capture to add more complex content.
    - "link" = button link
    - "size" = btn size: lg, sm \ default normal
    - "color" = bootstrap color options: primary, info, secondary, etc. 
    - "width" will use Bootstrap sizing to set the % size, choose from "25", "50", "75", or "100"
    - "float" will use Bootstrap float utility to add float, choose from "left" or "right"
{%- endcomment -%}
<a class="btn {% if include.size %}btn-{{include.size}}{%endif%} btn-{{include.color | default: 'secondary'}}  {% if include.float %}float-{{ include.float }} {% endif %}{% if include.width %}w-{{ include.width }}{% endif %} my-2" href="{{include.link}}" markdown="1">{{ include.text }}</a>