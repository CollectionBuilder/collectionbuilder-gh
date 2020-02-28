---
title: Documentation
layout: page
permalink: /documentation/
---

# CollectionBuilder How-To

A step-by-step guide on how to create your own digital collection using CollectionBuilder-GH.

<br>

### Sign up for GitHub at [https://github.com/](https://github.com/){:target='_blank'}

{% include figure.html img="docs/github-login.png" alt="github-login" width="75%" %}

---

### Import the CollectionBuilder-GH repository
- Navigate to the [CollectionBuilder](https://github.com/CollectionBuilder/collectionbuilder-gh){:target='_blank'} repository.
- Click on the green "Clone or download" button.
- A "Clone with HTTPS" box will pop up. Click on the "copy to clipboard" icon to the right of the URL.
{% include figure.html img="docs/github-copy.png" alt="github-copy" width="75%" %}
- Click on the `+` sign in the top right corner.
- Select "Import repository."
<div class="text-center">{% include figure.html img="docs/github-import.png" alt="github-import" width="75%" %}</div>
- Paste the URL you copied into the box that says "Your old repository’s clone URL."
- Name your new repository, then select "Begin import."
{% include figure.html img="docs/github-import2.png" alt="github-import2" width="75%" %}

---

### Gather your digital items
- Find some items you want to be in your collection! Currently, CollectionBuilder supports filetypes jpg, pdf, mp3, and has the capacity to embed YouTube videos.
- Drop your items into your repository's `Objects` directory:
- Click on `Objects`. In the top right corner, click on "Upload Files." Drag and drop your files or browse your computer for them. 
{% include figure.html img="docs/objects.png" alt="objects" width="75%" %}
- When you're ready to commit your changes, add a message explaining what you did in the "Commit changes" box. Then click "Commit Changes." Your digital objects are now uploaded!
{% include figure.html img="docs/objects-commit.png" alt="objects-commit" width="75%" %}

---

### Create your metadata
- Describe your objects using the [CollectionBuilder metadata template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0). You can follow the example of the first record in the template (and delete it when you've added your own records), or look at the [CollectionBuilder Metadata Guidelines]({{ '/docs/metadata-guidelines.pdf' | relative_url }}) as a guide for formatting your data.
{% include figure.html img="docs/metadata-template.png" alt="metadata-template" width="75%" %}
- We recommend copying this Google Sheets version of the [Metadata Template](https://docs.google.com/spreadsheets/d/1Uv9ytll0hysMOH1j-VL1lZx6PWvc1zf3L35sK_4IuzI/edit#gid=0){:target='_blank'} into your own Google Sheets account to work on it.
- Once you've finished creating your metadata in Google Sheets, click "File" and select "Download as CSV."
- Locate the metadata csv you just downloaded on your computer. Without opening it, name this file using all lowercase letters and no spaces (i.e. collection-metadata.csv). 

---

### Upload your metadata to GitHub
- Navigate to your imported repository.
- Click on the `_data` directory (Note: Do not confuse this folder with the `data` directory. Your metadata needs to go in `_data`).
- Follow Step 3 above to upload your metadata to the `_data` directory.
{% include figure.html img="docs/metadata.png" alt="metadata" width="75%" %}

---

### Configure your site
- Look for the file labeled `_config.yml` in your repository.
- Click on `_config.yml`. In the top right corner, click the pencil button to edit the file.
- Work your way through the file and fill out the fields.
- When you're finished editing, commit your changes.
{% include figure.html img="docs/config.png" alt="config" width="75%" %}

---

### Configure your site's theme
- Navigate to the `_data` directory.
- Click on the file `theme.yml`.
- This is where you'll set up the basics of your site. In the top right corner, click the pencil button to edit the file.
- For your site to work, at minimum you need to update the `metadata` and `repository` fields.
- Work your way through the file and fill out the fields so that the site is customized to your collection.
- When you're finished editing, commit your changes.
{% include figure.html img="docs/theme.png" alt="theme" width="75%" %}

---

### Publish your digital collection
- Look for a "Settings" button near the top right of the repository. Click on this button.
- Scroll down to the "GitHub Pages" section. Choose to publish your GitHub Pages site from the master branch.
- Wait a few minutes for your site to build, then click on the URL that appears in the GitHub Pages box.
{% include figure.html img="docs/gh-pages.png" alt="gh-pages" width="75%" %}

---

Congratulations! You've built a CollectionBuilder site! You probably have some metadata to clean up and more customization to do. For further customization, see below.

### Edit visualizations and pages
- Navigate to the `_data` directory. Customize your site using the files that end in `-config.yml`:
    - `browse-config.csv`: edit the information that appears on your collection's browse cards
    - `map-config.csv`: edit the information that appears on the map popups
    - `metadata-config.csv`: edit the metadata fields that appear on the site's item pages
    - `nav-config.csv`: add or remove pages
{% include figure.html img="docs/md-config.png" alt="md-config" width="75%" %}
- Navigate to the `pages` directory and find the file `about.md`. Add some context to your collection by editing this file.
    - Note: this page is written in [Markdown](https://guides.github.com/features/mastering-markdown/)
{% include figure.html img="docs/about.png" alt="about" width="75%" %}