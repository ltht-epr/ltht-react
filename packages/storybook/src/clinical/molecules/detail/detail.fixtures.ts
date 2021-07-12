import {
  Annotation,
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

const annotations: Annotation[] = [
  {
    text: 'Note text',
  },
  {
    author: {
      display: 'Dr. John Doe',
      typeName: 'Practitioner',
    },
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    time: {
      value: '2013-01-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
]

export { annotations, resourceReference, partialDateTime, period, narrative, codeableConcept }
