import {
  MedicationRequest,
  MedicationRequestStatusType,
  MedicationRequestIntentType,
  Metadata,
  PartialDateTimeKindCode,
  DosageType,
  UnitsOfTimeType,
  Extension,
} from '@ltht-react/types'

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

const medicationChangedStatus: Extension[] = [
  {
    url: 'https://leedsth.nhs.uk/medication-request/has-changed',
    valueBoolean: true,
  },
  {
    url: 'https://leedsth.nhs.uk/medication-request/status',
    valueString: 'Ceased',
  },
]

const dosageInstruction1: DosageType = {
  sequence: 1,
  route: {
    coding: [{ code: '333', display: 'Inhalation' }],
  },
  text: '2 Puffs, Twice a Day',
  // additionalInstruction: [
  //   {
  //     text: 'budesonide + formoterol',
  //   },
  //   {
  //     text: 'Twice a Day',
  //   },
  // ],
  // patientInstruction: 'Twice a Day (08:00, 22:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-15T22:00:00+01:00',
        },
      },
      frequency: 2,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00', '22:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'BID',
          display: 'BID',
        },
      ],
      text: 'Two times a day at institution specified time',
    },
  },
  asNeededBoolean: false,
  doseQuantity: {
    value: 2,
  },
}

const dosageInstruction6: DosageType = {
  sequence: 1,
  text: '25 to 50 g, STAT',
  additionalInstruction: [
    {
      text: 'e.g. DEXTROGEL. Each tube contains 25g oral gel.',
    },
    {
      text: 'STAT',
    },
  ],
  patientInstruction: 'Stat: 12/07/2021 13:36',
  timing: {
    event: [
      {
        value: '2021-07-12T13:36:00+01:00',
        kind: PartialDateTimeKindCode.Date,
      },
    ],
    repeat: {
      count: 1,
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseRange: {
    low: {
      value: 25,
      unit: 'g',
    },
    high: {
      value: 50,
      unit: 'g',
    },
  },
}

const orDosageInstruction1: DosageType = {
  sequence: 1,
  text: '1000 mg, Four Times a Day',
  additionalInstruction: [
    {
      text: 'INTRAVENOUS dose for adults weighing UP TO 50kg',
    },
    {
      text: 'Four Times a Day',
    },
  ],
  patientInstruction: 'Four Times a Day (08:00, 12:00, 18:00, 22:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-12T18:00:00+01:00',
          // is this being passed in?
          kind: PartialDateTimeKindCode.Date,
        },
      },
      frequencyMax: 1,
      period: 4.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00', '12:00:00', '18:00:00', '22:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'QID',
          display: 'QID',
        },
      ],
      text: 'Every day at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'IV / PO',
  },
  doseQuantity: {
    value: 1000,
    unit: 'mg',
  },
}

const orDosageInstruction2: DosageType = {
  sequence: 1,
  text: '1 g, Four Times a Day',
  additionalInstruction: [
    {
      text: 'ORAL dose for adults weighing UP TO 50kg',
    },
    {
      text: 'Four Times a Day',
    },
  ],
  patientInstruction: 'Four Times a Day (08:00, 12:00, 18:00, 22:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-12T18:00:00+01:00',
        },
      },
      frequency: 4,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00', '12:00:00', '18:00:00', '22:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'QID',
          display: 'QID',
        },
      ],
      text: 'Four times a day at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'IV / PO',
  },
  doseQuantity: {
    value: 1,
    unit: 'g',
  },
}

const thenDosageInstruction1: DosageType = {
  sequence: 1,
  text: '40 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-13T08:00:00+01:00',
          kind: PartialDateTimeKindCode.Date,
        },
        end: {
          value: '2021-07-19T08:00:00+01:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 40,
    unit: 'mg',
  },
}

