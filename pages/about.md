---
title: About
layout: about
permalink: /about.html
# include CollectionBuilder info at bottom
credits: true
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html objectid="https://cdil.lib.uidaho.edu/images/palouse_sm.jpg" %}

{% include feature/nav-menu.html sections="About CollectionBuilder-GH;About the About Page" %}

## About CollectionBuilder-GH

This demo site features objects from the [University of Idaho Library's Digital Collections](https://www.lib.uidaho.edu/digital/) and is generated using [CollectionBuilder-GH](https://github.com/CollectionBuilder/collectionbuilder-gh), a project to create a free and simple digital collection hosted on [GitHub Pages](https://pages.github.com/) from: 

- a CSV of collection metadata
- a folder of JPG images or PDF documents

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.

{% capture how-to %}
For detailed instructions on how to use CollectionBuilder-GH, check our <a href="https://collectionbuilder.github.io/cb-docs/">CB Docs site</a> and <a href="https://collectionbuilder.github.io/cb-docs/docs/walkthroughs/gh-walkthrough/">CollectionBuilder-GH Walkthrough</a>.

For those who really can't wait, below are six quick steps to get you started:

- Create a new project by clicking the green "Use This Template" button on the <a href="https://github.com/CollectionBuilder/collectionbuilder-gh" target="_blank" rel="noopener">CollectionBuilder GitHub repository</a>.
- Make a copy of the <a href="https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0" target="_blank" rel="noopener">Metadata Template</a>.
- Follow the formatting of the example record in the template to fill in metadata about your own objects.
- Upload your files into the "objects" folder in your repository.
- <a target="_blank" rel="noopener" href="https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages">Activate on GitHub Pages</a> for the Repository.
- Check out your site via the link provided on your repository's setting's page!

**Find complete details in the <a target="_blank" rel="noopener" href="https://collectionbuilder.github.io/cb-docs/">CollectionBuilder Docs</a>.**

{% endcapture %}
{% include feature/card.html header="Create Your Collection!" text=how-to centered=true width="75" %}

`collectionbuilder-gh` can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.
Similar learning experiences use DAMS/[CMS](https://en.wikipedia.org/wiki/Content_management_system) platforms that are often overkill for one-off projects. 
Although CMS feature familiar GUI administration interfaces, they are not necessarily simple to host, learn, and customize.

`collectionbuilder-gh` aims to be well documented and easy to configure by following the example.
A project in "minimal computing," it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

### Learn about:

- Git and GitHub basics for collaboration and project management
- [Markdown](https://guides.github.com/features/mastering-markdown/) for plaintext writing and content creation
- HTML, CSS, and JS literacy
- [Jekyll](https://jekyllrb.com/) basics
- working in the Open, open source and open data
- digital libraries concepts such as "collections as data", minimal computing, data-driven design

<!-- IMPORTANT!!! DELETE this comment and the include below when you are finished editing this page for your collection. The include below introduces about page features. They will show up on your collection's about page until you delete it.  -->
{% include cb/about_the_about.md %} 
