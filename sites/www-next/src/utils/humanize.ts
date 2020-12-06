// Helper to humanize a string.
export function humanize(value) {
  return value
    .replace(/^[\s_]+|[\s_]+$/g, "")
    .replace(/[_-\s]+/g, " ")
    .replace(/^[a-z]/, (m) => m.toUpperCase())
}
