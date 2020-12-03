import jsx from "@babel/plugin-transform-react-jsx"
import pragmatic from "babel-plugin-jsx-pragmatic"

const pragmaName = "jsx"

export default (_, { ...options } = {}) => {
  return {
    plugins: [
      [
        pragmatic,
        {
          export: "jsx",
          module: "reflexjs",
          import: pragmaName,
        },
      ],
      [jsx, { pragma: pragmaName, pragmaFrag: "", ...options }],
    ],
  }
}
