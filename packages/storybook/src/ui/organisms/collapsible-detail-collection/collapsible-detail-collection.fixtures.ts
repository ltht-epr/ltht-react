import {
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
  PartialDateTimeKindCode,
} from '@ltht-react/types'

export const Hemophilia: Condition = {
  id: '333',
  metadata: {
    dataSources: [
      {
        display: 'York',
      },
      {
        display: 'Hull',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
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
        display: 'Hemophilia',
      },
    ],
    text: 'Hemophilia',
  },
  clinicalStatus: ConditionClinicalStatus.Resolved,
  asserter: {
    display: 'Practitioner',
    typeName: 'Practitioner',
  },
  assertedDate: {
    value: '2017-12-12T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.Confirmed,
  severity: {
    coding: [{ code: '2448402', display: 'Moderate' }],
    text: 'Moderate',
  },
}

export default Hemophilia
