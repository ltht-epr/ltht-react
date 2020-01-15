import { CodeableConcept, Maybe } from '@ltht-react/types'

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

const codeableConceptTextSummary = (codeableConcept: Maybe<CodeableConcept>[] = []): string => {
  const textSummary = codeableConcept
    .map(item => {
      return item?.text
    })
    .join(', ')
  return textSummary
}

export { codeableConceptDisplaySummary, codeableConceptCodeSummary, codeableConceptTextSummary }
