import * as React from "react"
import { MDXRenderer, Icon } from "@reflexjs/gatsby-theme-core"
import {
  Container,
  H1,
  P,
  Button,
  A,
  Section,
  Grid,
  Flexbox,
  Div,
} from "@reflexjs/components"
import { Progress } from "./progress"

export const Tutorial = ({
  title,
  excerpt,
  weight,
  body,
  previousTutorial,
  nextTutorial,
}) => (
  <Section pt="8|12|16">
    <Container>
      <Flexbox flexDirection={["column", "row"]} justifyContent="space-between">
        <Div textAlign={["center", "left"]}>
          <H1 m="0" fontWeight="extrabold">
            {title}
          </H1>
          <P fontSize="xl|2xl" mt="2" mb="0">
            {excerpt}
          </P>
        </Div>
        <Progress current={weight} />
      </Flexbox>

      <Section py="8">
        <Grid
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
        </Grid>
      </Section>
      <Flexbox justifyContent="space-between">
        {previousTutorial && (
          <Button as={A} variant="link" href={previousTutorial.slug}>
            <Icon name="arrow-left" mr="2" />
            {previousTutorial.title}
          </Button>
        )}
        {nextTutorial && (
          <Button as={A} variant="primary" ml="auto" href={nextTutorial.slug}>
            {nextTutorial.title}
            <Icon name="arrow-right" ml="2" />
          </Button>
        )}
      </Flexbox>
    </Container>
  </Section>
)
