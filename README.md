# PERSONAL SITE

## Development

Use `gatsby develop` to have gatsby running and automatically building on changes.  

### Want to Add new Functionality and Content?

- Find your package on `node packages`
- use `npm i [package]`
- Implement that functionality

Once completed changes, `git push origin dev` to branch `dev` on github.

## Deploying the Site

Deploy to the internet: 
- `npm run deploy`

This command runs 
- `gatsby build`: builds static site to the folder `public`
- `gh-pages -d public`: pushes the built site to the designated branch `main` which is the repo that `gh-pages` points to as source for the internet.
- `bash rebuildSite.sh`: manual rebuild, authorized by credentials stored in local `~.bashrc`, handle cases where `gh-pages` can't detect any.

 `gh-pages -d public`  `bash rebuildSite.sh`