You can change the button text and other default language on the website, but you’ll have to do a little digging in the code to do it. The sections below identify where you can change this text, page by page, for the CollectionBuilder-GH template. If you happen to be using CollectionBuilder-SA or CollectionBuilder-CSV instead of GH, you'll find some of this content is located in other files. If you're having trouble locating something, remember that using the find and replace feature in your text editor or browser is always a good place to start!

## Home Page
You can edit buttons and titles on the Home page by going to the _includes/index folder in your CollectionBuilder repository. There, you’ll find a series of html files, each one pertaining to a card on the Home page. "description.html" pertains to the description card on the Home page, for instance. If you look in that file, you’ll see a line of code that says `<h5 class="card-title">Description</h5>`. You can replace the word “Description” with whatever word you choose. To change the title of the button in the Description card, look a little further down the page in the description.html file and find this bit of code: `<a class="btn btn-outline-primary" href="{{ '/about.html' | relative_url }}" >Learn More &raquo;</a>`. Replace the words “Learn More” with a word or phrase of your choosing, and this will now show up in the blue-outlined button in the Description card. All of the other buttons and titles on the Home page can be changed in the same way, just by going through the rest of the html files in the _includes/index folder. 

## Navigation Menu
You can change the words that show up in the navigation bar by editing the config-nav.csv file, which you’ll find in the _data folder. You’d just replace the words in the display_name column with words of your choosing.

## Browse Page
To edit the buttons by the filter box on the browse page, find the browse.html file in the _layouts folder. Here you can find the words “Filter…,” “Search,” “Reset,” “Sort by,” and “Random,” and replace them. If you’re having trouble finding them, try using the keyboard shortcut ctrl + F to search the words in the file. 

To change the words Browse Items at the top of the page, go to the pages folder, then find the file browse.md. In this file, you’ll see the line of text “## Browse Items.” Replace the words “Browse Items” with words of your choice.

To edit the line “5 of 5 items,” which appears underneath the filter box on the browse page, you’ll have to go into the JavaScript code. This is more tricky. Find the file _includes/js/browse-js.html. Then search for the following lines of code:

```
// add number 
$("#numberOf").html(filteredItems.length + " of {{ items | size }} items");
```

Replace "of" and "items" with new words.

You can also change the text of the “View Full Record” button in this browse-js.html file as well. Search for the following lines of code:

```
// view button
card += '<hr><a href="' + itemHref + '" class="btn btn-sm btn-light" title="link to ' + obj.title + '">View Full Record</a>';
```

Replace "View Full Record" with words of your choice.

You can edit the fields that are showing up on the browse cards in _data/config-browse.csv. Just swap out the words in the display_name column with words of your choice.

## Subjects, Locations, Timeline, Data, Search Pages
To edit the words that appear at the top of the Subjects, Locations, Timeline, Data, and Search pages, find all of these files in the pages folder (example: subjects.md, search.md, etc.) and edit the text that appears after the “##”, just like we did for the browse.md file). 

## Map Page
To edit the “View Item” button on the map popup, you’ll need to find the file map-js.html in the _includes/js folder. Look for these lines of code:

```
/* add object link button to popup */
popupTemplate += '</p><div class="text-center"><a class="btn btn-light" href="' + itemHref + '" >View Item</a></div>';
```

Change the words “View Item”. The field names that appear on the popup can be changed in the config-map.csv in the _data folder.

## Data Page
The field names that appear in the table on the data page can be changed using the config-table.csv file in the _data folder. To change the words in the Download Data button in the top right of this page, you’ll need to go to _includes/data-download-modal.html. Find this line of code:

`<button type="button" class="btn btn-info btn-lg float-md-right" data-toggle="modal" data-target="#dataModal">Download Data</button>`

Edit the words "Download Data". When you click on the Download Data button, a modal appears with descriptions and buttons for downloading collection data in different formats. You can edit the text that appears here further down in the data-download-modal.html folder. Each section of the modal is divided into separate divs that look like this:

```
<div class="card my-3">
<div class="card-body">
    <h5 class="card-title">Complete Metadata</h5>
    <p class="card-text">All metadata fields for all collection items, available as a CSV spreadsheet (usable in Excel, Google Sheets, and similar programs) or JSON file (often used with web applications).</p>
    <a href="{{ '/assets/data/metadata.csv' | relative_url }}" class="btn btn-outline-dark" target="_blank">Metadata CSV</a>
    <a href="{{ '/assets/data/metadata.json' | relative_url }}" class="btn btn-outline-dark" target="_blank">Metadata JSON</a>
</div>
</div>
```

You’ll change the text in the “card-title” line of code and the “card-text” line of code. You can also change the button titles if you wish (“Metadata CSV” and “Metadata JSON” above). 

As far as the “show entries” and “search” text at the top of the data table go, we’re using the DataTables JQuery plugin for this, and that text comes pre-formulated, so there’s not really an easy way to edit it. 

## About Page
The About page can be written and customized following our documentation here: <https://collectionbuilder.github.io/cb-docs/docs/pages/interpretive/>. To change the word “Contents” that appears in the navigation menu on this page, you’ll need to find the file "nav-menu.html", in the _includes/feature folder. The code should look like this: 

```
<p class="h6 shadow-sm p-3 about-nav sticky-top bg-white" style="line-height: 1.5em;">
Contents: {% for section in sections %}<a class="mx-2" href="#{{ section | slugify }}">{{ section }}</a> | {% endfor %}<a class="mx-2" href="#technical">Tech</a>
</p>
```

Find the word “Contents”, and change it to a word of your choice. You can also delete this nav menu completely by deleting the following line of code from the file about.md in the pages folder:

```
{% include feature/nav-menu.html sections="About the Collection;About the About Page" %}
```

## Search Page
Find the search.html file in the _layouts folder. You can change the text in the Search Operators! button by finding this code in this file: 

`<button type="button" class="btn btn-primary float-right" data-toggle="modal" data-target="#operators">Search Operators!</button>`

Change the text in the modal that pops up when you click on the Search Operators button by looking a little further down in this file, and finding the text that appears in the modal and replacing it. For example:

`<h5 class="modal-title" id="modalLabel">Lunr Search Operators</h5>`

And:

```
<li>Specific fields (e.g. title:foo, date:1911, subject:tree)</li>
<li>Wildcards (e.g. foo*, *oo)</li>
<li>Fuzzy match, helps with misspelling (e.g. foo~1)</li>
<li>Boost term (e.g. foo^10)</li>
```
