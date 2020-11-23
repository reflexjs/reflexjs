import * as React from "react"
import { Container, Grid, Flexbox, Icon } from "@reflexjs/components";

export default function Component() {
  return (
    <section py="8|12|16|24">
      <Container>
        <Grid col="1|2" gap="8|12|16" alignItems="center">
          <Image
            src="placeholder.jpg"
            colStart="null|2"
            w="full"
            rounded="lg"
            overflow="hidden"
          />
          <Flexbox
            flexDirection="column"
            alignItems="center|flex-start"
            textAlign="center|left"
          >
            <h1 variant="heading.h1" m="0" fontWeight="extrabold" lineHeight="tight">
              Supercharge your site.
            </h1>
            <p fontSize="xl|2xl" mt="2">
              Build a blazing fast site with Gatsby and Reflex.
            </p>
            <ButtonLink href="#" variant="primary">
              Get Started
              <Icon name="arrow-right" ml="4" />
            </ButtonLink>
          </Flexbox>
        </Grid>
      </Container>
    </section>
  );
}
