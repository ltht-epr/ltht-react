import { Encounter, PartialDateTimeKindCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
}

const HospitalStayOne: Encounter = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|hospitalstay',
  metadata: mockMetadata,
  serviceProvider: { display: 'Chapel Allerton Hospital', typeName: 'Hospital' },
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
}

const HospitalStayTwo: Encounter = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|hospitalstay',
  metadata: mockMetadata,
  serviceProvider: { display: 'Beaumont Hospital', typeName: 'Hospital' },
  period: {
    start: {
      value: '2020-01-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
}

export { HospitalStayOne, HospitalStayTwo }
