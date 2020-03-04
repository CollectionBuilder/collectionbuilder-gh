{% comment %}
    Bootstrap Modal, https://getbootstrap.com/docs/4.4/components/modal/
    Options: 
    - "button" = text of button to trigger modal
    - "color" = color of modal button (primary, secondary, success, danger, warning, info, light, dark)
    - "title" = header text for modal pop up
    - "text" = body text for modal pop up, can use Markdown
{%- endcomment -%}
<!-- Button trigger modal -->
<div class="text-center">
<button type="button" class="btn btn-{{ include.color | default: 'primary' }}" data-toggle="modal" data-target="#exampleModal">
{{ include.button }}
</button>
</div>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">{{ include.title }}</h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-body" markdown="1">
{{ include.text }}
</div>
</div>
</div>
</div>