const thenDosageInstruction2: DosageType = {
  sequence: 2,
  text: '35 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-20T08:00:00+01:00',
          kind: PartialDateTimeKindCode.Date,
        },
        end: {
          value: '2021-07-26T08:00:00+01:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 35,
    unit: 'mg',
  },
}

const thenDosageInstruction3: DosageType = {
  sequence: 3,
  text: '30 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-07-27T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-08-02T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 30,
    unit: 'mg',
  },
}

const thenDosageInstruction4: DosageType = {
  sequence: 4,
  text: '25 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-08-03T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-08-09T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 25,
    unit: 'mg',
  },
}

const thenDosageInstruction5: DosageType = {
  sequence: 5,
  text: '20 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-08-10T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-08-16T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 20,
    unit: 'mg',
  },
}

const thenDosageInstruction6: DosageType = {
  sequence: 6,
  text: '15 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-08-17T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-08-23T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 15,
    unit: 'mg',
  },
}

const thenDosageInstruction7: DosageType = {
  sequence: 7,
  text: '10 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-08-24T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-08-30T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 10,
    unit: 'mg',
  },
}

const thenDosageInstruction8: DosageType = {
  sequence: 8,
  text: '5 mg, In the Morning',
  additionalInstruction: [
    {
      text: 'In the Morning',
    },
  ],
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: { value: '2021-08-31T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
        end: { value: '2021-09-06T08:00:00+01:00', kind: PartialDateTimeKindCode.Date },
      },
      count: 7,
      frequency: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['08:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'AM',
          display: 'AM',
        },
      ],
      text: 'Every morning at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 5,
    unit: 'mg',
  },
}

const RedactedMedication: MedicationRequest = {
  id: 'a13e06df-c931-4df1-a9a9-af4db56d7a51',
  metadata: redactedMetadata,
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Plan,
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
    isBrand: true,
    form: {
      coding: [{ code: '222', display: 'Tablet' }],
    },
  },
}

const SingleMedication1: MedicationRequest = {
  id: 'R3|959190a8-4b19-461c-8b64-b2c747977660',
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Order,
  reasonCode: [
    {
      text: 'Symptomatic chronic heart failure with reduced ejection fraction',
    },
  ],
  medicationReference: {
    code: {
      coding: [],
      text: 'valsartan 26mg \u002B sacubitril 24mg',
    },
    form: {
      coding: [],
      text: 'Tablet',
    },
  },
  supportingInformation: [
    {
      typeName: 'Reference',
      identifier: {
        system: 'https://fhir.leedsth.nhs.uk/CodeSystem/medchart-source-1',
        value: 'Not Assigned',
      },
      display: 'John Smith',
    },
  ],
  identifier: [
    {
      system: 'https://leedsth.nhs.uk/cds/instance-identifier',
      value: '959190a8-4b19-461c-8b64-b2c747977660',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/instance-set-identifier',
      value: '7b2236aa-0d82-45e0-9c1b-9f5ea61093e2',
    },
  ],
  extension: [
    {
      url: 'https://leedsth.nhs.uk/medication-request/status',
      valueString: 'New',
      valueBoolean: null,
    },
    {
      url: 'https://leedsth.nhs.uk/medication-request/has-changed',
      valueString: null,
      valueBoolean: false,
    },
  ],
  dosageInstruction: [
    {
      route: {
        text: 'Oral',
        coding: [],
      },
      text: '1 Tablet, Twice a Day',
      additionalInstruction: [
        {
          text: 'test < >    &',
        },
        {
          text: 'Not Assigned',
        },
      ],
      patientInstruction: 'Twice a Day (08:00, 18:00) every day',
      timing: {
        repeat: {
          boundsPeriod: {
            start: {
              value: '2022-01-10T18:00:00+00:00',
              kind: PartialDateTimeKindCode.DateTime,
            },
            end: null,
          },
        },
      },
      doseRange: null,
      doseQuantity: {
        value: 1,
        unit: null,
      },
    },
    {
      route: {
        text: 'Oral',
        coding: [],
      },
      text: '1 Tablet, Twice a Day',
      additionalInstruction: [
        {
          text: '2nd test < >    &',
        },
        {
          text: '2nd Not Assigned',
        },
      ],
      patientInstruction: 'Twice a Day (08:00, 18:00) every day',
      timing: {
        repeat: {
          boundsPeriod: {
            start: {
              value: '2022-01-10T18:00:00+00:00',
              kind: PartialDateTimeKindCode.DateTime,
            },
            end: null,
          },
        },
      },
      doseRange: null,
      doseQuantity: {
        value: 1,
        unit: null,
      },
    },
  ],
  authoredOn: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2022-01-10T12:22:10+00:00',
  },
  note: [
    {
      author: null,
      text: 'asdf asdfasdfasdfsdf',
      time: null,
    },
  ],
  metadata: {
    isRedacted: false,
    dataSources: [],
    requestedWhen: '',
    tag: [
      {
        code: null,
        display: 'SingleLine',
        system: 'https://fhir.leedsth.nhs.uk/CodeSystem/medication-type-identifier-1',
      },
    ],
  },
}

