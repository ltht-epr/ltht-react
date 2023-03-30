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
    coding: [{ display: 'DNACPR', code: '109007' }],
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
  status: FlagStatusCode.Active,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text:
      'A ReSPECT plan for emergency care, including a DO NOT ATTEMPT CARDIOPULMONARY RESUSCITATION decision, is in place. Please review the ReSPECT form and CPR decision, check for changes and, if valid and applicable, take this DNACPR status into account.',
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
    coding: [{ display: 'Oxygen Alert', code: 'BLEOMYCINM' }],
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
  status: FlagStatusCode.Active,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text:
      'It has been confirmed that Bleomycin has previously been administered to this patient. They may experience severe lung toxicity or death if high concentration oxygen is administered. Commence oxygen therapy only if SaO2 <85%. SaO2 should be maintained no higher than 85-88% whether on invasive or non invasive ventilation. Refer to LTHT Bleomycin pulmonary toxicity guidelines on LHP for further information/contact the Oncology enquiries nurse bleepholder via LTHT switchboard on 0113 2433144.',
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
    coding: [{ display: 'Infection', code: 'T_NCOVPP' }],
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
  status: FlagStatusCode.Active,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text: 'COVID19RdRP PCR Positive',
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
    coding: [{ display: 'Life Threatening Anaphylaxis', code: 'ANAPHYLAXI' }],
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
  status: FlagStatusCode.Active,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text: 'This patient has a history of life threatening anaphylaxis.',
  },
}

const FlagFive: Flag = {
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
    coding: [{ display: 'VIOLENT PATIENT', code: 'VIOLENT' }],
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
  status: FlagStatusCode.Active,
  text: {
    div: 'Lorem ipsum dolor sit amet',
    text: 'This patient has a HISTORY OF VIOLENCE TOWARDS STAFF / OTHERS ',
  },
}

const FlagSix: Flag = {
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

const FlagSeven: Flag = {
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

const FlagEight: Flag = {
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

const FlagNine: Flag = {
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

const FlagTen: Flag = {
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
    coding: [{ display: 'Infection', code: 'KPNE' }],
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
  status: FlagStatusCode.Blank,
  text: {
    div: 'Infection Prevention & Control Hazard, please use Apron & Gloves',
    text: 'Klebsiella pneumoniae',
  },
}

const FlagEleven: Flag = {
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

const flagsCombined: Flag[] = [
  FlagOne,
  FlagThree,
  FlagTwo,
  FlagFour,
  FlagFive,
  FlagSix,
  FlagSeven,
  FlagEight,
  FlagNine,
  FlagTen,
  FlagEleven,
]

export default flagsCombined
