# @reflexjs/codemod

Provides Codemod transformations to help with code upgrade and migration.

## Usage

```sh
npx @reflexjs/codemod <transform> <path
```

- `transform` - name of the transform
- `path` - files or directory to transform
- `--dry` - Performs a dry-run, no code changes
- `--print` - Prints the changes for comparison

## Codemods

### `to-reflexjs`

This Codemod migrates your `@reflexjs/componens` code to `reflexjs` code.

```js
npx @reflexjs/codemod to-reflexjs
```

Example:

```jsx
import { Div, H1, Button } from "@reflexjs/components"

export default function () {
  return (
    <Div d="flex">
      <H1>This is a heading</H1>
      <Button variant="primary lg">Button</Button>
    </Div>
  )
}
```

Will be transformed to:

```jsx
export default function () {
  return (
    <div display="flex">
      <h1 variant="heading.h1">This is a heading</h1>
      <button variant="button.primary.lg">Button</button>
    </div>
  )
}
```
