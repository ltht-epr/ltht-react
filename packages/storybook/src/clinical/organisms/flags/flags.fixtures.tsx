import { ButtonProps } from '@ltht-react/button'
import Icon from '@ltht-react/icon'
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
  amendedBy: {
    display: 'Smith, David (Dr)',
    reference:
      'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/9c1ad2c0-ec34-e911-a2c5-005056926fe4|systemuser',
    typeName: 'Practitioner',
    identifier: undefined,
  },
  createdOn: {
    value: '2013-01-01T15:26:26+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  amendedOn: {
    value: '2013-02-01T19:29:16+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  code: {
    coding: [{ display: 'DNACPR', code: 'DNACPR-CODE' }],
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
    text: 'A ReSPECT plan for emergency care, including a DO NOT ATTEMPT CARDIOPULMONARY RESUSCITATION decision, is in place. Please review the ReSPECT form and CPR decision, check for changes and, if valid and applicable, take this DNACPR status into account.',
  },
  extension: [
    { url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'High' },
    { url: 'https://leedsth.nhs.uk/alert/advice', valueString: 'Some advice' },
  ],
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
    text: 'It has been confirmed that Bleomycin has previously been administered to this patient. They may experience severe lung toxicity or death if high concentration oxygen is administered. Commence oxygen therapy only if SaO2 <85%. SaO2 should be maintained no higher than 85-88% whether on invasive or non invasive ventilation. Refer to LTHT Bleomycin pulmonary toxicity guidelines on LHP for further information/contact the Oncology enquiries nurse bleepholder via LTHT switchboard on 0113 2433144.',
  },
  extension: [{ url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'High' }],
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
    coding: [{ display: 'Adrenal Insufficiency', code: 'STEROID' }],
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
    text: 'Requirement for Urgent Glucocorticoids',
  },
  extension: [
    { url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'High' },
    {
      url: 'https://leedsth.nhs.uk/alert/advice',
      valueString:
        'This patient has adrenal insufficiency and is steroid dependent. Any serious injury or illness may precipitate an adrenal crisis. In the event of a serious illness/accident they require the following age-related doses of Hydrocortisone immediately by IM or IV injection: Age <1 year: Hydrocortisone 25 mg Age 1-5 years: Hydrocortisone 50 mg Age > 6 years: Hydrocortisone 100 mg The usual oral steroids should be doubled or tripled. Please seek advice from the on-call endocrinologist',
    },
    {
      url: 'https://leedsth.nhs.uk/alert/linkeddocumentsource',
      valueString: 'https://www.edge.nhs.uk/#/project/100005/site/198655/details',
    },
  ],
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
  extension: [{ url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'High' }],
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
  extension: [{ url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'High' }],
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
    text: 'A ReSPECT plan for care in emergency situations has been completed. Please read and consider these recommendations in event of clinical deterioration.',
  },
  extension: [{ url: 'https://leedsth.nhs.uk/alert/priority', valueString: 'Clinical' }],
}

const FlagSeven: Flag = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|personalertandhazard',
  isEnteredInError: false,
  metadata: redactedMetadata,
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
    div: 'he patient is on an active trial and if the patient is acutely admitted then the Principal Investigator and Trial Nurse need to be informed within 24 hours of the admission.',
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
  status: FlagStatusCode.Active,
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
    div: 'There is another record in the system which is probably for this patient. Please raise this issue to the Informatics Service Desk and supply the patient details.',
    text: 'Possible Duplicate Patient Exists',
  },
}

const flags: Flag[] = [
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

const controls: ButtonProps[] = [
  {
    icon: <Icon type="paper-clip" size="medium" />,
    value: 'Control 1',
    title: 'Description of the button action can go here!!!',
    styling: {
      buttonStyle: 'workflow',
      padding: '20px',
    },
  },
  {
    icon: <Icon type="link" size="medium" />,
    value: 'Control 2',
    styling: {
      buttonStyle: 'standard',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="trash" size="medium" />,
    value: 'Control 3',
    styling: {
      buttonStyle: 'danger',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="star" size="medium" />,
    value: 'Control 4',
    styling: {
      buttonStyle: 'primary',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="check" size="medium" />,
    iconColour: 'black',
    value: 'Control 5',
    styling: {
      buttonStyle: 'clear',
      padding: '2px 10px',
    },
  },
  {
    value: 'Click Me!',
    styling: {
      buttonStyle: 'standard',
      padding: '2px 10px',
    },
    onClick: (e) => {
      e.stopPropagation()
      // eslint-disable-next-line no-alert
      alert('clicked me!')
    },
  },
]

export { flags, controls }
