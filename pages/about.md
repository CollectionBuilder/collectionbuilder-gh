---
title: About
layout: page
permalink: /about/
---

# About {{ site.title }}

This site is generated using `collectionbuilder-gh`, a project to generate a free and simple digital collection using [gh-pages](https://pages.github.com/) from:

- a CSV of collection metadata
- a folder of JPEG images or PDF documents

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

Similar learning experiences use [Omeka](https://omeka.org/) or other DAMS/[CMS](https://en.wikipedia.org/wiki/Content_management_system) platforms that are overkill for one off projects.
Although CMS feature familiar GUI administration interfaces, they are not simple to learn and customize.
`collectionbuilder-gh` aims to be well documented and easy to configure by following the example.
A project in "minimal computing", it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

### Technical

This website was created by UI Library's [Digital Initiatives](https://www.lib.uidaho.edu/digital/) using the open source static site generator [Jekyll](https://jekyllrb.com/).
The basic frame work is created using [Bootstrap](https://getbootstrap.com/) and [jQuery](https://jquery.com/).
Metadata visualizations are created using [DataTables](https://datatables.net/) and [Leafletjs](http://leafletjs.com/).
Document metadata is exposed using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

Get the [Source code]({{ site.repository }})!

Last build date: {{ site.time | date: "%Y-%m-%d" }}.
