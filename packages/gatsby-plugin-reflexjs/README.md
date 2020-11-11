# gatsby-plugin-reflexjs

A Gatsby plugin for adding reflexjs context.

## Installation

```sh
npm i reflexjs gatsby-plugin-reflexjs
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-reflexjs",
      options: {
        theme: {
          colors: {
            text: "#111",
            background: "#fff",
            primary: "#0cf",
          },
        },
      },
    },
  ],
}
```
