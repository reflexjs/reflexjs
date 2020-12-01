import { motion } from "framer-motion"
import { AnimatedSection } from "@components"
import {
  responsiveScenes,
  stylePropsScenes,
  themeScenes,
  variantsScenes,
} from "@scenes"

const introVariants = {
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
}

function BigLead({ children, ...props }) {
  return (
    <motion.p
      variants={introVariants}
      sx={{
        fontWeight: 600,
        fontSize: "4xl",
        letterSpacing: "tight",
        lineHeight: "snug",
        mt: 8,
        maxW: "none|none|850",
        ...props,
      }}
      {...props}
    >
      {children}
    </motion.p>
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

export default function IndexPage() {
  return (
    <div>
      <section py="40">
        <div variant="container.md">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  ease: "easeInOut",
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              variants={introVariants}
              sx={{
                fontWeight: 800,
                fontSize: "7xl",
                lineHeight: "tight",
                letterSpacing: "tight",
              }}
            >
              Build something amazing.
            </motion.h1>
            <BigLead>
              Reflexjs is a collection of starter kits, themes, and blocks built
              using a best-in-class styling library.
            </BigLead>
            <BigLead>
              It works with Nextjs, Gatsby and any React framework.
            </BigLead>
            <BigLead>
              And has everything you care about: speed and excellent developer
              experience.
            </BigLead>
          </motion.div>
        </div>
        <div variant="container.md">
          <motion.div
            sx={{
              display: "grid",
              gap: 14,
              col: 3,
              mt: 20,
            }}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  delayChildren: 0.75,
                  ease: "easeInOut",
                  staggerChildren: 0.1,
                },
              },
            }}
          >
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
          </motion.div>
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
      />
      <AnimatedSection
        heading="Blocks Library"
        lead="A library of 30+ ready-to-use blocks that you can copy and paste into your site."
      />
      <AnimatedSection
        heading="And so much more."
        lead="A library of 30+ ready-to-use blocks that you can copy and paste into your site."
      />
    </div>
  )
}
