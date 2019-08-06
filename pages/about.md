---
title: About
layout: page
permalink: /about/
---

{% include index/jumbotron.html %}

# About {{ site.data.theme.title }}


This site is generated using `collectionbuilder-gh`, a project to generate a free and simple digital collection using [GitHub Pages](https://pages.github.com/) from:

- a CSV of collection metadata
- a folder of JPEG images or PDF documents

<button type="button" class="btn btn-primary btn-lg my-3" data-toggle="modal" data-target="#data">Click here to start creating your metadata</button>
<!-- Modal -->
<div class="modal fade" id="data" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create your own collection!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body text-center">
                <p>Add your metadata to the <a href="{{ '/data/metadata-template.csv' | absolute_url }}" target="_blank">Metadata Template</a>. Follow the formatting of the example record in the template, or download the <a href="{{ '/data/metadata-guidelines.pdf' | absolute_url }}" target="_blank">CollectionBuilder Metadata Guidelines</a> for more information on how to structure your data so it works with CollectionBuilder.</p>
                <br>
            </div>
        </div>
    </div>
</div>

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

Similar learning experiences use [Omeka](https://omeka.org/) or other DAMS/[CMS](https://en.wikipedia.org/wiki/Content_management_system) platforms that are overkill for one-off projects.
Although CMS feature familiar GUI administration interfaces, they are not simple to learn and customize.
`collectionbuilder-gh` aims to be well documented and easy to configure by following the example.
A project in "minimal computing," it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

## Learn about:

- Git and GitHub basics for collaboration and project management
- [Markdown](https://guides.github.com/features/mastering-markdown/) for plaintext writing and content creation
- HTML, CSS, and JS literacy
- commandline literacy
- [Jekyll](https://jekyllrb.com/) basics
- working in the Open, open source and open data
- digital libraries concepts such as "collections as data", minimal computing, data-driven design

{% include credits.md %}
