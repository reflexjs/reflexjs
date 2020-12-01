import { motion } from "framer-motion"
import { AnimatedScenes, AnimatedToken, TokenLine } from "@components"

export function ThemeSection() {
  const scenes = [
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine value={`    primary: "#06f"`} />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine value={`    lg: "2.4rem"`} />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine value={`    xl: "4rem"`} />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine value={`    lg: "2.4rem"`} />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine value={`    xl: "4rem"`} />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine value={`    lg: "2.4rem"`} />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine value={`    xl: "4rem"`} />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button`} />
          <TokenLine
            value={`  bg="`}
            suffix={`"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
            }}
          />
          <TokenLine value={`>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3" bg="primary">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine
            value={`    lg: "2.4rem"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              adjustPosition: true,
              shade: 1,
            }}
          />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine value={`    xl: "4rem"`} />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button`} />
          <TokenLine
            value={`  bg="`}
            suffix={`"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
            }}
          />
          <TokenLine value={`>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3" bg="primary">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine
            value={`    lg: "2.4rem"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              adjustPosition: true,
              shade: 1,
            }}
          />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine value={`    xl: "4rem"`} />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button`} />
          <TokenLine
            value={`  bg="`}
            suffix={`"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
            }}
          />
          <TokenLine
            value={`  fontSize="`}
            suffix={`"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              shade: 1,
            }}
          />
          <TokenLine value={`>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3" bg="primary" fontSize="2.4rem">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine
            value={`    lg: "2.4rem"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              adjustPosition: true,
              shade: 1,
            }}
          />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine
            value={`    xl: "4rem"`}
            token={{
              name: "theme.radii.xl",
              value: "xl",
              adjustPosition: true,
              shade: 2,
            }}
          />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button`} />
          <TokenLine
            value={`  bg="`}
            suffix={`"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
            }}
          />
          <TokenLine
            value={`  fontSize="`}
            suffix={`"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              shade: 1,
            }}
          />
          <TokenLine value={`>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button color="white" px="8" py="3" bg="primary" fontSize="2.4rem">
            Button
          </button>
        </motion.div>
      ),
    },
    {
      code: (
        <div>
          <TokenLine value="const theme = {" />
          <TokenLine value={`  colors: {`} />
          <TokenLine
            value={`    primary: "#06f"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
              adjustPosition: true,
            }}
          />
          <TokenLine value="  }," />
          <TokenLine />
          <TokenLine value={`  fontSizes: {`} />
          <TokenLine value={`    sm: "0.8rem",`} />
          <TokenLine
            value={`    lg: "2.4rem"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              adjustPosition: true,
              shade: 1,
            }}
          />
          <TokenLine value="  }" />
          <TokenLine />
          <TokenLine value={`  radii: {`} />
          <TokenLine value={`    sm: "1rem",`} />
          <TokenLine
            value={`    xl: "4rem"`}
            token={{
              name: "theme.radii.xl",
              value: "xl",
              adjustPosition: true,
              shade: 2,
            }}
          />
          <TokenLine value={`  }`} />
          <TokenLine value={`}`} />
          <TokenLine />
          <TokenLine value={`<button`} />
          <TokenLine
            value={`  bg="`}
            suffix={`"`}
            token={{
              name: "theme.colors.primary",
              value: "primary",
            }}
          />
          <TokenLine
            value={`  fontSize="`}
            suffix={`"`}
            token={{
              name: "theme.fontSizes.lg",
              value: "lg",
              shade: 1,
            }}
          />
          <TokenLine
            value={`  rounded="`}
            suffix={`"`}
            token={{
              name: "theme.radii.xl",
              value: "xl",
              shade: 2,
            }}
          />
          <TokenLine value={`>`} />
          <TokenLine value={`  Button`} />
          <TokenLine value={`</button>`} />
        </div>
      ),
      preview: (
        <motion.div layoutId="preview.button">
          <button
            color="white"
            px="8"
            py="3"
            bg="primary"
            fontSize="2.4rem"
            rounded="4rem"
          >
            Button
          </button>
        </motion.div>
      ),
    },
  ]

  return <AnimatedScenes scenes={scenes} />
}
