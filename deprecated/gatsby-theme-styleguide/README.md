# @reflexjs/gatsby-theme-styleguide

Adds a styleguide to your site to make building and testing themes easy.

## Installation

```sh
npm i @reflexjs/gatsby-theme-styleguide
```

## Configuration

```js
// gatsby-config.js

module.exports = {
  plugins: [`@reflexjs/gatsby-theme-styleguide`],
}
```

## Options

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-styleguide`,
      options: {
        contentPath: "styleguide",
        basePath: "/styleguide",
      },
    },
  ],
}
```

## Data models

### Styleguide

```js
type Styleguide implements Node @dontInfer {
  id: ID!
  title: String
  weight: Int
  excerpt: String
  slug: String
  body: String
}
```

## Usage

Place your styleguide inside `styleguide` as follows:

```sh
site
  └── styleguide
    └── buttons.mdx
```

Note: On first run, sample styleguides for `buttons`, `colors`, `forms`, and `typography` will be automatically generated for you.
