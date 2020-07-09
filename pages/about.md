---
title: About
layout: about
permalink: /about.html
# Edit the markdown on in this file to describe your collection
# Look in _includes/feature for options to easily add features to the page
---

{% include feature/jumbotron.html %}

{% include feature/nav-menu.html sections="About CollectionBuilder-GH;About the About Page" %}

## About CollectionBuilder-GH

This demo site features objects from the [University of Idaho Library's Digital Collections](https://www.lib.uidaho.edu/digital/) and is generated using [CollectionBuilder-GH](https://github.com/CollectionBuilder/collectionbuilder-gh), a project to create a free and simple digital collection hosted on [GitHub Pages](https://pages.github.com/) from: 

- a CSV of collection metadata
- a folder of JPEG images or PDF documents

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.

{% capture how-to %}
For illustrated, step-by-step instructions on how to build your digital collection, see our: 

<p class="text-center"><a class="btn btn-success my-2" href="{{ '/documentation/' | absolute_url }}">CollectionBuilder-GH How-To Guide</a></p>

For those who can't wait, below are six quick steps to get you started:

- Create a new project by clicking the green "Use This Template" button on the <a href="https://github.com/CollectionBuilder/collectionbuilder-gh" target="_blank" rel="noopener">CollectionBuilder GitHub repository</a>.
- Make a copy of the <a href="https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0" target="_blank" rel="noopener">Metadata Template</a>.
- Follow the formatting of the example record in the template to fill in metadata about your own objects.
- Upload your files into the "objects" folder in your repository.
- <a target="_blank" rel="noopener" href="https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages">Activate on GitHub Pages</a> for the Repository.
- Check out your site via the link provided on your repository's setting's page!

**Find complete details in the <a target="_blank" rel="noopener" href="https://collectionbuilder.github.io/docs/introduction.html">CollectionBuilder Docs</a>.**

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

## About the About Page

We want to make About pages exciting, and easy to build. 

The CollectionBuilder about page features a narrowed column with its own (optional) menu, featured content, and some technical information. 

To build one, a user writes in [Markdown](https://guides.github.com/features/mastering-markdown/) and includes  content from the site, as well as typical [Bootstrap](https://getbootstrap.com/) features like cards and modals, using code snippets like those detailed below. 

(Each included file has several options, which are documented in the files themselves. I've given the content widths of 25% and 50% to save space, but you can feature the entire image or document.) 

- Image --> `{% raw %}{% include feature/item-figure.html objectid="demo_001" width="25" %}{% endraw %}`

{% include feature/item-figure.html objectid="demo_001" width="25" %}

- PDF -- > `{% raw %}{% include feature/item-pdf-embed.html objectid="demo_002"  width="25" %}{% endraw %}`

{% include feature/item-pdf-embed.html objectid="demo_002" width="25" %}

- Video: `{% raw %}{% include feature/item-video-embed.html objectid="demo_004" %}{% endraw %}`

{% include feature/item-video-embed.html objectid="demo_004" %}

- Card -- > `{% raw %}{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo_004" width="25" centered=true %}{% endraw %}`

{% include feature/card.html header="This is a Card" text="The card features an image from the collection as a cap" objectid="demo_004" width="25" centered=true %}

- Buttons -- > `{% raw %}{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" centered=true %}{% endraw %}`

{% include feature/button.html text="Button Link to Somewhere" link="https://collectionbuilder.github.io/" color="success" centered=true %}
  
- Alerts -- > `{% raw %}{% include feature/alert.html text="this is an *alert* that 'warns' a user" color="warning" align="center" %}{% endraw %}`

{% include feature/alert.html text="This is an *alert* that 'warns' a user with centrally aligned text." color="warning" align="center"  %}

- Modals -- > `{% raw %}{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="when clicked:" text="A Modal will pop out a box with some more information" color="primary"  %}{% endraw %}`

{% include feature/modal.html button="This is a modal using a 'primary' colored button to invite clicking" title="When clicked:" text="A Modal will pop out a box with some more information" color="primary"  %}

We hope this makes it easier for site builders to develop the collection AND add interesting and engaging contextual information.
