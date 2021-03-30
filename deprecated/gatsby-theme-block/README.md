# @reflexjs/gatsby-theme-block

Blocks are re-usable pieces of content that can be embedded on pages.

## Installation

```sh
npm i @reflexjs/gatsby-theme-block
```

## Configuration

```js
// gatsby-config.js

module.exports = {
  plugins: [`@reflexjs/gatsby-theme-block`],
}
```

## Options

```js
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: `@reflexjs/gatsby-theme-block`,
      options: {
        contentPath: "content/blocks",
      },
    },
  ],
}
```

## Data models

### Block

```js
type Block implements Node @dontInfer {
  id: ID!
  src: String
  body: String
}
```

## Usage

Place your blocks inside `content/blocks` as follows:

```sh
site
  └── content
    └── blocks
      └── card.mdx
```

Then build your block using `MDX`:

```jsx
// content/blocks/card.mdx

<Div borderWidth="1px" rounded="5px">
  <Image src="placeholder.jpg" />
  <Div p="6">
    <H4 my="0">Heading</H4>
    <P mb="0">This is some text.</P>
  </Div>
</Div>
```

### Use the block on a page

To place a block, you use the `Block` component and the block name.

```jsx
<Block src="card" />
```

## Dynamic blocks

Blocks can accept props and this makes blocks really powerful.

Wrap the block in a named export.

```jsx
// content/blocks/card.mdx

export const Card = ({ heading, text, image }) => (
  <Div borderWidth="1px" rounded="5px">
    <Image src={image} />
    <Div p="6">
      <H4 my="0">{heading}</H4>
      <P mb="0">{text}</P>
    </Div>
  </Div>
)
```

### Using props with blocks

```jsx
<Grid col="2" gap="4">
  <Block src="card" heading="Heading One" text="This is the card one." />
  <Block src="card" heading="Heading One" text="This is the card two." />
</Grid>
```

Check out the [Blocks library](https://reflexjs.org/library/blocks) for pre-built blocks you can copy and drop into your site.

## Documentation

Read the docs at [https://reflexjs.org/docs/blocks](https://reflexjs.org/docs/blocks).
