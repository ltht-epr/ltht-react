import { Coding } from './coding'

interface Metadata {
  readonly versionId?: string | null | undefined
  readonly lastUpdated?: Date | null | undefined
  readonly dataSources: Coding[] | null | undefined
}

export { Metadata }
