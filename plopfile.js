module.exports = function (plop) {
  plop.setGenerator("block", {
    description: "Create a new block",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the name of the block (hero-001)",
      },
    ],
    actions: [
      {
        type: "add",
        path: "sites/www-next/library/blocks/{{name}}.jsx",
        templateFile: "plop-templates/block.source.hbs",
      },
      {
        type: "add",
        path: "sites/www-next/library/examples/{{name}}.jsx",
        templateFile: "plop-templates/block.example.hbs",
      },
    ],
  })
}
