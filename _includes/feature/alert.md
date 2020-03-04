{% comment %}
    Bootstrap Alert, https://getbootstrap.com/docs/4.4/components/alerts/
    Options:
    - "text" = text for alert, can use Markdown
    - "color" = a Bootstrap color (primary, secondary, success, danger, warning, info, light, dark)
    - "align" = text alignment (center, right, left)
{%- endcomment -%}
<div class="alert alert-{{ include.color | default: 'primary' }} {% if include.align %}text-{{ include.align }}{% endif %}" role="alert" markdown="1">
{{ include.text }}
{:.mb-0}
</div>