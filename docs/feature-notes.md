## metadata handling

The data file `metadata-fields.csv` contains information for populating document pages and machine readable markup.
The "field" column matches the columns used in the collection metadata file.
The fields will be displayed in the given order.
If the field should be displayed visually, give it a name in "display-name" (blanks will not be displayed).
If the field should be visually highlighted, add true to "featured" column (false will be displayed only on an additional click).
For machine markup, include a schema map value.

create csv mapping field to display name

## notes

pdf embed options, https://pdfobject.com/static.html

### data export

The project automatically generates versions of your metadata that are exposed in the `/data/` directory for sharing or ingest into other tools.
In fact, the collection visualizations such as the table and subjects make use of the json stored in `/data/`.
Furthermore, the metadata can be subsetted and exported from the table on the data page.
