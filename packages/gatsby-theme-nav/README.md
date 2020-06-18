# @reflexjs/gatsby-theme-nav

Handles navigation menus for Reflex.

## Installation

```sh
npm i @reflexjs/gatsby-theme-nav
```

## Configuration

```js
// gatsby-config.js

module.exports = {
  plugins: [`@reflexjs/gatsby-theme-nav`],
}
```

## Options

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-nav`,
      options: {
        contentPath: "content/navs",
      },
    },
  ],
}
```

## Data models

### Nav

```js
type NavLink implements Node @dontInfer {
  type: String
  value: String
  url: String
  items: [NavLink]
}

type Nav implements Node @dontInfer {
  id: ID!
  name: String
  items: [NavLink]
}
```

## Usage

Place your navs inside `content/navs` as follows:

```sh
site
  └── content
    └── navs
      └── header.mdx
```

Then add nav links using markdown:

```md
- [Home](/)
- [About](/about)
- Dropdown
  - [Item One](/item-one)
  - [Item Two](/item-two)
- [Contact](/contact)
- Block dropdown
  - <Block src="name-of-block" />
```

## Mega menu

Creating mega menu is easy. Create a block and add it as a dropdown item.

```md
- Block dropdown
  - <Block src="name-of-block" />
```

## Display nav

Use the `useNav` hook to retrieve navs and render them in blocks.

```jsx
// blocks/header-nav.mdx

export const HeaderNav = () => {
  const [nav] = useNav('header')
  return nav.items ? (
    <Ul>
      {nav.items.map({value, url, items}, index) => (
        <Li key={index}>
          <Link href={url}>{value}</Link>
        </Li>
      )}
      </Ul>
  ) : null
}
```

Then place them in your page:

```jsx
<Block src="header-nav" />
```

Check out the [Blocks library](https://reflexjs.org/library/blocks) for pre-built navs you can copy and drop into your site.

## Documentation

Read the docs at [https://reflexjs.org/docs/navs](https://reflexjs.org/docs/navs).
