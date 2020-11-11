#!/usr/bin/env node
"use strict"

import { resolve } from "path"
import { readFileSync, writeFileSync } from "fs"
const { preset = "default" } = require("minimist")(process.argv.slice(2))

const themeStub = readFileSync(
  resolve(__dirname, `../stubs/${preset}.theme.js`),
  "utf-8"
)

writeFileSync("./theme.js", themeStub)

console.log(`🎉 Created a new theme.js file with the ${preset} preset.`)
