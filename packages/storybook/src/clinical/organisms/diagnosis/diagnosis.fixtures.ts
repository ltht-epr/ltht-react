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
  isRedacted: false,
  requestedWhen: '',
}

const redactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock Source A',
    },
    {
      display: 'Mock Source B',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const ConditionOne: Condition = {
  id: '017ca927-67e0-e581-a2c7-115087226fg2|condition',
  metadata: redactedMetadata,
  asserter: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
  },
  bodySite: [
    {
      coding: [
        {
          code: '1234',
          display: 'Base of phalanx of foot',
        },
      ],
      text: 'Base of phalanx of foot',
    },
    {
      coding: [
        {
          code: '5678',
          display: 'Subcutaneous tissue of lateral border of sole of foot',
        },
      ],
      text: 'Subcutaneous tissue of lateral border of sole of foot',
    },
  ],
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Category A',
        },
      ],
      text: 'Category A',
    },
    {
      coding: [
        {
          code: '55607006',
          display: 'Category B',
        },
      ],
      text: 'Category B',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '60123008',
        display: 'Heel Pain',
      },
    ],
    text: 'Heel Pain',
  },
  evidence: [
    {
      code: [
        {
          coding: [
            {
              code: '1525003',
              display: 'Blister of foot without infection',
            },
          ],
          text: 'Blister of foot without infection',
        },
        {
          coding: [
            {
              code: '556070069',
              display: 'Nonvenomous insect bite of foot with indection',
            },
          ],
          text: 'Nonvenomous insect bite of foot with indection',
        },
      ],
    },
  ],
  clinicalStatus: ConditionClinicalStatus.Active,
  verificationStatus: ConditionVerificationStatus.Confirmed,
  assertedDate: {
    value: '2018-08-07T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  onset: {
    dateTime: {
      value: '2016-09-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.YearMonth,
    },
  },
  stage: {
    summary: {
      coding: [
        {
          code: '786005',
          display: 'Clinical stage I B',
        },
      ],
      text: 'Clinical stage I B',
    },
  },
  severity: {
    coding: [{ code: '2448400', display: 'Moderate' }],
    text: 'Moderate',
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

const conditions: Condition[] = [ConditionOne, ConditionTwo]

export default conditions
