---
title: Quick Start
layout: page
permalink: /documentation/
---

# CollectionBuilder How-To

A quick start, step-by-step guide on how to create your own digital collection using CollectionBuilder-GH.

<br>

### Sign up for GitHub at [https://github.com/](https://github.com/){:target="_blank" rel="noopener"}

{% include figure.html img="docs/github-login.png" alt="github-login" width="75%" %}

------

### Create a new CollectionBuilder-GH project 

1. Login on [GitHub](https://github.com)
2. Navigate to the [CollectionBuilder](https://github.com/CollectionBuilder/collectionbuilder-gh){:target="_blank" rel="noopener"} repository.
2. Click the green "Use This Template" button.    
3. This brings you to a "Create a new repository" form. Follow these steps:
    - **Enter your new repository name**. Use a lowercase name without spaces or odd characters (underscore `_` or dash `-` are okay). This name will become part of your site URL, so think through how it will look as a link. 
    - Most users should choose "Public" repository. For hosting on GitHub Pages it *must* be public unless you upgrade to a paid account.
    - Leave the "Include all branches" option **Unchecked**! (you do not want all branches, only the main/master branch)
    - Click on the green button "**Create repository from template**." This will take you to your new repository.

------

### Gather your digital items

Find some items you want to be in your collection! 
Currently, CollectionBuilder supports filetypes jpg, pdf, mp3, and has the capacity to embed YouTube videos.
Keep in mind all files should be sized to be downloaded over the web, so not too big, and the whole group should be 500MB max (hopefully smaller).

When your objects are ready, upload them into your repository's `objects` directory:

- Click on `objects`. In the top right corner, click on "Upload Files." Drag and drop your files or browse your computer for them. 
{% include figure.html img="docs/objects.png" alt="objects" width="75%" %}
- When you're ready to commit your changes, add a message explaining what you did in the "Commit changes" box. Then click "Commit Changes." Your digital objects are now uploaded!

{% include figure.html img="docs/objects-commit.png" alt="objects-commit" width="75%" %}

------

### Create your metadata

Describe your objects using the [CollectionBuilder metadata template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0){:target="_blank" rel="noopener"} (or in your repository as "_data/metadata-template.csv"). 
You can follow the example of the first record in the template (and delete it when you've added your own records), or look at the [CollectionBuilder metadata documentation](https://collectionbuilder.github.io/docs/metadata.html){:target="_blank" rel="noopener"} for more information.

{% include figure.html img="docs/metadata-template.png" alt="metadata-template" width="75%" %}

- We recommend copying this Google Sheets version of the [Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0){:target="_blank" rel="noopener"} into your own Google Sheets account to work on it.
- Once you've finished creating your metadata in Google Sheets, click "File" and select "Download as CSV."
- Locate the metadata csv you just downloaded on your computer. Without opening it, name this file using all lowercase letters and no spaces (i.e. collection-metadata.csv). 

------

### Upload your metadata to GitHub

- Navigate to your GH project repository.
- Click on the `_data` directory (Note: Do not confuse this folder with the `data` directory. Your metadata needs to go in `_data`).
- Follow Step 3 above to upload your metadata to the `_data` directory.

{% include figure.html img="docs/metadata.png" alt="metadata" width="75%" %}

------

### Configure your site

- Look for the file labeled `_config.yml` in your repository.
- Click on `_config.yml`. In the top right corner, click the pencil button to edit the file.
- Work your way through the file and fill out the fields.
- For your site to work, at minimum you need to update the `url`, `baseurl`, and `metadata` fields.
- When you're finished editing, commit your changes.

{% include figure.html img="docs/config.png" alt="config" width="75%" %}

------

### Configure your site's theme

- Navigate to the `_data` directory.
- Click on the file `theme.yml`.
- This is where you'll set up the basics of your site. In the top right corner, click the pencil button to edit the file.
- Work your way through the file and fill out the fields so that the site is customized to your collection.
- When you're finished editing, commit your changes.

{% include figure.html img="docs/theme.png" alt="theme" width="75%" %}

------

### Publish your digital collection

- Look for a "Settings" button near the top right of the repository. Click on this button.
- Scroll down to the "GitHub Pages" section. Choose to publish your GitHub Pages site from the master branch.
- Wait a few minutes for your site to build, then click on the URL that appears in the GitHub Pages box.

{% include figure.html img="docs/gh-pages.png" alt="gh-pages" width="75%" %}

------

Congratulations! You've built a CollectionBuilder site! You probably have some metadata to clean up and more customization to do. 
For further customization, see below.

### Edit visualizations and pages

- Navigate to the `_data` directory. Customize the pages in your site using the `.yml` files that start with `config-`:
    - `config-browse.csv`: edit the information that appears on your collection's browse cards
    - `config-nav.csv`: add or remove pages from navigation bar
    - `config-metadata.csv`: edit the metadata fields that appear on the site's item pages
    - `config-map.csv`: edit the information that appears on the map popups

{% include figure.html img="docs/md-config.png" alt="md-config" width="75%" %}

- Navigate to the `pages` directory and find the file `about.md`. Add some context to your collection by editing this file which is written in [Markdown](https://guides.github.com/features/mastering-markdown/).

{% include figure.html img="docs/about.png" alt="about" width="75%" %}

------

**If you would like more details or help with anything, please checkout the full [CollectionBuilder Documentation](https://collectionbuilder.github.io/docs/introduction.html){:target="_blank" rel="noopener"}!**
