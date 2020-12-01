import { motion } from "framer-motion"
import { AnimatedSection, Layout } from "@components"
import {
  colorModesScences,
  responsiveScenes,
  stylePropsScenes,
  themeScenes,
  variantsScenes,
} from "@scenes"
import Link from "next/link"
import Image from "next/image"
import { Icon } from "reflexjs"

export default function IndexPage() {
  return (
    <Layout>
      <section py="20">
        <div variant="container.md">
          <h1
            fontWeight="800"
            fontSize="8rem"
            lineHeight="1"
            letterSpacing="tight"
            color="heading"
            py="4"
            background="linear-gradient(90deg, rgb(220, 54, 250) -18.91%, rgb(161, 103, 239) 27.39%, rgb(96, 159, 228) 46.74%, rgb(58, 191, 222) 73.04%, rgb(4, 209, 142) 93.04%)"
            css={{
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
              backgroundClip: "text",
            }}
          >
            Build something amazing.
          </h1>
          <hr borderColor="text" borderBottomWidth="1" w="200" my="14" />
          <BigLead>
            <Highlight>Starter kits, themes, and blocks</Highlight> to help you
            build Nextjs, Gatsby and React sites faster. .
          </BigLead>
          <BigLead>
            Built using a <Highlight>best-in-class styling library</Highlight>{" "}
            that has everything you care about.
          </BigLead>
          <BigLead>
            Speed and <Highlight>excellent developer experience</Highlight>.
          </BigLead>
          <div display="grid" gap="14" col="3" mt="20">
            <FeatureCard
              heading="Style props"
              text="Use any CSS properties as style props to rapidly style your
                components."
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
              text=" A library of 30+ ready-to-use blocks that you can copy and paste."
            />
          </div>
          <div display="inline-grid" col="2" mt="20" gap="4">
            <Link href="/docs" passHref>
              <a variant="button.primary.lg">
                Get Started <Icon name="arrow-right" size="4" ml="2" />
              </a>
            </Link>
            <Link href="/blocks" passHref>
              <a variant="button.secondary.lg">Browse blocks</a>
            </Link>
          </div>
        </div>
      </section>
      <AnimatedSection
        heading="Blocks Library"
        lead="A library of 30+ ready-to-use blocks that you can copy and paste into your site."
      >
        <div display="grid" col="3" gap="10" my="10">
          <div borderWidth="1" rounded="md" py="4">
            <div h="20px" position="relative">
              <Image src="/images/library/header-001.jpeg" layout="fill" />
            </div>
            <div h="141" position="relative">
              <Image src="/images/library/hero-001.jpeg" layout="fill" />
            </div>
            <div h="278" position="relative">
              <Image src="/images/library/features-001.jpeg" layout="fill" />
            </div>
            <div h="60" position="relative">
              <Image src="/images/library/footer-001.jpeg" layout="fill" />
            </div>
          </div>
          <div borderWidth="1" rounded="md" py="4">
            <div h="20px" position="relative">
              <Image src="/images/library/header-001.jpeg" layout="fill" />
            </div>
            <div h="141" position="relative">
              <Image src="/images/library/hero-002.jpeg" layout="fill" />
            </div>
            <div h="278" position="relative">
              <Image src="/images/library/features-001.jpeg" layout="fill" />
            </div>
            <div h="60" position="relative">
              <Image src="/images/library/footer-001.jpeg" layout="fill" />
            </div>
          </div>
          <div borderWidth="1" rounded="md" py="4">
            <div h="20px" position="relative">
              <Image src="/images/library/header-001.jpeg" layout="fill" />
            </div>
            <div h="141" position="relative">
              <Image src="/images/library/hero-003.jpeg" layout="fill" />
            </div>
            <div h="278" position="relative">
              <Image src="/images/library/features-001.jpeg" layout="fill" />
            </div>
            <div h="60" position="relative">
              <Image src="/images/library/footer-001.jpeg" layout="fill" />
            </div>
          </div>
        </div>
      </AnimatedSection>
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
        heading="More Responsive. Less Typing."
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
        heading="First-class variant support"
        lead="Extract styles to your theme. Re-use them. Nest them. Compose them."
        scenes={variantsScenes}
      />
      <AnimatedSection
        heading="Color modes"
        lead="Add dark mode. Add light mode. Add any color mode."
        scenes={colorModesScences}
      />
      <AnimatedSection
        heading="And so much more."
        lead="Typescript, Intellisense, Emmet. Everything you need as a developer."
      />
    </Layout>
  )
}

function BigLead({ children, ...props }) {
  return (
    <p
      fontWeight="700"
      fontSize="5xl"
      letterSpacing="tight"
      lineHeight="snug"
      mt="8"
      maxW="none|none|850"
      {...props}
    >
      {children}
    </p>
  )
}

function Highlight({ children }) {
  return (
    <span
      background="linear-gradient(90deg, rgb(255, 167, 69) -11.78%, rgb(254, 134, 159) 32.14%, rgb(239, 122, 200) 52.68%, rgb(160, 131, 237) 76.61%, rgb(67, 174, 255) 96.61%)"
      css={{
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  )
}

function FeatureCard({ heading, text }) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      <p variant="heading.h4" mb="2">
        {heading}
      </p>
      <p>{text}</p>
    </motion.div>
  )
}
