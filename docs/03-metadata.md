# Prepare Collection Metadata

what is metadata

metadata standards 

Look at `docs/metadata-template.csv` for the metadata template, and `docs/metadata-info.csv` for metadata guidelines.
This basic metadata profile is based on Orbis Cascade Alliance [Dublin Core Best Practices Guidelines](https://www.orbiscascade.org/dublin-core-best-practices/) which are designed to enable interoperability with aggregators such as [DPLA](https://dp.la/).

Create your metadata following the template and drop it into `_data` folder replacing `metadata.csv`.

Edit the `_data/metadata-config.csv` to choose the order and display name for the metadata fields. 
The fields will display in the order given in the csv, and will use the "display-name" value. 
Fields not included here will not be displayed.