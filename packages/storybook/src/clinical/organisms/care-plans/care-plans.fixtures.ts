import {
  CarePlan,
  CarePlanStatusCode,
  PartialDateTimeKindCode,
  CarePlanIntentCode,
  Metadata,
  NarrativeStatusCode,
  CarePlanActivityDetailStatusCode,
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

const CarePlanOne: CarePlan = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|careplan',
  isEnteredInError: false,
  metadata: redactedMetadata,
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
  isEnteredInError: false,
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

const CarePlanThree: CarePlan = {
  id: 'gpvisit',
  isEnteredInError: false,
  metadata: mockMetadata,
  author: [
    { display: 'Dr Joe Bloggs', typeName: 'Test' },
    { display: 'Dr Adam Careplan', typeName: 'Test' },
  ],
  text: {
    status: NarrativeStatusCode.Additional,
    text: '',
    div:
      "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n      <p>  Represents the flow of a patient within a practice. The plan is created when\n        they arrive and represents the 'care' of the patient over the course of that encounter.\n        They first see the nurse for basic observations (BP, pulse, temp) then the doctor for\n        the consultation and finally the nurse again for a tetanus immunization. As the plan is\n        updated (e.g. a new activity added), different versions of the plan exist, and workflow timings\n        for reporting can be gained by examining the plan history. This example is the version after\n        seeing the doctor, and waiting for the nurse.The plan can either be created 'ad hoc' and modified as\n        the parient progresses, or start with a standard template (which can, of course, be altered to suit the patient.</p>\n    </div>",
  },
  title: 'Test Care Plan',
  status: CarePlanStatusCode.Active,
  intent: CarePlanIntentCode.Plan,
  period: {
    start: {
      value: '2014-02-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  careTeam: [
    {
      reference: '#careteam',
      display: '',
      typeName: '',
    },
  ],
  addresses: [
    {
      reference: '#p1',
      display: 'obesity',
      typeName: '',
    },
  ],
  goal: [
    {
      reference: '#goal',
      display: '',
      typeName: '',
    },
  ],
  activity: {
    outcomeReference: [
      {
        reference: 'Encounter/example',
        typeName: '',
        display: '',
      },
    ],
    detail: {
      status: CarePlanActivityDetailStatusCode.Completed,
      performer: [
        {
          reference: 'Practitioner/13',
          display: 'Nurse Nancy',
          typeName: '',
        },
      ],
    },
  },
}

const carePlans: CarePlan[] = [CarePlanOne, CarePlanTwo, CarePlanThree]

export default carePlans
