const filter = require("lodash.filter")

export const filterNodes = (data, filters, mainProperty = "title") => {
  const key = Object.keys(data)[0]
  const nodes = data[key].nodes

  if (!nodes) return []

  if (typeof filters === "string") {
    filters = {
      [mainProperty]: filters,
    }
  }

  return filter(nodes, filters)
}

// See https://github.com/sindresorhus/is-absolute-url
export const isAbsoluteUrl = (url) => {
  if (typeof url !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``)
  }

  // Don't match Windows paths `c:\`
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false
  }

  // Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
  // Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url)
}

export const isRelativeUrl = (url) => !isAbsoluteUrl(url)

export const absoluteUrl = (path, url) =>
  path ? `${url}/${path.replace(/^\/+/, "")}` : url
