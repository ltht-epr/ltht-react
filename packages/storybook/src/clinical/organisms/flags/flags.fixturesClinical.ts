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
    coding: [{ display: 'ReSPECT', code: 'ReSPECT' }],
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
  status: FlagStatusCode.Inactive,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text:
      'A ReSPECT plan for care in emergency situations has been completed. Please read and consider these recommendations in event of clinical deterioration.',
  },
}

const FlagTwo: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  isEnteredInError: false,
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Infection', code: 'MRSA' }],
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
  text: {
    div: 'Infection Prevention & Control Hazard, please use Apron & Gloves',
    text: 'Staphylococcus aureus - MRSA',
  },
}

const FlagThree: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  isEnteredInError: false,
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Infection', code: 'VRE' }],
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
  text: {
    div: 'Infection Prevention & Control Hazard, please use Apron & Gloves',
    text: 'Vancomycin-resistant Enterococcus sp',
  },
}

const FlagFour: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  isEnteredInError: false,
  metadata: mockMetadata,
  author: {
    display: 'John Smith',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  code: {
    coding: [{ display: 'Active Clinical Trial', code: 'TRIALALERT' }],
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
  text: {
    div:
      'he patient is on an active trial and if the patient is acutely admitted then the Principal Investigator and Trial Nurse need to be informed within 24 hours of the admission.',
    text: 'SOMAscan Diabetes',
  },
}

const flagsClinical: Flag[] = [FlagOne, FlagThree, FlagTwo, FlagFour]

export default flagsClinical
