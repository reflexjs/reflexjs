# remark-mdx-searchable

Extracts searchable sections from [MDXAST](https://github.com/mdx-js/specification#mdxast).

This is used by [@reflexjs/gatsby-plugin-search-algolia] to split node into smaller searchable records.

## Installation

```sh
npm i remark-mdx-searchable
```

## Usage

Consider the following `mdx` file, `blog-post.mdx`:

```mdx
---
title: Title of document
---

This is a paragraph.

# Section 1

This is a paragraph in **section 1**.

This is another paragraph in the first section.

## Section 2

This is a paragraph is section two with a [link](https://reflexjs.org).
```

We can extract searchable sections as follows:

```js
const fs = require("fs")
const path = require("path")
const remark = require("remark")
const mdx = require("remark-mdx")
const frontmatter = require("remark-frontmatter")
const searchable = require("remark-mdx-searchable")

const doc = fs.readFileSync(path.join(__dirname, "./blog-post.mdx"), "utf8")

const result = remark()
  .use(frontmatter)
  .use(mdx)
  .use(searchable)
  .processSync(doc)

console.log(result.data)
```

This will output the following:

```sh
[
  {
    text: "This is a paragraph.",
    heading: null,
  },
  {
    text: "This is a paragraph in section 1.",
    heading: "Section 1",
  },
  {
    text: "This is another paragraph in the first section.",
    heading: "Section 1",
  },
  {
    text: "This is a paragraph is section two with a link.",
    heading: "Section 2",
  },
]
```
