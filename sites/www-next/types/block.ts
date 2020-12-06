export interface Block {
  id: string
  name: string
  slug: string
  category: BlockCategory
  thumbnail: string
  sources: Source[]
}

export interface BlockCategory {
  id: string
  name: string
  display: string
}

export interface Source {
  id: string
  label: string
  code: string
  type: "block" | "example"
}

export interface SourceType {
  id: string
  extension: "tsx" | "jsx"
  label: string
  path: string
  type: "block" | "example"
}

export interface BlockConfig {
  contentPath: string
  imagePath: string
  extension: "jsx" | "tsx"
  sourceTypes: SourceType[]
  categories: BlockCategory[]
}
