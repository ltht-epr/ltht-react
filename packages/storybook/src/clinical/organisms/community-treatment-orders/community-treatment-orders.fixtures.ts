import { LypftCommunityTreatmentOrder, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

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

const CommunityTreatmentOrderOne: LypftCommunityTreatmentOrder = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|communityTreatmentOrder',
  isEnteredInError: false,
  metadata: mockMetadata,
  consentToTreat: 'Consent Not Given',
  legalStatus: {
    coding: [{ display: 'Approved', code: '3309007' }],
    text: 'Approved',
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
  restrictions: 'No restrictions',
}

const CommunityTreatmentOrderTwo: LypftCommunityTreatmentOrder = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|communityTreatmentOrder',
  isEnteredInError: false,
  metadata: redactedMetadata,
  consentToTreat: 'Consent Given',
  legalStatus: {
    coding: [{ display: 'Pending', code: '779007' }],
    text: 'Pending',
  },
  period: {
    start: {
      value: '2020-01-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  restrictions: 'No Restrictions',
}

const CommunityTreatmentOrderThree: LypftCommunityTreatmentOrder = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|communityTreatmentOrder',
  isEnteredInError: false,
  metadata: redactedMetadata,
  consentToTreat: 'Consent Given',
  legalStatus: {
    coding: [{ display: 'Pending', code: '779007' }],
    text: 'Pending',
  },
  period: {
    start: {
      value: '2020-01-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
}

const orders: LypftCommunityTreatmentOrder[] = [
  CommunityTreatmentOrderOne,
  CommunityTreatmentOrderTwo,
  CommunityTreatmentOrderThree,
]

export default orders
