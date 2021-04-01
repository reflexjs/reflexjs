import babelReact from "@babel/preset-react"

export default (_, { ...options } = {}) => {
  return {
    presets: [
      [
        babelReact,
        {
          runtime: "automatic",
          importSource: "reflexjs",
          ...options,
        },
      ],
    ],
  }
}
