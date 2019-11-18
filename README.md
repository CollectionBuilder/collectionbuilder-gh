# collectionbuilder-gh

https://github.com/CollectionBuilder/collectionbuilder-gh

> **work in progress!**

A project to generate a free and simple digital collection site using [GitHub Pages](https://pages.github.com/) given:

- a CSV of collection metadata
- a folder of JPEG images or PDF documents

See [Getting Started Docs](https://collectionbuilder.github.io/collectionbuilder-gh/documentation) for detailed information.

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

Similar learning experiences use [Omeka](https://omeka.org/) or other DAMS/[CMS](https://en.wikipedia.org/wiki/Content_management_system) platforms that are overkill for one off projects.
Although CMS feature familiar GUI administration interfaces, they are not simple to learn and customize.
These experiences must focus on teaching the specific tool rather than general web skills and the heavy infrastructure is a barrier to adoption and further development.

`collectionbuilder-gh` aims to be well documented and easy to configure by following the example, with the potential to scaffold to learn a multitude of transferable digital and data skills.
A project in "minimal computing", it provides a depth of learning opportunities, allowing users to take complete ownership over the project and make their work open to the world.

Learn about:

- Git and GitHub basics
- [Markdown](https://guides.github.com/features/mastering-markdown/), plaintext writing and content creation
- HTML, CSS, and JS literacy
- commandline literacy
- GitHub collaboration and project management
- [Jekyll](https://jekyllrb.com/) basics
- working in the Open, open source and open data
- digital libraries concepts such as "collections as data", minimal computing, data-driven design

**Note:** 
Since `collectionbuilder-gh` uses [GitHub Pages](https://pages.github.com/), it is only suitable for small collections, with lower resolution images.
GitHub repositories are limited to 1GB.

> We prefer commonly understood formats (such as CSV spreadsheets over YAML), and convention over configuration (follow the example over learn all the options).

## Features

- [Jekyll](https://jekyllrb.com/) for GitHub Pages 
- Layout using [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/).
- [jQuery](https://jquery.com/)
- Mapping using [Leaflet.js](http://leafletjs.com/)
- Tables using [DataTables](https://datatables.net/)
- Galleries using [lightGallery](http://sachinchoolur.github.io/lightGallery/)
- Simple [lunr](https://lunrjs.com/) search 
- Rich markup using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards.

## Build a Digital Collection! 

Check out the [CollectionBuilder-GH tutorial](https://collectionbuilder.github.io/collectionbuilder-gh/documentation/) for how to get started, or visit the [CollectionBuilder home](https://collectionbuilder.github.io/) for more information.

If you are interested in using CollectionBuilder, or are already using it, please drop us a line (**libstatic.uidaho@gmail.com**) since we would love to learn more about it's use in the wild. 
There are also currently opportunities to [collaborate on CollectionBuilder](https://collectionbuilder.github.io/about.html#the-grant).

## License

CollectionBuilder documentation and general web content is licensed [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/). 
This license does *NOT* include any objects or images used in digital collections, which may have individually applied licenses described by a "rights" field.
CollectionBuilder code is licensed [MIT](https://github.com/CollectionBuilder/collectionbuilder-gh/blob/master/LICENSE). 
This license does not include external dependencies included in the `assets/lib` directory, which are covered by their individual licenses.
