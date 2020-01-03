import { Identifier } from './identifier'

interface ResourceReference {
  readonly display: string | null | undefined
  readonly identifier: Identifier | null | undefined
  readonly reference: string | null | undefined
  readonly type: string | null | undefined
}

export { ResourceReference }
