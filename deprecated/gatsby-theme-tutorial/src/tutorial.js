/** @jsx jsx */
import { jsx, Flexbox } from "reflexjs"
import { MDXRenderer, Icon } from "@reflexjs/gatsby-theme-core"
import { Progress } from "./progress"

export const Tutorial = ({
  title,
  excerpt,
  weight,
  body,
  previousTutorial,
  nextTutorial,
}) => (
  <section pt="8|12|16">
    <div variant="container">
      <Flexbox flexDirection={["column", "row"]} justifyContent="space-between">
        <div textAlign={["center", "left"]}>
          <h1 variant="heading.h1" m="0" fontWeight="extrabold">
            {title}
          </h1>
          <p fontSize="xl|2xl" mt="2" mb="0">
            {excerpt}
          </p>
        </div>
        <Progress current={weight} />
      </Flexbox>
      <section py="8">
        <div
          display="grid"
          col={[1, 2]}
          gap="10"
          sx={{
            "> div": {
              borderWidth: 2,
              borderRadius: "xl",
              p: 6,
              position: "relative",

              "&:nth-of-type(2)": {
                display: ["none", "block"],

                "&:before": {
                  content: "'Preview'",
                  position: "absolute",
                  top: -4,
                  left: 2,
                  bg: "background",
                  px: 4,
                },
              },

              "> h2:first-of-type": {
                my: 0,
                fontSize: ["xl", "2xl", "3xl"],
                a: {
                  color: "text",
                  textDecoration: "none",
                },
              },

              h3: {
                my: 0,
                fontSize: ["lg", "xl", "2xl"],
              },

              h5: {
                mb: 0,
              },
            },
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
      <Flexbox justifyContent="space-between">
        {previousTutorial && (
          <a variant="button.link" href={previousTutorial.slug}>
            <Icon name="arrow-left" mr="2" />
            {previousTutorial.title}
          </a>
        )}
        {nextTutorial && (
          <a variant="button.primary" ml="auto" href={nextTutorial.slug}>
            {nextTutorial.title}
            <Icon name="arrow-right" ml="2" />
          </a>
        )}
      </Flexbox>
    </div>
  </section>
)