const OrMedication1: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
    tag: [
      {
        system: 'https://fhir.leedsth.nhs.uk/CodeSystem/medication-type-identifier-1',
        display: 'OR',
      },
    ],
  },
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Order,
  authoredOn: {
    value: '2021-03-14T12:56:01+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  note: [
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
  ],
  dosageInstruction: [dosageInstruction6, orDosageInstruction2],
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
  },
  extension: medicationChangedStatus,
}

const AndMedication1: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
    tag: [
      {
        system: 'https://fhir.leedsth.nhs.uk/CodeSystem/medication-type-identifier-1',
        display: 'AND',
      },
    ],
  },
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Order,
  authoredOn: {
    value: '2021-03-14T12:56:01+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  note: [
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
  ],
  dosageInstruction: [orDosageInstruction1, orDosageInstruction2],
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
  },
  extension: medicationChangedStatus,
}

// with then, add new start time to extra instruction
const ThenMedication1: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
    tag: [
      {
        system: 'https://fhir.leedsth.nhs.uk/CodeSystem/medication-type-identifier-1',
        display: 'THEN',
      },
    ],
  },
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Order,
  authoredOn: {
    value: '2021-03-14T12:56:01+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  note: [
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
  ],
  dosageInstruction: [
    thenDosageInstruction1,
    thenDosageInstruction2,
    thenDosageInstruction3,
    thenDosageInstruction4,
    thenDosageInstruction5,
    thenDosageInstruction6,
    thenDosageInstruction7,
    thenDosageInstruction8,
  ],
  reasonCode: [
    {
      text: 'Inflammatory Bowel Disease',
    },
  ],
  medicationReference: {
    code: {
      text: 'prednisolone 5mg',
    },
    isBrand: false,
    form: {
      text: 'Tablet',
    },
  },
  extension: medicationChangedStatus,
}

const ChangedMedication: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: mockMetadata,
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Plan,
  authoredOn: {
    value: '2021-03-12T10:56:01+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  // note: [
  //   {
  //     author: {
  //       display: 'Dr. John Doe',
  //       typeName: 'Practitioner',
  //     },
  //     text:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  //     time: {
  //       value: '2013-01-01T00:00:00+00:00',
  //       kind: PartialDateTimeKindCode.Date,
  //     },
  //   },
  // ],
  reasonCode: [{ text: 'Allergies' }],
  dosageInstruction: [dosageInstruction1],
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
    isBrand: false,
    form: {
      coding: [{ code: '222', display: 'Tablet' }],
    },
  },
  extension: medicationChangedStatus,
}

export default [
  SingleMedication1,
  OrMedication1,
  AndMedication1,
  ThenMedication1,
  ChangedMedication,
  RedactedMedication,
]
