# Add Google Services

Why or why not? 

Google CSE

Google Analytics, https://analytics.google.com

Google WebMaster Tools

## Add Google CSE

After your site has been up for awhile, [Google Custom Search Engine](https://cse.google.com/cse/) can provide a quality search of your content.
To add one to your collection site, visit CSE, set up the search, then copy the ID into this project `_config.yml`.

- Log in with a Gmail account at <https://cse.google.com/cse/>
- The main page will display any CSE you have already set up. Click the "Add" button to create a new one.
- Paste the full gh-pages url of your collection site followed by a wild card (`*`) in the "Sites to search" box, for example `username.github.io/repository/*`.
- Give the CSE a meaningful name, then click "Create".
- Click "Control panel" to customize.
- On "Setup", "Basics" tab, next to "Details", click "Search engine ID".
- Copy the "Search engine ID" (a wierd string, for example `002151703305773322890:1pu3smhw1t8`), and paste into your project's `_config.yml` as the `google-cse-id` value.
- Click "Look and feel" on the left side menu.
- On the Layout tab, choose "Full width", then click "Save"
- On the Themes tab, choose "Minimalist", then click "Save"

# Note

when using locally, jekyll uses the development environment, and google analytics will not be added to the page.
when built by gh-pages, it will automatically be added. 

if manually building, use environment variable on build command to include analytics
`JEKYLL_ENV=production jekyll build`