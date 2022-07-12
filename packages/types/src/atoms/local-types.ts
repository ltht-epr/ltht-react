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

export type StatusTypes = 'info' | 'danger' | 'warning' | 'highlight'

export enum TimelineDomainResourceType {
  AuditEvent = 'AUDITEVENT',
  DocumentReference = 'DOCUMENTREFERENCE',
  QuestionnaireResponse = 'QUESTIONNAIRERESPONSE',
}

export enum DetailViewType {
  Compact = 'COMPACT',
  Expanded = 'EXPANDED',
}

export enum SummaryTableViewType {
  Vertical = 'VERTICAL',
  Horizontal = 'HORIZONTAL',
}

export interface KeyValue {
  [key: string]: string
}
