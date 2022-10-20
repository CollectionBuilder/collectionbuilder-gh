# collectionbuilder-gh

> This `demo-site` branch of collectionbuilder-gh contains objects and metadata used to generate a demonstration version on GitHub Pages. 
> If starting a new project please use main/main branch instead.

A project to generate a free and simple digital collection site using [GitHub Pages](https://pages.github.com/) given:

- a CSV of collection metadata
- a folder of JPEG images or PDF documents

Gather your digital objects together and create your metadata using the [CollectionBuilder-GH Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/copy). 
Then click the green "use this template" button above to create your repository, add your metadata and configure the repository to fit your collection and settings.

See [Getting Started Docs](https://collectionbuilder.github.io/cb-docs/) for detailed information. 

View the [demo site](https://collectionbuilder.github.io/collectionbuilder-gh/).

**Note:** 
Since `collectionbuilder-gh` uses [GitHub Pages](https://pages.github.com/), it is only suitable for small collections, with lower resolution images. GitHub repositories are limited to 1GB.

## Demo CollectionBuilder with our Workshop Tutorial

If you'd like to demo CollectionBuilder, we've made [a step-through tutorial](https://collectionbuilder.github.io/workshop/gh/) using the following spreadsheet and zipped directory. (The tutorial uses items from our [Psychiana Digital Collection](https://www.lib.uidaho.edu/digital/psychiana/), which is worth a visit!)

Metadata is drawn from the following Google Sheet: 

- [Psychiana Digital Collection Metadata](https://docs.google.com/spreadsheets/d/1x48Te3duPAxh53foEihQVKTfCKUjaCCbH7TrMMd_yU4/copy)

Objects are collected in this zip file: 

- [Psychiana Digital Collection Media Files](https://www.lib.uidaho.edu/collectionbuilder/demo-objects.zip) (Includes image files, pdfs, and mp3s)

These files are stored in this [CollectionBuilder-gh Google Drive Folder](https://drive.google.com/drive/folders/1dTO8-3lusaKBdYyauyg_ziVqwLA4Fons?usp=sharing), along with some other metadata sheets and zipped object directories that can be used for other workshops and demonstrations.

## More on CollectionBuilder

`collectionbuilder-gh` is intended as a simple template for hands-on teaching about digital libraries.
It can be used in a workshop setting to take participants through digitization and metadata creation, to having a live collection site hosted on GitHub.

`collectionbuilder-gh` aims to be well documented and easy to configure by following the example, with the potential to scaffold learning of a multitude of transferable digital and data skills.
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

> We prefer commonly understood formats (such as CSV spreadsheets over YAML), and convention over configuration (follow the example over learn all the options).

## Features

- [Jekyll](https://jekyllrb.com/) for GitHub Pages 
- Layout using [Bootstrap 5](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- Mapping using [Leaflet.js](http://leafletjs.com/)
- Tables using [DataTables](https://datatables.net/)
- Galleries using [spotlight](https://github.com/nextapps-de/spotlight)
- Simple [lunr](https://lunrjs.com/) search 
- Rich markup using [Schema.org](http://schema.org) and [Open Graph protocol](http://ogp.me/) standards

## Build a Digital Collection! 

Check out the [CollectionBuilder docs](https://collectionbuilder.github.io/cb-docs/) for how to get started, or visit the [CollectionBuilder home](https://collectionbuilder.github.io/) for more information.

If you are interested in using CollectionBuilder, or are already using it, please drop us a line (**libstatic.uidaho@gmail.com**) since we would love to learn more about it's use in the wild. 
There are also currently opportunities to [collaborate on CollectionBuilder](https://collectionbuilder.github.io/about.html#the-grant).

## License

CollectionBuilder documentation and general web content is licensed [Creative Commons Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/). 
This license does *NOT* include any objects or images used in digital collections, which may have individually applied licenses described by a "rights" field.
CollectionBuilder code is licensed [MIT](https://github.com/CollectionBuilder/collectionbuilder-gh/blob/main/LICENSE). 
This license does not include external dependencies included in the `assets/lib` directory, which are covered by their individual licenses.
