import * as React from "react"
import { graphql } from "gatsby"
import { Layout, Pager } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"
import { Container, Section } from "@reflexjs/components"
import { Presents } from "./presents"

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allPresent(
      sort: { fields: [date], order: DESC }
      filter: { published: { eq: true } }
      skip: $skip
      limit: $limit
    ) {
      presents: nodes {
        ...PresentFragment
      }
    }
  }
`

export default ({ data, ...props }) => {
  const { previousPagePath, nextPagePath } = props.pageContext
  return (
    <Layout pathname={props.location.pathname}>
      <Block src="presents-header" presents={data.allPresent.presents} />
      {data.allPresent ? (
        <Section py="8|12|14">
          <Container>
            <Presents {...data.allPresent} {...props} />
            <Pager
              previousPagePath={previousPagePath}
              nextPagePath={nextPagePath}
            />
          </Container>
        </Section>
      ) : null}
      <Block src="presents-footer" presents={data.allPresent.presents} />
    </Layout>
  )
}
