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

const medicationNewStatus: Extension[] = [
  {
    url: 'https://leedsth.nhs.uk/medication-request/has-changed',
    valueBoolean: false,
  },
  {
    url: 'https://leedsth.nhs.uk/medication-request/status',
    valueString: 'New',
  },
]

const dosageInstruction1: DosageType = {
  sequence: 1,
  route: {
    coding: [{ code: '333', display: 'Inhalation' }],
  },
  text: '2 Puffs, Twice a Day',
  additionalInstruction: [
    {
      text: 'budesonide + formoterol',
    },
    {
      text: 'Twice a Day',
    },
  ],
  patientInstruction: 'Twice a Day (08:00, 22:00) every day',
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

const dosageInstruction2: DosageType = {
  sequence: 2,
  text: '1 Puff, PRN',
  additionalInstruction: [
    {
      text: 'budesonide + formoterol',
    },
    {
      text: 'PRN',
    },
  ],
  patientInstruction:
    'PRN from 12:02 15/07/2021 with a minimum dosage interval of 1 hour and a maximum of 12 Puffs per 1 day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-15T12:02:00+01:00',
        },
      },
      frequencyMax: 1,
      period: 1.0,
      periodUnit: UnitsOfTimeType.H,
    },
  },
  asNeededBoolean: true,
  route: {
    text: 'Inhalation',
  },
  doseQuantity: {
    value: 1,
  },
  // numerator denominator, correct type??
  maxDosePerPeriod: {
    high: {
      value: 12,
      unit: 'Puffs',
    },
    low: {
      value: 1,
      unit: 'day',
    },
  },
}

const dosageInstruction3: DosageType = {
  sequence: 1,
  text: '5 to 10 ml, PRN',
  additionalInstruction: [
    {
      text: 'after meals and at bedtime',
    },
    {
      text: 'PRN',
    },
  ],
  patientInstruction: 'PRN from 11:06 16/07/2021 with a minimum dosage interval of 4 hours',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-16T11:06:00+01:00',
        },
      },
      frequencyMax: 4,
      period: 4.0,
      periodUnit: UnitsOfTimeType.H,
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'Q4H',
          display: 'Q4H',
        },
      ],
      text: 'Every 4 hours at institution specified time',
    },
  },
  asNeededBoolean: true,
  route: {
    text: 'Oral',
  },
  doseQuantity: {
    value: 1,
  },
  doseRange: {
    high: {
      value: 10,
      unit: 'ml',
    },
    low: {
      value: 5,
      unit: 'ml',
    },
  },
}

const dosageInstruction4: DosageType = {
  sequence: 1,
  text: 'At Tea Time',
  additionalInstruction: [
    {
      text: 'For eDAN only. GP see clinical information section for dose and next appointment details',
    },
    {
      text: 'At Tea Time',
    },
  ],
  patientInstruction: 'At Tea Time (18:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-16T18:00:00+01:00',
        },
      },
      frequencyMax: 1,
      period: 4.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['18:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'QD',
          display: 'QD',
        },
      ],
      text: 'Every day at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Not Applicable',
  },
}

const dosageInstruction5: DosageType = {
  sequence: 1,
  text: 'At Tea Time',
  additionalInstruction: [
    {
      text: 'For eDAN only. GP see clinical information section for dose and next appointment details',
    },
    {
      text: 'At Tea Time',
    },
  ],
  patientInstruction: 'At Tea Time (18:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-16T18:00:00+01:00',
        },
      },
      frequencyMax: 1,
      period: 4.0,
      periodUnit: UnitsOfTimeType.D,
      timeOfDay: ['18:00:00'],
    },
    code: {
      coding: [
        {
          system: 'http://hl7.org/fhir/v3/GTSAbbreviation',
          code: 'QD',
          display: 'QD',
        },
      ],
      text: 'Every day at institution specified time',
    },
  },
  asNeededBoolean: false,
  route: {
    text: 'Not Applicable',
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
  patientInstruction: 'At Tea Time (18:00) every day',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-12T18:00:00+01:00',
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
        },
        end: {
          value: '2021-07-19T08:00:00+01:00',
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
  patientInstruction: 'In the Morning (08:00) every day for 7 days',
  timing: {
    repeat: {
      boundsPeriod: {
        start: {
          value: '2021-07-20T08:00:00+01:00',
        },
        end: {
          value: '2021-07-26T08:00:00+01:00',
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
        start: { value: '2021-07-27T08:00:00+01:00' },
        end: { value: '2021-08-02T08:00:00+01:00' },
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
        start: { value: '2021-08-03T08:00:00+01:00' },
        end: { value: '2021-08-09T08:00:00+01:00' },
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
        start: { value: '2021-08-10T08:00:00+01:00' },
        end: { value: '2021-08-16T08:00:00+01:00' },
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
        start: { value: '2021-08-17T08:00:00+01:00' },
        end: { value: '2021-08-23T08:00:00+01:00' },
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
        start: { value: '2021-08-24T08:00:00+01:00' },
        end: { value: '2021-08-30T08:00:00+01:00' },
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
        start: { value: '2021-08-31T08:00:00+01:00' },
        end: { value: '2021-09-06T08:00:00+01:00' },
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

const NewMedication1: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: mockMetadata,
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Plan,
  authoredOn: {
    value: '2021-03-12T10:56:01+00:00',
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
    dosageInstruction1,
    dosageInstruction2,
    dosageInstruction3,
    dosageInstruction4,
    dosageInstruction5,
  ],
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
    isBrand: true,
    form: {
      coding: [{ code: '222', display: 'Tablet' }],
    },
  },
  extension: medicationNewStatus,
}

const NewMedication2: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: mockMetadata,
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

const NewMedication3: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
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
}

export default [NewMedication1, NewMedication2, NewMedication3, ChangedMedication, RedactedMedication]
