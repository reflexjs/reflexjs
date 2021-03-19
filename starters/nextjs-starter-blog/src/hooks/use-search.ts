import * as React from "react"
import Fuse from "fuse.js"

export function useSearch<T>(docs: T[], options: Fuse.IFuseOptions<T>) {
  const [query, setQuery] = React.useState<string | Fuse.Expression>("")
  const fuse = React.useMemo(() => new Fuse<T>(docs, options), [docs, options])

  const hits = React.useMemo<T[]>(
    () => (!query ? docs : fuse.search<T>(query).map((hit) => hit.item)),
    [fuse, query]
  )

  const search = React.useCallback((query) => setQuery(query), [setQuery])

  return {
    hits,
    search,
    query,
  }
}
