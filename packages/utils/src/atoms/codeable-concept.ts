import { CodeableConcept, Maybe } from '@ltht-react/types'

const codeableConceptDisplaySummary = (codeableConcept: Maybe<CodeableConcept> = {}): string => {
  const codings = codeableConcept?.coding || []

  // Get a list of codings if are available
  // An empty array, or array of codings that don't have the display property set will return empty string
  let display = codings.map((coding) => coding?.display).join(', ')

  // Check to see if anything was generated, if not default to the concept's text or empty string if that doesnt exist
  if (display?.length === 0) {
    display = codeableConcept?.text ?? ''
  }

  return display
}

const codeableConceptCodeSummary = (codeableConcept: Maybe<CodeableConcept> = {}): string => {
  const codings = codeableConcept?.coding || []
  const code = codings.map((coding) => coding?.code).join(', ')
  return code
}

const codeableConceptTextSummary = (codeableConcept: Maybe<CodeableConcept>[] = []): string => {
  const textSummary = codeableConcept.map((item) => item?.text ?? codeableConceptDisplaySummary(item)).join(', ')
  return textSummary
}

export { codeableConceptDisplaySummary, codeableConceptCodeSummary, codeableConceptTextSummary }
