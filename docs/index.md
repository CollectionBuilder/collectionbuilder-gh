# collectionbuilder-gh

## Build a Digital Collection!

1. create [collection project repository](01-project.md)
2. prepare your [collection images and/or pdfs](02-objects.md)
3. prepare your [collection metadata](03-metadata.md)
4. [configure site](04-configure.md)
5. [configure navigation and pages](05-pages.md)
6. add [descriptive content](06-content.md)
7. tweak [styles](07-style.md)
8. option: add [Google services](google.md)

## Quick version

Create a new GitHub repository by importing this repo.

Edit the `_config.yml` with your collection and repository info.

Look at `docs/metadata-template.csv` for the metadata template, and `docs/metadata-info.csv` for metadata guidelines.

Create your metadata following the template and drop it into `_data` folder replacing `metadata.csv`.

Edit the `_data/metadata-config.csv` to choose the order and display name for the metadata fields. 
The fields will display in the order given in the csv, and will use the "display-name" value. 
Fields not included here will not be displayed.

Put your objects (jpgs or pdfs) in `objects` folder, ensuring that they match the `filename` column of your metadata. 
For the easiest set up, the filename should match the indexid + file extension.

Create thumbs for your objects in the `objects/thumbnails` folder, ensuring they match the pattern indexid_sm.jpg.

Edit the about page text.

Edit the home page text.

Push your changes to GitHUb. 

Activate GitHub Pages in your repo settings options. 
