# @reflexjs/gatsby-theme-core

The core theme for Reflex. This adds a `Page` type.

## Installation

```sh
npm i @reflexjs/gatsby-theme-core
```

## Configuration

```js
// gatsby-config.js

module.exports = {
  plugins: [`@reflexjs/gatsby-theme-core`],
}
```

## Options

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-core`,
      options: {
        contentPath: `content/pages`,
        imagesPath: `content/images`,
        basePath: ``,
        mdxRemarkPlugins: [],
        gatsbyRemarkPlugins: [],
        remarkPlugins: [],
      },
    },
  ],
}
```

## Data models

### Page

```js
type Page implements Node @dontInfer {
  id: ID!
  title: String
  excerpt: String
  slug: String
  body: String
}
```

## Usage

Place your pages inside `content/pages` as follows:

```sh
site
  └── content
    └── pages
      └── a-page.mdx
```

Then add content to your page:

```jsx
---
title: A page
excerpt: Omnis architecto praesentium itaque eaque quasi.
---

Write markdown or use components here.

## Heading 2

<Button bg="primary">Button</Button>

```

## Documentation

Read the docs at [https://reflexjs.org/docs/pages](https://reflexjs.org/docs/pages).
