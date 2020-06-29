import * as React from "react"
import { graphql } from "gatsby"
import { Container, Section, H1, Flexbox } from "@reflexjs/components"
import { Layout, Seo, ButtonLink, Icon } from "@reflexjs/gatsby-theme-core"
import { Posts } from "./posts"

export const query = graphql`
  query($name: String!) {
    postTag(name: { eq: $name }) {
      name
      slug
    }
    allPost(
      filter: { tags: { elemMatch: { name: { eq: $name } } } }
      sort: { fields: [date], order: DESC }
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`

export default ({ data, pageContext, ...props }) => {
  const { themeOptions } = pageContext
  const { name } = data.postTag
  return (
    <Layout>
      <Seo title={name} description={`Posts tagged with ${name}`} />
      <Section py="8|12|14">
        <Container>
          <Flexbox alignItems="center" mb="6|8|10">
            <H1 m="0">{name}</H1>
            <ButtonLink to={themeOptions.basePath} variant="link" ml="auto">
              All posts <Icon name="arrow-right" ml="2" />
            </ButtonLink>
          </Flexbox>
          <Posts {...data.allPost} {...props} />
        </Container>
      </Section>
    </Layout>
  )
}
