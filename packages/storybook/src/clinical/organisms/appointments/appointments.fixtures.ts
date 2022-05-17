import { Encounter, EncounterStatusCode, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock Source',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const redactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock Source',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const AppointmentOne: Encounter = {
  id: '346ca927-67e0-e951-a2c7-115087226fg2|appointment',
  isEnteredInError: false,
  metadata: mockMetadata,
  text: {
    text: 'See GP regarding sore throat',
    div: 'test',
  },
  type: [
    {
      text: 'See GP regarding sore throat',
      coding: [{ display: 'GP', code: '64706' }],
    },
  ],
  period: {
    start: {
      value: '2020-04-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  serviceProvider: {
    display: 'Beeston Village Surgery',
    typeName: 'GP',
  },
  status: EncounterStatusCode.Planned,
}

const AppointmentTwo: Encounter = {
  id: '941ca927-31e0-e911-a2c7-005087226fe4|appointment',
  isEnteredInError: false,
  metadata: mockMetadata,
  text: {
    text: 'Chest x-ray for recent car accident',
    div: 'test',
  },
  type: [
    {
      text: 'Chest x-ray for recent car accident',
      coding: [{ display: 'Hospital', code: '26706' }],
    },
  ],
  period: {
    start: {
      value: '2019-12-12T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  serviceProvider: {
    display: 'Chapel Allerton Hospital',
    typeName: 'Hospital',
  },
  status: EncounterStatusCode.Finished,
}

const AppointmentThree: Encounter = {
  id: '941ca927-34e0-e9113a2c7-005087226fe4|appointment',
  isEnteredInError: false,
  metadata: mockMetadata,
  text: {
    text: 'Chest x-ray for recent car accident',
    div: 'test',
  },
  type: [
    {
      text: 'Chest x-ray for recent car accident',
      coding: [{ display: 'Hospital', code: '26706' }],
    },
  ],
  period: {
    start: {
      value: '2019-12-12T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  status: EncounterStatusCode.Cancelled,
}

const AppointmentFour: Encounter = {
  id: '941ca927-34e0-e911-a2c7-005087226f44|appointment',
  isEnteredInError: false,
  metadata: redactedMetadata,
  text: {
    text: 'Chest x-ray for recent car accident',
    div: 'test',
  },
  type: [
    {
      text: 'Chest x-ray for recent car accident',
      coding: [{ display: 'Hospital', code: '26706' }],
    },
  ],
  period: {
    start: {
      value: '2019-12-12T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  status: EncounterStatusCode.Cancelled,
}

const appointments: Encounter[] = [AppointmentOne, AppointmentTwo, AppointmentThree, AppointmentFour]

export default appointments
