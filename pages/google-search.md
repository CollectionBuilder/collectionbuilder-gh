---
title: Google CSE
layout: page
permalink: /search/google.html
noindex: true
---

## Google Site Search

<div class="alert alert-primary" role="alert">
  Please note: CSE is a free service provided by Google. Results depend on third party indexing and may contain ads.
</div>

<script>
  (function() {
    var cx = '{{ site.google-cse-id }}';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>
