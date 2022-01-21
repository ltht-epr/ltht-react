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

const redactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const FlagOne: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe5|personalertandhazard',
  metadata: redactedMetadata,
  author: {
    display: 'Smith, John (Dr)',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Lives in Known High Risk Area', code: '109006' }],
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
    div: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, falli nulla oportere vel eu. Ea meis moderatius scripserit his, ei decore ceteros has. Quo at apeirian facilisi consectetuer. At putant animal persius his, inani maiestatis moderatius vis no',
  },
}

const FlagTwo: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'High Risk of Violence', code: '56706' }],
  },
  category: {
    coding: [{ display: 'Violence', code: '66706' }],
  },
  period: {
    start: {
      value: '2013-01-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
    end: {
      value: '2014-02-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },

  status: FlagStatusCode.Inactive,
}

const flags: Flag[] = [FlagOne, FlagTwo]

export default flags
