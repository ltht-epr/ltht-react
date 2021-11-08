export enum NhsNumberStatus {
  Verified = 'VERIFIED',
  NotVerified = 'NOT_VERIFIED',
  Unknown = 'UNKNOWN',
}

export enum PatientIdentifierType {
  NhsNumber = 'https://fhir.nhs.uk/Id/nhs-number',
  PasNumber = 'https://leedsth.nhs.uk/Id/pas-number',
}

export enum CodeSystem {
  MedicationTypeIdentifier = 'https://fhir.leedsth.nhs.uk/CodeSystem/medication-type-identifier-1',
}

export type StatusTypes = 'info' | 'danger' | 'warning'
