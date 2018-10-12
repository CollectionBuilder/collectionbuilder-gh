# Prepare Collection Metadata

what is metadata

metadata standards 

Look at `docs/metadata-template.csv` for the metadata template, and `docs/metadata-info.csv` for metadata guidelines.
This basic metadata profile is based on Orbis Cascade Alliance [Dublin Core Best Practices Guidelines](https://www.orbiscascade.org/dublin-core-best-practices/) which are designed to enable interoperability with aggregators, particularly [DPLA](https://dp.la/).
This is a minimal template aimed at providing enough detail to describe a small collection, support the website visualizations, and teach metadata concepts, while not overwhelming users in the details.

Create your metadata following the template and drop it into `_data` folder replacing `metadata.csv`.

Edit the `_data/metadata-config.csv` to choose the order and display name for the metadata fields. 
The fields will display in the order given in the csv, and will use the "display-name" value. 
Fields not included here will not be displayed.