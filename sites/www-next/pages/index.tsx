import { AnimatedSection, Layout } from "@components"
import {
  colorModesScences,
  responsiveScenes,
  stylePropsScenes,
  themeScenes,
  variantsScenes,
} from "@scenes"
import Link from "next/link"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <section py="4|4|4|20">
        <div variant="container.md">
          <h1
            fontWeight="800"
            fontSize="3rem|4rem|4rem|6rem"
            lineHeight="1.3|1.05"
            letterSpacing="tight"
            color="heading"
            py="4"
          >
            A <Highlight>styling library</Highlight> that has everything you
            care about.
          </h1>
          <p
            fontWeight="700"
            fontSize="3rem|4rem|4rem|7xl"
            letterSpacing="tight"
            lineHeight="1.2|1.1"
            mt="2|2|2|8"
            maxW="none|none|850"
          >
            Speed and <Highlight>excellent developer experience</Highlight>.
          </p>
          <div display="grid" gap="8|||16" col="1|1|2|3" mt="10|||20">
            <FeatureCard
              heading="Style props"
              text="Use any CSS property as prop to rapidly style your components."
            />
            <FeatureCard
              heading="Responsive styles"
              text="Add mobile-first responsive styles with a few keystrokes."
            />
            <FeatureCard
              heading="Themes support"
              text="Use a theme for typography, colors, and spacing."
            />
            <FeatureCard
              heading="Variants"
              text="Extract styles to your theme. Re-use them. Compose them."
            />
            <FeatureCard
              heading="Color Modes"
              text="Add dark mode. Add light mode. Add any color mode."
            />
            <FeatureCard
              heading="Blocks Library"
              text="A library of 30+ ready-to-use blocks that you can copy and paste."
            />
          </div>
          <div display="inline-grid" col="2" mt="10|||20" gap="4">
            <Link href="/docs" passHref>
              <a variant="button.primary.lg">
                Get Started <Icon name="arrow-right" size="4" ml="2" />
              </a>
            </Link>
          </div>
        </div>
      </section>
      <AnimatedSection
        heading="No learning curve."
        lead="You already know how to use this. Use any CSS property as style prop to rapidly style your
                components. No need to learn new syntax or class names."
        scenes={stylePropsScenes}
        text={
          <>
            Reflexjs also includes some <em>optional</em> helper props such as{" "}
            <code>bg</code> for <code>backgroundColor</code>, <code>p</code> for{" "}
            <code>padding</code>, <code>mt</code> for <code>marginTop</code>,{" "}
            <code>rounded</code> for <code>borderRadius</code>
            ..etc.
          </>
        }
      />
      <AnimatedSection
        heading="Go responsive with less typing."
        lead="Add mobile-first responsive styles with a few keystrokes."
        scenes={responsiveScenes}
        text={
          <>
            Make any style prop responsive by separating your values with a pipe{" "}
            <code>|</code>. It is the easiest way to add responsive styles.
          </>
        }
      />
      <AnimatedSection
        heading="Build a design system."
        lead="Use a theme for typography, colors, and spacing for constraint-based style props."
        scenes={themeScenes}
      />
      <AnimatedSection
        heading="First-class variant support."
        lead="Extract styles to your theme. Re-use them. Nest them. Compose them."
        scenes={variantsScenes}
      />
      <AnimatedSection
        heading="Color modes."
        lead="Add dark mode. Add light mode. Add any color mode."
        scenes={colorModesScences}
      />
      <AnimatedSection
        heading="And a whole lot more..."
        lead="Typescript, Intellisense, Emmet. Everything you need as a developer."
        py="10"
      >
        <div variant="container.md" p="0" mt="6|6|6|10">
          <div display="inline-grid" mx="0|0|-6|0" col="2" gap="4">
            <Link href="/docs" passHref>
              <a variant="button.primary.lg">
                Get Started <Icon name="arrow-right" size="4" ml="2" />
              </a>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </Layout>
  )
}

function Highlight({ children }) {
  return (
    <span
      background="linear-gradient(90deg, rgb(255, 167, 69) -11.78%, rgb(254, 134, 159) 32.14%, rgb(239, 122, 200) 52.68%, rgb(160, 131, 237) 76.61%, rgb(67, 174, 255) 96.61%)"
      css={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  )
}

function FeatureCard({ heading, text }) {
  return (
    <div>
      <p variant="heading.h3" mb="2">
        {heading}
      </p>
      <p>{text}</p>
    </div>
  )
}
