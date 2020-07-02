import { useStaticQuery, graphql } from "gatsby"
import minimatch from "minimatch"

export const useMetatags = (pathname) => {
  const data = useStaticQuery(graphql`
    query {
      allMetatags {
        nodes {
          ...MetatagsFragment
        }
      }
    }
  `)

  if (!pathname) return null

  const { nodes } = data.allMetatags
  const matches = nodes.filter(({ pathname: glob }) => {
    return minimatch(pathname, glob)
  })

  return matches.length && matches.slice(-1)
}
