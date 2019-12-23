import { Identifier } from '../atoms/identifier'
import { CodeableConcept } from '../molecules/codeable-concept'
import { Resource } from './resource'
import { ResourceReference } from '../molecules/resource-reference'
import { Annotation } from './annotation'

interface AllergyIntolerance extends Resource {
  readonly identifier?: Identifier | null | undefined
  readonly clinicalStatus?: ClinicalStatusCode | null | undefined
  readonly verificationStatus?: VerificationStatusCode | null | undefined
  readonly type?: TypeCode | null | undefined
  readonly category?: CategoryCode[] | null | undefined
  readonly criticality?: CriticalityCode | null | undefined
  readonly code?: CodeableConcept | null | undefined
  readonly assertedDate?: Date | null | undefined
  readonly recorder?: ResourceReference | null | undefined
  readonly asserter?: ResourceReference | null | undefined
  readonly lastOccurence?: Date | null | undefined
  readonly note?: Annotation | null | undefined
}

enum ClinicalStatusCode {
  Active,
  Inactive,
  Resolved,
}

enum VerificationStatusCode {
  Uncofirmed,
  Confirmed,
}

enum TypeCode {
  Allergy,
  Intolerance,
}

enum CategoryCode {
  Food,
  Medication,
  Environment,
  Biologic,
}

enum CriticalityCode {
  Low,
  High,
  UnableToAssess,
}

export { AllergyIntolerance, ClinicalStatusCode, VerificationStatusCode, TypeCode, CategoryCode, CriticalityCode }
