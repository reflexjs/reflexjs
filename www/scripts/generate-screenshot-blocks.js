require(`dotenv`).config()
const puppeteer = require("puppeteer")
const { parse } = require("path")
const glob = require("glob")

;(async () => {
  const browser = await puppeteer.launch()

  const capture = async (paths, darkMode = false) => {
    for (let i = 0; i < paths.length; i++) {
      const { url, path, darkPath } = paths[i]
      const page = await browser.newPage()
      await page.setViewport({
        width: 1400,
        height: 4000,
      })
      await page.goto(url)
      await page.waitFor(500)
      const blockWrapper = await page.$("#preview-wrapper")

      // Toggle dark mode on first page.
      if (i === 0 && darkMode) {
        await page.evaluate(() => {
          document.getElementsByClassName("mode-toggle")[0].click()
        })
      }

      if (blockWrapper) {
        console.info(`Saving screenshot to ${path}`)
        await blockWrapper.screenshot({
          path: darkMode ? darkPath : path,
        })
      }

      await page.close()
    }
  }

  try {
    const imagePathPrefix = `content/images/library/blocks`
    const paths = glob.sync(`library/blocks/**/*.mdx`).map((path) => {
      const { name } = parse(path)
      return {
        path: `${imagePathPrefix}/${name}.png`,
        darkPath: `${imagePathPrefix}/${name}-dark.png`,
        url: `${process.env.SITE_URL}/library/blocks/${name}`,
      }
    })

    await capture(paths)
    await capture(paths, true)

    await browser.close()
  } catch (error) {
    console.error(error)
    await browser.close()
  }
})()
