import { DosageType, PartialDateTimeKindCode, UnitsOfTimeType } from '@ltht-react/types'

export const thenDosageInstruction1: DosageType = {
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

export const thenDosageInstruction2: DosageType = {
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

export const thenDosageInstruction3: DosageType = {
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

export const thenDosageInstruction4: DosageType = {
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

export const thenDosageInstruction5: DosageType = {
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

export const thenDosageInstruction6: DosageType = {
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
