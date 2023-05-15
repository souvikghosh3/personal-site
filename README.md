# [souvikghosh3.com](https://souvikghosh3.com)

This website was built using [the hello world starter template](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world) by [Gatsby](https://www.gatsbyjs.com/), and is deployed using [Netlify](https://www.netlify.com/).

## Setup

Install:

```sh
npm install
```

## Developing

Run locally:

```sh
npm start
```

Build:

```sh
npm run build
```

Preview build:

```sh
npm run serve
```

Clear previous build and cached data (might be necessary when adding new static assets or GraphQL resources):

```sh
npm clean
```

## Deploying

All pushes to the main branch are automatically picked up and deployed by Netlify.

## TODO list

### UX and Appearance

- [ ] Improve animations for two truths and a lie game so cards don't resize with each other
- [ ] Add highlighting of lie on reveal in game to make it obvious which card is the lie
- [ ] Verify browser compatibility, especially for animations in game
- [ ] Modify spacing / margins on all pages to make better use of available screen space
  - [ ] Maybe decrease default screen width to better display content
  - [ ] Add custom width and font sizing / spacing for resume since it's text heavy
  - [ ] Add some visual break up of content in About page, highlighting the grid pattern
- [ ] Test for accessibility and screenreader support
- [ ] Add support for dark theme
- [ ] Aniamte mobile navbar toggle icon when in transition

### Testing and code cleanliness

- [ ] Make global vars for information used in multiple places (i.e. Linkedin URL)
- [ ] Make some global utility functions for commonly used elements (i.e. anchor tag given url)
- [ ] Centralize commonly used styles into global utility css classes (i.e. flex, grid, etc.)
- [ ] Add unit tests for game logic
- [ ] Add .nvmrc file to replace Netlify env variable that specifies node version

### Additional content

- [ ] Add links to LinkedIn / Github on navbar
- [ ] Add independent projects to website
- [ ] Add blog to website

## Release log

### May 12, 2023: Intial site deploy

- [x] Add home page
- [x] Add resume
- [x] Add about page
- [x] Add mobile friendly navbar / screen size responsiveness
