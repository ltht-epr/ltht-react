import { Metadata } from '../molecules/metadata'

interface Resource {
  readonly id?: string | null | undefined
  readonly metadata?: Metadata | null | undefined
}

export { Resource }
