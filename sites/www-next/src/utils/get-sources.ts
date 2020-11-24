import { readFileSync } from "fs"
import { blocks } from "@config"
import { Source } from "types"

export function getSources(id: string): Source[] {
  return blocks.sourceTypes.map(
    ({ id: sourceTypeId, label, path, type, extension }): Source => {
      const code = readFileSync(`${path}/${id}.${extension}`, "utf-8")
      return {
        id: sourceTypeId,
        label,
        code,
        type,
      }
    }
  )
}
