import { CodeableConcept } from './codeable-concept'
import { Identifier } from './identifier'
import { ResourceReference } from './resource-reference'
import { Resource } from './resource'
import { Period } from './period'

enum StatusCode {
  ACTIVE,
  INACTIVE,
  ENTERED_IN_ERROR,
}

interface Flag extends Resource {
  readonly identifier?: Identifier[] | undefined
  readonly status?: StatusCode | undefined
  readonly category?: CodeableConcept | undefined
  readonly code?: CodeableConcept | undefined
  readonly period?: Period | undefined
  readonly author?: ResourceReference | undefined
}

export { Flag, StatusCode }
