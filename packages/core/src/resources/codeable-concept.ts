import { Coding } from './coding'

interface CodeableConcept {
  readonly coding?: Coding[] | undefined
  readonly text?: string | undefined
}

export { CodeableConcept }
