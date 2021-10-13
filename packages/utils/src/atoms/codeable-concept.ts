import { CodeableConcept, Maybe } from '@ltht-react/types'

const codeableConceptDisplaySummary = (codeableConcept: Maybe<CodeableConcept> = {}): string => {
  const codings = codeableConcept?.coding || []

  let display = codings.map((coding) => coding?.display).join(', ')

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
