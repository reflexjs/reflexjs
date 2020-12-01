import { motion } from "framer-motion"
import {
  StylePropsSection,
  ResponsiveSection,
  ThemeSection,
  VariantsSection,
} from "@components"

export default function IndexPage() {
  return (
    <div variant="container.md">
      <section
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minH="80vh"
      >
        <motion.div
          sx={{
            width: "100%",
          }}
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <h1
            variant="heading.h2"
            fontWeight="600"
            fontSize="5xl"
            lineHeight="tight"
            sx={{
              span: {
                textDecoration: "underline",
              },
            }}
          >
            Reflexjs is a <span>styling</span> and <span>blocks</span> library
            built for <span>speed</span> and{" "}
            <span>excellent developer experience</span>.
          </h1>
          <p
            variant="heading.h2"
            fontWeight="600"
            fontSize="4xl"
            lineHeight="tight"
            mt="8"
          >
            It works with Nextjs, Gatsby or any React framework.
          </p>
          <p
            variant="heading.h2"
            fontWeight="600"
            fontSize="4xl"
            lineHeight="tight"
            mt="8"
          >
            And comes with everything you need.
          </p>
        </motion.div>
        <div display="grid" col="3" gap="14" my="20">
          <div>
            <h3>Style props</h3>
            <p>
              Use any CSS properties as style props to rapidly style your
              components.
            </p>
          </div>
          <div>
            <h3>Responsive styles</h3>
            <p>Add mobile-first responsive styles with a few keystrokes.</p>
          </div>
          <div>
            <h3>Themes support</h3>
            <p>
              Use a theme for typography, colors, and spacing for a
              constraint-based style props.
            </p>
          </div>
          <div>
            <h3>Variants</h3>
            <p>Extract styles to your theme. Re-use them. Compose them.</p>
          </div>
          <div>
            <h3>Color Modes</h3>
            <p>Add dark mode. Add any color mode.</p>
          </div>
          <div>
            <h3>Blocks Library</h3>
            <p>
              A library of 30+ ready-to-use blocks that you can copy and paste
              into your site.
            </p>
          </div>
        </div>
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">You already know this</h2>
        <p variant="text.lead" mt="3">
          Use any CSS property as style prop to rapidly style your components.
        </p>
        <StylePropsSection
          styles={{
            backgroundColor: "#06f",
            color: "#fff",
            padding: "10px",
            borderRadius: "5px",
          }}
          component="button"
        />
        <p
          variant="text"
          sx={{
            code: {
              fontSize: "md",
              color: "primary",
            },
          }}
        >
          Reflexjs also includes some <em>optional</em> helper props such as{" "}
          <code>bg</code> for <code>backgroundColor</code>, <code>p</code> for{" "}
          <code>padding</code>, <code>mt</code> and <code>rounded</code>..etc.
        </p>
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">More Responsive. Less typing.</h2>
        <p variant="text.lead" mt="3">
          Add mobile-first responsive styles with a few keystrokes.
        </p>
        <ResponsiveSection
          styles={{
            display: "grid",
            col: "1|2|4",
            gap: "4|6|2",
          }}
        />
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">Design System? Constraints? We got you.</h2>
        <p variant="text.lead" mt="3">
          Use a theme for typography, colors, and spacing for a constraint-based
          style props.
        </p>
        <ThemeSection />
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">First-class variant support</h2>
        <p variant="text.lead" mt="3">
          Extract styles to your theme. Re-use them. Compose them.
        </p>
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">Color modes</h2>
        <p variant="text.lead" mt="3">
          Add dark mode. Add any color mode.
        </p>
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">Blocks Library</h2>
        <p variant="text.lead" mt="3">
          A library of 30+ ready-to-use blocks that you can copy and paste into
          your site.
        </p>
      </section>
      <section display="flex" flexDirection="column" py="10" minH="80vh">
        <h2 variant="heading.h2">and so much more.</h2>
        <p variant="text.lead" mt="3">
          Use any CSS properties as style props to rapidly style your
          components.
        </p>
      </section>
    </div>
  )
}

export function StyledComponent({ component, styles, children }) {
  const styleProp = {
    visible: {
      y: 0,
      width: "auto",
    },
    hidden: {
      y: 100,
      width: 0,
    },
  }
  const Tag = component
  return (
    <div display="grid" col="2" gap="4" alignItems="center" my="10">
      <pre
        variant="text.pre"
        fontSize="lg"
        className="language-jsx prism-code"
        w="full"
        my="0"
      >
        <div className="token-line" px="6">
          <span className="token tag punctuation">&lt;</span>
          <span className="token tag class-name">{component}</span>
          {Object.keys(styles).map((prop, index) => (
            <>
              <span>&nbsp;</span>
              <motion.div
                sx={{
                  display: "inline-block",
                }}
                initial="hidden"
                animate="visible"
                variants={styleProp}
                transition={{
                  ease: "easeInOut",
                  delay: 1 + index / 2,
                  duration: 0.5,
                }}
              >
                <span color="prism.string">{prop}</span>
                <span color="prism.punctuation">=</span>
                <span color="prism.punctuation">&ldquo;</span>
                <span color="prism.property">{styles[prop]}</span>
                <span color="prism.punctuation">&rdquo;</span>
              </motion.div>
            </>
          ))}
          <span color="prism.punctuation">&gt;</span>
        </div>
      </pre>
      <div>
        <Tag {...styles}>{children}</Tag>
      </div>
    </div>
  )
}
