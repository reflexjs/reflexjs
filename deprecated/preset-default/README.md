# @reflexjs/preset-default

Default preset for reflexjs

## Installation

```sh
npm i @reflexjs/preset-default typeface-inter
```

## Usage

In your `theme.js` file, import and use the preset as follows:

```js
import { merge } from "reflexjs"
import default from "@reflexjs/preset-default"

export default merge(base, {
  colors: {
    // Add your custom colors here.
  },
  // Add other overrides...
})
```
