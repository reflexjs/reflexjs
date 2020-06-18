# @reflexjs/gatsby-theme-doc

Use this theme to build documentation pages. See example at [https://reflexjs.org/docs](https://reflexjs.org/docs).

## Installation

```sh
npm i @reflexjs/gatsby-theme-doc
```

## Configuration

```js
// gatsby-config.js

module.exports = {
  plugins: [`@reflexjs/gatsby-theme-doc`],
}
```

## Options

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-doc`,
      options: {
        contentPath: "content/docs",
        basePath: "/docs",
      },
    },
  ],
}
```

## Data models

### Doc

```js
type Doc implements Node @dontInfer {
  id: ID!
  title: String
  excerpt: String
  slug: String
  body: String
  tableOfContents: JSON
  timeToRead: Int
}
```

## Usage

Place your docs inside `content/docs` as follows:

```sh
site
  └── content
    └── docs
      └── getting-started.mdx
```

Then build add content to your doc:

```jsx
---
title: A page
excerpt: Omnis architecto praesentium itaque eaque quasi.
---

Write markdown or use components here.

## Heading 2

<Button bg="primary">Button</Button>

```
