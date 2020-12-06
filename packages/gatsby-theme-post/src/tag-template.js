/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { graphql } from "gatsby"
import { Layout, ButtonLink, Icon } from "@reflexjs/gatsby-theme-core"
import { Posts } from "./posts"

export const query = graphql`
  query($name: String!) {
    postTag(name: { eq: $name }) {
      name
      slug
    }
    allPost(
      filter: {
        published: { eq: true }
        tags: { elemMatch: { name: { eq: $name } } }
      }
      sort: { fields: [date], order: DESC }
    ) {
      posts: nodes {
        ...PostFragment
      }
    }
  }
`

export default ({ data, ...props }) => (
  <Layout pathname={data.postTag.slug}>
    <section py="8|12|14">
      <div variant="container">
        <Flexbox alignItems="center" mb="6|8|10">
          <h1 variant="heading.h1" m="0">
            {data.postTag.name}
          </h1>
          <ButtonLink
            to={props.pageContext.themeOptions.basePath}
            variant="button.link"
            ml="auto"
          >
            All posts <Icon name="arrow-right" ml="2" />
          </ButtonLink>
        </Flexbox>
        <Posts {...data.allPost} {...props} />
      </div>
    </section>
  </Layout>
)
