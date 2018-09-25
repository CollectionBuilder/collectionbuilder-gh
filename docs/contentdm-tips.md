# CONTENTdm tips

Many libraries use [CONTENTdm](https://www.oclc.org/en/contentdm.html) to host their digital collections. 
You may want to harvest items from these repositories.
CDM is not the easiest to use, but there is a few handy ways to get stuff out via URLs.

We can access the CDM data using the [CDM API](https://www.oclc.org/support/services/contentdm/help/customizing-website-help/other-customizations/contentdm-api-reference.en.html).
This API is helpful because its possible to create a set of queries using [OpenRefine](http://openrefine.org/) or a language such as [Python](https://www.python.org/) to add the harvesting raw materials step directly to your data processing workflow.

The key to using the CDM API is to figure out the `base URL` (usually the public url where you access the digital collection), the `port` (usually :81), the collection `Alias` (the short name represented in a collection's url), and the item id `pointer` (the id number assigned the item by the CDM database).

If you know out the first two, you can use them to figure out the others.
If you have direct access the the CDM instance, you can export the metadata from the admin interface, then use the provided IDs to harvest objects out of the database.

## Find Alias and Pointers

For example, lets say the URL is `cdmexample.com`, we can get an XML list of all collections using:

`http://cdmexample.com:81/dmwebservices/index.php?q=dmGetCollectionList/xml`

From that XML document you can find the `alias` for a collection of interest in the `<alias>` element (if you prefer JSON, replace `/xml` with `/json`).

Next, you want a list of items so you can find the `pointer`.
There is no obvious easy way.
The best way is to choose a metadata field to query that every item has (generally you'll be safe just using the field `title` to query). 
Following our example, to check which metadata fields exist for a collection with `alias` "example", use: 

`http://cdmexample.com:81/dmwebservices/index.php?q=dmGetCollectionFieldInfo/example/xml`

After choosing a field, for example "title", we can form a query to return all items for the "example" collection: 

`http://cdmexample.com:81/dmwebservices/index.php?q=dmQuery/example/0/title/xml`

The first XML element `<pager>` tells you how many `<total>` items there are in the collection. Each item in the collection is in a `<record>` element with a `<pointer>`. 
Now that you have `pointer` for individual items, you can retrieve metadata or files for the items.
## Get full text

Most document collections in CDM have a full text field filled by an OCR transcript.
If you want to get the full text for all items in a small collection, its easy using the Query method mentioned above. The automatically populated full text field is usually called `full` in CDM. For example:

`http://cdmexample.com:81/dmwebservices/index.php?q=dmQuery/example/0/full/xml`

However, this will only return 10 items. You can set the max number to return between 1 and 1024. So to set it to 1024, use this query:

`http://cdmexample.com:81/dmwebservices/index.php?q=dmQuery/example/0/full/nosort/1024/xml`

Obviously, if your collection has more than a thousand items, this isn't very helpful.
However, CDM usually times out on large collections, this method probably won't work on larger collections with large full text fields anyway. 
Instead, make a list of pointers, and use them to individually download metadata as shown below.

## Get item metadata

To get an item's full descriptive metadata, use the `alias` and `pointer`.
For example, if the `pointer` is "1":

`http://cdmexample.com:81/dmwebservices/index.php?q=dmGetItemInfo/example/1/xml`

## Get PDF

To download a PDF of the item use the `alias` and `pointer` and the `getfile` utility.
Unlike the API calls above, the CDM utilities do not require the `port`.
To get the PDF of the item with `pointer` 1:

`http://cdmexample.com/utils/getfile/collection/example/id/1/pdf`

## Get thumbnail

Use the thumb utility like:

`http://cdmexample.com/utils/getthumbnail/collection/example/id/1`

-----------------

## Thumbs

CONTENTdm get thumb utility:
`/utils/getthumbnail/collection/alias/id/pointer`

run jekyll to create thumbnail-fetch.txt in utilities. 
use wget to harvest thumbs, `wget -i "thumbnail-fetch.txt"`.
if thumbs have no extension, add using `for f in *; do mv "$f" "$f.jpg"; done`.

## pdfs

CONTENTdm getfile utility:
`/utils/getfile/collection/alias/id/pointer/filename/name`

## CDM Page flip view

`<iframe src="https://digital.lib.uidaho.edu/cdm/pageflip/collection/idahowater/id/{{ page.cdm-number }}/type/singleitem/pftype/pdf"></iframe>`
