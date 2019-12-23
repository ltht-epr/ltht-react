import { Coding } from '../atoms/coding'

interface CodeableConcept {
  readonly coding?: Coding[] | null | undefined
  readonly text?: string | null | undefined
}

export { CodeableConcept }
