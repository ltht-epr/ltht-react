import { Encounter, EncounterStatusCode, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

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

const AppointmentOne: Encounter = {
  id: '346ca927-67e0-e931-a2c7-115087226fg2|appointment',
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
  id: '941ca927-34e0-e911-a2c7-005087226fe4|appointment',
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
  serviceProvider: {
    display: 'Chapel Allerton Hospital',
    typeName: 'Hospital',
  },
  status: EncounterStatusCode.Finished,
}

export { AppointmentOne, AppointmentTwo }
