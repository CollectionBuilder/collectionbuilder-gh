# demo-site branch

demo-site branch of cb-gh is set up to create the demo collection on github pages.
If you push or PR to `demo-site` branch, it will automatically build using GitHub Pages.

I added noindex to the item pages and browse, so it doesn't get indexed competing against the real collection.

If you want to make changes to the demo site, make them in `demo-site` branch (not master). 

To update demo-site from master:

- checkout the branch: `git checkout demo-site`
- make sure it is up-to-date: `git pull`
- bring in master: `git merge main`
