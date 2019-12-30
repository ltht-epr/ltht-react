import { Metadata } from './metadata'

interface Resource {
  readonly id?: string | null | undefined
  readonly metadata?: Metadata | null | undefined
}

export { Resource }
