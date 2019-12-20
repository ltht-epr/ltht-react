interface Identifier {
  readonly system?: string | null | undefined
  readonly value?: string | null | undefined
}

const IdentifierSystem = {
  NhsNumber: 'https://fhir.nhs.uk/Id/nhs-number',
}

export { Identifier, IdentifierSystem }
