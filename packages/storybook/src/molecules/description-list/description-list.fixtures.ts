import {
  ResourceReference,
  PartialDateTime,
  PartialDateTimeKindCode,
  CodeableConcept,
  Narrative,
  Period,
} from '@ltht-react/types'

const resourceReference: ResourceReference = {
  display: 'Smith, John (Dr)',
  reference:
    'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
  typeName: 'Practitioner',
  identifier: undefined,
}

const partialDateTime: PartialDateTime = {
  value: '2013-01-01T00:00:00+00:00',
  kind: PartialDateTimeKindCode.Date,
}

const codeableConcept: CodeableConcept = {
  text: 'See GP regarding sore throat',
  coding: [{ display: 'GP', code: '64706' }],
}

const narrative: Narrative = {
  text: 'See GP regarding sore throat',
  div: 'test',
}

const period: Period = {
  start: {
    value: '2020-04-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
}

export { resourceReference, partialDateTime, period, narrative, codeableConcept }
