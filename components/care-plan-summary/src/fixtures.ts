import { CarePlan, CarePlanStatusCode, PartialDateTimeKindCode, CarePlanIntentCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
}

const CarePlanOne: CarePlan = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|careplan',
  metadata: mockMetadata,
  author: { display: 'Joe Bloggs', type: 'Test' },
  intent: CarePlanIntentCode.Plan,
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
  status: CarePlanStatusCode.Active,
  title: 'Test Care Plan Summary One',
}

const CarePlanTwo: CarePlan = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|careplan',
  metadata: mockMetadata,
  author: { display: 'John Mclane', type: 'Test' },
  intent: CarePlanIntentCode.Proposal,
  period: {
    start: {
      value: '2014-02-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
    end: {
      value: '2015-03-04T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  status: CarePlanStatusCode.Completed,
  title: 'Test Care Plan Summary Two',
}

export { CarePlanOne, CarePlanTwo }
