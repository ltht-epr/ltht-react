import {
  Metadata,
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
  PartialDateTimeKindCode,
} from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const ConditionOne: Condition = {
  id: '017ca927-67e0-e581-a2c7-115087226fg2|condition',
  metadata: mockMetadata,
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Problem',
        },
      ],
      text: 'Problem',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '60123008',
        display: 'Delusional disorder, mixed type',
      },
    ],
    text: 'Delusional disorder, mixed type',
  },
  subject: {
    typeName: 'test',
    display: 'Mr Peter Humble',
  },
  clinicalStatus: ConditionClinicalStatus.Active,
  verificationStatus: ConditionVerificationStatus.Confirmed,
  assertedDate: {
    value: '2020-02-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  severity: {
    coding: [{ code: '2448400', display: 'Severe' }],
    text: 'Severe',
  },
}

const ConditionTwo: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  metadata: mockMetadata,
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Problem',
        },
      ],
      text: 'Problem',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '44054006',
        display: 'Diabetes mellitus type 2',
      },
    ],
    text: 'Diabetes mellitus type 2',
  },
  subject: {
    typeName: 'test',
    display: 'Mr Joe BLoggs',
  },
  clinicalStatus: ConditionClinicalStatus.Remission,
  assertedDate: {
    value: '2020-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.Refuted,
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
}

export { ConditionOne, ConditionTwo }
