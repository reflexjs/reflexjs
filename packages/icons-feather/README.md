# @reflexjs/icons-feather

Packages [feather icons](https://feathericons.com) for Reflex.

## Installation

```sh
npm i @reflexjs/icons-feather
```

## Usage

Create the following file `src/@reflexjs/gatsby-theme-base/icons.js`.

```js
// src/@reflexjs/gatsby-theme-base/icons.js

import icons from "@reflexjs/icons-feather"

export default {
  ...icons,
  custom: `...`,
}
```

Then use icons using the `Icon` component.

```jsx
<Icon name="arrow-right" />
```
