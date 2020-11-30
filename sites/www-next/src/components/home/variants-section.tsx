import * as React from "react"
import { AnimateSharedLayout, motion, useAnimation } from "framer-motion"

export function VariantsSection() {
  const [counter, setCounter] = React.useState(0)

  const propStyle = (bg, color) => ({
    display: "inline-block",
    bg,
    color,
    px: 1,
    borderRadius: "md",
    opacity: 1,
  })

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1)
    }, 1000)

    setTimeout(() => {
      clearInterval(interval)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div display="grid" col="2" gap="4" my="10">
      <AnimateSharedLayout>
        <div bg="muted" fontFamily="monospace" rounded="xl" p="6">
          <div>const theme = &#123;</div>
          <div>
            {counter >= 2 && (
              <>
                &nbsp;&nbsp;<div sx={propStyle("#06f", "#fff")}>button</div>
                <motion.div
                  layoutId="props.button"
                  sx={{
                    ...propStyle("#06f", "#fff"),
                    ml: `-${6}ch`,
                    opacity: 0,
                  }}
                >
                  button
                </motion.div>
                : &#123;
                <div>&nbsp;&nbsp;&nbsp;&nbsp;fontSize:&nbsp;{`"md"`},</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;cursor:&nbsp;{`"pointer"`}</div>
              </>
            )}
          </div>
          {counter >= 2 && (
            <>
              <div>&nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div sx={propStyle("#fb3640", "#fff")}>primary</div>
                {counter <= 2 && (
                  <motion.div
                    layoutId="props.primary"
                    sx={{
                      ...propStyle("#fb3640", "#fff"),
                      ml: `-${7}ch`,
                      opacity: 0,
                    }}
                  >
                    primary
                  </motion.div>
                )}
                : &#123;
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.bg"
                >
                  bg:&nbsp;{`"primary"`}
                </motion.div>
                ,
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.borderColor"
                >
                  borderColor:&nbsp;{`"primary"`}
                </motion.div>
                ,
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
              <div>&nbsp;</div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div sx={propStyle("#7fdbca", "#111")}>lg</div>
                {counter <= 2 && (
                  <motion.div
                    layoutId="props.lg"
                    sx={{
                      ...propStyle("#7fdbca", "#111"),
                      ml: `-${2}ch`,
                      opacity: 0,
                    }}
                  >
                    lg
                  </motion.div>
                )}
                : &#123;
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.fontSize"
                >
                  fontSize:&nbsp;{`"xl"`}
                </motion.div>
                ,
              </div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</div>
            </>
          )}
          {counter >= 2 && <div>&nbsp;&nbsp;&#125;</div>}
          <div>&#125;</div>
          <div>&nbsp;</div>
          {counter <= 1 && (
            <motion.div layoutId="code" sx={{ bg: "red" }}>
              <div>&lt;button</div>
              <div>
                &nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.bg"
                >
                  bg=&quot;primary&quot;
                </motion.div>
              </div>
              <div>
                &nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.borderColor"
                >
                  borderColor=&quot;primary&quot;
                </motion.div>
              </div>

              <div>
                &nbsp;
                <motion.div
                  sx={{ display: "inline-block" }}
                  layoutId="props.fontSize"
                >
                  fontSize=&quot;xl&quot;
                </motion.div>
              </div>
              <div>&gt;</div>
              <div>&lt;/button&gt;</div>
            </motion.div>
          )}
          {counter === 2 && (
            <motion.div layoutId="code">
              &lt;button&gt;&lt;/button&gt;
            </motion.div>
          )}
          {counter > 2 && (
            <motion.div layout layoutId="code">
              <div>
                &lt;button&nbsp;variant=&quot;
                {
                  <motion.div
                    layoutId="props.button"
                    sx={propStyle("#06f", "#fff")}
                  >
                    button
                  </motion.div>
                }
                .
                {
                  <motion.div
                    layoutId="props.primary"
                    sx={propStyle("#fb3640", "#fff")}
                  >
                    primary
                  </motion.div>
                }
                .
                {
                  <motion.div
                    layoutId="props.lg"
                    sx={propStyle("#7fdbca", "#111")}
                  >
                    lg
                  </motion.div>
                }
                &quot;&gt;
              </div>
              <div>&nbsp;&nbsp;Button</div>
              <div>&lt;/button&gt;</div>
            </motion.div>
          )}
        </div>
        <div
          bg="muted"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p="6"
          rounded="xl"
        >
          {counter <= 1 && (
            <motion.div layoutId="button">
              <div>
                <button variant="button.primary.lg">Large button</button>
              </div>
            </motion.div>
          )}
          {counter === 2 && (
            <motion.div layoutId="button">
              <div>
                <button>Large button</button>
              </div>
            </motion.div>
          )}
          {counter > 2 && (
            <motion.div layoutId="button">
              <div>
                <button variant="button.primary.lg">Large button</button>
              </div>
            </motion.div>
          )}
        </div>
      </AnimateSharedLayout>
    </div>
  )
}
