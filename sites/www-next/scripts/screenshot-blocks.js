const puppeteer = require("puppeteer")
const { parse } = require("path")
const glob = require("glob")
const fs = require("fs")

;(async () => {
  const browser = await puppeteer.launch()
  const overwrite = process.argv.includes("--overwrite")

  const capture = async (paths, darkMode = false) => {
    for (let i = 0; i < paths.length; i++) {
      const { url, path, darkPath } = paths[i]
      // if (!overwrite && fs.existsSync(path) && fs.existsSync(darkPath)) continue
      if (!overwrite && fs.existsSync(path)) continue
      const page = await browser.newPage()
      await page.setViewport({
        width: 1400,
        height: 4000,
        deviceScaleFactor: 3,
      })
      await page.goto(url)
      await page.evaluate(() => {
        document.getElementById("button-lg").click()
        document.getElementById("button-xl").click()
      })
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
          type: "jpeg",
          quality: 100,
        })
      }

      await page.close()
    }
  }

  try {
    const imagePathPrefix = `public/images/library`
    const paths = glob.sync(`library/blocks/**/*.jsx`).map((path) => {
      const { name } = parse(path)
      return {
        path: `${imagePathPrefix}/${name}.jpeg`,
        darkPath: `${imagePathPrefix}/${name}-dark.jpeg`,
        url: `http://localhost:3000/blocks/${name}`,
      }
    })

    await capture(paths)
    // await capture(paths, true)

    await browser.close()
  } catch (error) {
    console.error(error)
    await browser.close()
  }
})()
