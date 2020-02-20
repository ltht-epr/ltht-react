import { EpisodeOfCare, PartialDateTimeKindCode, EpisodeOfCareStatusCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  requestedWhen: '',
}

const InvolvedTeamOne: EpisodeOfCare = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|involvedteam',
  metadata: mockMetadata,
  team: [{ display: 'LYPFT Outbound Care Team', typeName: 'Test Team' }],
  period: {
    start: {
      value: '2018-12-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
    end: {
      value: '2020-01-02T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  careManager: { display: 'Bella Swann (0113 111111)', typeName: 'Care Manager' },
  type: [
    {
      coding: [{ display: 'Community Care', code: '109007' }],
    },
  ],
  status: EpisodeOfCareStatusCode.Finished,
}

const InvolvedTeamTwo: EpisodeOfCare = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|involvedteam',
  metadata: mockMetadata,
  team: [{ display: 'LYPFT Inbound Care Team', typeName: 'Test Team' }],
  period: {
    start: {
      value: '2019-12-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  careManager: { display: 'Joe Bloggs (0113 000000)', typeName: 'Care Manager' },
  type: [
    {
      coding: [{ display: 'Home Care', code: '109016' }],
    },
  ],
  status: EpisodeOfCareStatusCode.Active,
}

export { InvolvedTeamOne, InvolvedTeamTwo }
