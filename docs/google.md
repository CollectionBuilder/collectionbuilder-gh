# Add Google Services

Google provides powerful, free(ish) services that can be added on to your site.
Using their platform services is a very popular choice, perhaps the standard, thus CollectionBuilder makes it easy to integrate into your project. 
However, given concerns over privacy and undisclosed tracking, you should carefully consider if they are necessary in your context or if other alternatives exist.

CollectionBuilder-GH has builtin addons for Google custom search and analytics.

## Add Google CSE

After your site has been up for awhile, [Google Custom Search Engine](https://cse.google.com/cse/) can provide a quality search of your content.
To add one to your collection site, visit CSE, set up the search, then copy the ID into this project `_config.yml`.

- Log in with a Gmail account at <https://cse.google.com/cse/>
- The main page will display any CSE you have already set up. Click the "Add" button to create a new one.
- Paste the full gh-pages url of your collection site followed by a wild card (`*`) in the "Sites to search" box, for example `username.github.io/repository/*`.
- Give the CSE a meaningful name, then click "Create".
- Click "Control panel" to customize.
- On "Setup", "Basics" tab, next to "Details", click "Search engine ID".
- Copy the "Search engine ID" (a weird string, for example `002151703305773322890:1pu3smhw1t8`), and paste into your project's `_config.yml` as the `google-cse-id` value.
- Click "Look and feel" on the left side menu.
- On the Layout tab, choose "Full width", then click "Save"
- On the Themes tab, choose "Minimalist", then click "Save"

Adding the `google-cse-id` to your _config.yml will automatically populate the page /search/google-search.html in your final site and add a link to it from the lunr search page.
The page is generated from the stub "pages/google-search.md".
The CSE "Look and Feel" settings above will allow the CSE to integrate into the search page seamlessly.

## Add Google Analytics

Google Analytics can be automatically added by filling in the `google-analytics-id` in _config.yml. 
Set up an account at [Analytics](analytics.google.com/). 
Multiple properties can be included and/or combined under the same account and id.
For example, if you have an existing Analytics id used on your websites, you can use the same one on your CollectionBuilder projects.

The Analytics code is contained in _includes/head/google-analytics.html.
It uses the most recent "Global site tag" script (see [gtag docs](https://developers.google.com/analytics/devguides/collection/gtagjs/)
), with the [Anonymize IP](https://developers.google.com/analytics/devguides/collection/gtagjs/ip-anonymization) option set (provides basic privacy enhancement to your users).

To avoid using Analytics during local development testing, it is only added in the template when building with `JEKYLL_ENV=production`.
This is the default environment used when your site is built with GitHub Pages, so Analytics will automatically be added.

If you are using Jekyll locally, by default it uses the "development" ENV, thus analytics will not be added.
If you are manually building and deploying your site, you will need to use the command:

`JEKYLL_ENV=production jekyll build`
