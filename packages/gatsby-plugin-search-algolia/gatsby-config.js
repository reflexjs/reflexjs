const GithubSlugger = require("github-slugger")
const mdxToSearchable = require("./mdx-to-searchable")
const withDefaults = require("./options")
const _types = require("./types")

module.exports = (options) => {
  const Slugger = new GithubSlugger()
  const { appId, adminKey, indexName, types } = withDefaults(options)
  let { query } = withDefaults(options)

  if (!types.length) {
    return {}
  }

  // Build query for supplied types.
  if (!query && types.length) {
    const nodeTypes = types.map((type) =>
      typeof type === "string" ? type : type.type
    )

    query =
      "{" +
      nodeTypes
        .map(
          (type) => `
    ${type} : all${type} {
      nodes {
        ${Object.entries(_types[type].fields)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n")}
        objectID: id
        data
      } 
    }
  `
        )
        .join() +
      "}"
  }

  const queries = [
    {
      query,
      indexName,
      settings: {
        attributeForDistinct: "slug",
        distinct: true,
      },
      transformer: ({ data }) => {
        return Object.keys(data).flatMap((key) => {
          return data[key].nodes.flatMap((node) => {
            Slugger.reset()

            const defaults = {
              title: node.title,
              excerpt: node.excerpt,
              slug: node.slug,
              image: node.image,
              type: key,
              objectID: node.objectID,
            }

            const nodeSections = [
              {
                ...defaults,
              },
            ]

            const sections = mdxToSearchable(node.data.rawBody)
            return sections.reduce((nodeSections, section, index) => {
              Slugger.reset()

              // Create section data.
              const sectionData = {
                ...defaults,
                excerpt: section.text,
              }

              if (section.heading) {
                sectionData.title = `${defaults.title} › ${section.heading}`
                sectionData.slug = `${defaults.slug}#${Slugger.slug(
                  section.heading
                )}`
              }

              return [
                ...nodeSections,
                {
                  ...sectionData,
                  // gatsby-plugin-algolia expects an objectID.
                  // See https://github.com/algolia/gatsby-plugin-algolia/issues/66.
                  objectID: defaults.objectID + index,
                },
              ]
            }, nodeSections)
          })
        })
      },
    },
  ]

  return {
    plugins: [
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId,
          apiKey: adminKey,
          queries,
        },
      },
    ],
  }
}
