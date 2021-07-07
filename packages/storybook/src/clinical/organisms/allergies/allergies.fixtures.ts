import {
  AllergyIntolerance,
  PartialDateTimeKindCode,
  AllergyIntoleranceCategoryCode,
  AllergyIntoleranceTypeCode,
  AllergyIntoleranceClinicalStatusCode,
  AllergyIntoleranceVerificationStatusCode,
  Metadata,
  AllergyIntoleranceCriticalityCode,
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

const AllergyOne: AllergyIntolerance = {
  id: '580ca927-34e0-e911-a2c7-005056926fe4|allergyalert',
  metadata: mockMetadata,
  assertedDate: {
    value: '2016-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Year,
  },
  asserter: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
  },
  onSet: {
    onSetDateTime: {
      value: '2016-09-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.YearMonth,
    },
  },
  lastOccurrence: {
    value: '2016-09-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.YearMonth,
  },
  code: {
    coding: [{ display: 'Dust Mites', code: '109006' }],
  },
  recorder: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
  },
  category: [AllergyIntoleranceCategoryCode.Environment],
  type: AllergyIntoleranceTypeCode.Intolerance,
  clinicalStatus: AllergyIntoleranceClinicalStatusCode.Active,
  verificationStatus: AllergyIntoleranceVerificationStatusCode.Confirmed,
  criticality: AllergyIntoleranceCriticalityCode.High,
}

const AllergyTwo: AllergyIntolerance = {
  id: '690ca927-68e0-c511-b2c7-898056926ze4|allergyalert',
  metadata: redactedMetadata,
  assertedDate: {
    value: '2013-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Year,
  },
  code: {
    text: 'Kiwi fruit',
  },
  type: AllergyIntoleranceTypeCode.Intolerance,
  clinicalStatus: AllergyIntoleranceClinicalStatusCode.Resolved,
}

const AllergyThree: AllergyIntolerance = {
  id: '690ca927-68e0-c511-b2c7-89804g926fg4|allergyalert',
  metadata: mockMetadata,
  assertedDate: {
    value: '2015-03-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Year,
  },
  code: {
    coding: [],
    text: 'Allergic to Penicilin',
  },
  category: [AllergyIntoleranceCategoryCode.Medication],
  type: AllergyIntoleranceTypeCode.Intolerance,
  clinicalStatus: AllergyIntoleranceClinicalStatusCode.Active,
  criticality: AllergyIntoleranceCriticalityCode.High,
}

const AllergyFour: AllergyIntolerance = {
  id: '690ca927-68e0-c511-b2c7-898056928xe4|allergyalert',
  metadata: redactedMetadata,
  assertedDate: {
    value: '2013-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Year,
  },
  code: {
    text: 'Kiwi fruit',
  },
  type: AllergyIntoleranceTypeCode.Intolerance,
  clinicalStatus: AllergyIntoleranceClinicalStatusCode.Resolved,
}

const allergyList: AllergyIntolerance[] = [AllergyOne, AllergyTwo, AllergyThree, AllergyFour]

export default allergyList
