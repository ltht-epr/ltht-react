import { CarePlan, CarePlanStatusCode, PartialDateTimeKindCode, CarePlanIntentCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  requestedWhen: '',
}

const CarePlanOne: CarePlan = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|careplan',
  metadata: mockMetadata,
  author: [
    { display: 'Dr Joe Bloggs', typeName: 'Test' },
    { display: 'Dr Adam Careplan', typeName: 'Test' },
  ],
  careTeam: [
    {
      display: 'LYPFT Care Team 1',
      typeName: 'Team',
    },
  ],
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
  title: 'Mental Health Crisis Plan',
  description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo',
  text: {
    div: '',
    text:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
  },
}

const CarePlanTwo: CarePlan = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|careplan',
  metadata: mockMetadata,
  author: [{ display: 'John Mclane', typeName: 'Test' }],
  careTeam: [
    {
      display: 'LYPFT Care Team 2',
      typeName: 'Team',
    },
  ],
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
  title: 'Test Care Plan',
}

export { CarePlanOne, CarePlanTwo }
