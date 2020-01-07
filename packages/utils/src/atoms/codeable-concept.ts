import { CodeableConcept } from '@ltht-react/types'

const codeableConceptDisplaySummary = (codeableConcept: CodeableConcept = {}): string => {
  const codings = codeableConcept.coding || []
  const display = codings
    .map(coding => {
      return coding?.display
    })
    .join(', ')
  return display
}

const codeableConceptCodeSummary = (codeableConcept: CodeableConcept = {}): string => {
  const codings = codeableConcept.coding || []
  const code = codings
    .map(coding => {
      return coding?.code
    })
    .join(', ')
  return code
}

export { codeableConceptDisplaySummary, codeableConceptCodeSummary }
