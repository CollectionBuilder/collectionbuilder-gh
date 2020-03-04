<div class="alert alert-{{ include.color | default: 'primary' }} {% if include.align %}text-{{ include.align }}{% endif %}" role="alert" markdown="1">
{{ include.text }}
</div>