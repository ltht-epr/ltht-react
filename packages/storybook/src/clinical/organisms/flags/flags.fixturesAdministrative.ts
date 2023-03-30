import { Flag, FlagStatusCode, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

// const redactedMetadata: Metadata = {
//   dataSources: [
//     {
//       display: 'Mock',
//     },
//   ],
//   isRedacted: true,
//   requestedWhen: '',
// }

const FlagOne: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard',
  isEnteredInError: false,
  metadata: mockMetadata,
  author: {
    display: 'Smith, John (Dr)',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Data Quality', code: 'DQMERGEDUP' }],
  },
  category: {
    coding: [
      { display: 'Location', code: '66706' },
      { display: 'Demographics', code: '66707' },
    ],
  },
  period: {
    start: {
      value: '2013-01-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Year,
    },
  },
  status: FlagStatusCode.EnteredInError,
  text: {
    div:
      'There is another record in the system which is probably for this patient. Please raise this issue to the Informatics Service Desk and supply the patient details.',
    text: 'Possible Duplicate Patient Exists',
  },
}

const flagsAdministrative: Flag[] = [FlagOne]

export default flagsAdministrative
