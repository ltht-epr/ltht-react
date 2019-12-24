import { CodeableConcept } from '../molecules/codeable-concept'
import { Identifier } from '../atoms/identifier'
import { ResourceReference } from '../molecules/resource-reference'
import { Resource } from './resource'
import { Period } from '../atoms/period'

enum StatusCode {
  ACTIVE,
  INACTIVE,
  ENTERED_IN_ERROR,
}

interface Flag extends Resource {
  readonly identifier?: Identifier[] | null | undefined
  readonly status?: StatusCode | null | undefined
  readonly category?: CodeableConcept | null | undefined
  readonly code?: CodeableConcept | null | undefined
  readonly period?: Period | null | undefined
  readonly author?: ResourceReference | null | undefined
}

export { Flag, StatusCode }
