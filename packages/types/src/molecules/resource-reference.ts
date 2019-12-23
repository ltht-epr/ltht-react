import { Identifier } from '../atoms/identifier'

interface ResourceReference {
  readonly display?: string | null | undefined
  readonly identifier?: Identifier | null | undefined
  readonly readonly?: string | null | undefined
  readonly type?: string | null | undefined
}

export { ResourceReference }
