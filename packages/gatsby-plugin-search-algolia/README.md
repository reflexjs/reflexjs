# Algolia Search

Add Algolia search to your Gatsby site.

## Installation

```sh
npm i @reflexjs/gatsby-plugin-search-algolia
```

## Configuration

Create an account on [Algolia](https://algolia.com).

Go to [API keys](https://www.algolia.com/api-keys) and copy the following key to a `.env` file.

```sh
// .env
ALGOLIA_APP_ID = <--- Application ID
ALGOLIA_SEARCH_KEY = <--- Search-Only API key
ALGOLIA_ADMIN_KEY = <--- Admin API key
ALGOLIA_INDEX_NAME = <--- Index name
```

Configure `@reflexjs/gatsby-plugin-search-algolia` as follows:

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: "Reflex",
    ...
  },
  plugins: [
    `@reflexjs/gatsby-theme-base`,
    {
      resolve: `@reflexjs/gatsby-plugin-search-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        adminKey: process.env.ALGOLIA_ADMIN_KEY,
        searchKey: process.env.ALGOLIA_SEARCH_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        types: [`Page`, `Post`],
      },
    },
  ],
}
```

4. Run `gatsby build` to build your search index.

## Add a search box

Adding a search box your site is as easy as:

```jsx
import { Search } from "@reflexjs/gatsby-plugin-search-algolia"
```

and then render and style the Search box:

```jsx
<Search placeholder="Search site..." fontSize="md" />
```
