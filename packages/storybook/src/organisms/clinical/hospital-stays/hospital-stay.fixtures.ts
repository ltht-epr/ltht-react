import { Encounter, PartialDateTimeKindCode, Metadata, EncounterStatusCode, IdentifierUseCode } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
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

const HospitalStayThree: Encounter = {
  id: '2aad27ef-6cd4-e911-a2c7-005056926fe4|case',
  type: [
    {
      text: 'Transferred from other hospital due to lack of space',
    },
  ],
  status: EncounterStatusCode.OnLeave,
  statusHistory: [
    {
      status: EncounterStatusCode.InProgress,
      period: {
        start: {
          value: '2020-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
    },
    {
      status: EncounterStatusCode.Finished,
      period: {
        start: {
          value: '2019-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
        end: {
          value: '2020-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
    },
  ],
  episodeOfCare: [
    {
      reference:
        'https://phoenixqa.careworks.ie/Services/api/fhir/v3/episodeofcare/2aad27ef-6cd4-e911-a2c7-005056926fe4|case',
      display: 'Martin, Jack - (15/04/1980) [QA-CAS-000001-6537]',
      typeName: 'EpisodeOfCare',
    },
  ],
  participant: [
    {
      period: {
        start: {
          value: '2020-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      individual: {
        reference:
          'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/c4434f96-633f-e911-a2c5-005056926fe4|systemuser',
        display: 'Guillermo Villar',
        typeName: 'Practitioner',
      },
    },
    {
      period: {
        start: {
          value: '2019-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
        end: {
          value: '2020-01-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      individual: {
        reference:
          'https://phoenixqa.careworks.ie/Services/api/fhir/v3/practitioner/c4434f96-633f-e911-a2c5-005056926fe4|systemuser',
        display: 'Man Test',
        typeName: 'Nurse',
      },
    },
  ],
  period: {
    start: {
      value: '2020-01-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  hospitalization: {
    preAdmissionIdentifier: {
      use: IdentifierUseCode.Official,
      system: 'http://www.bmc.nl/zorgportal/identifiers/pre-admissions',
      value: '93042',
    },
    admitSource: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '305956004',
          display: 'Referral by physician',
        },
      ],
    },
    dischargeDisposition: {
      coding: [
        {
          system: 'http://snomed.info/sct',
          code: '306689006',
          display: 'Discharge to home',
        },
      ],
    },
    extension: [
      {
        url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AdmissionMethod-1',
        valueString: '',
        valueCodeableConcept: {
          coding: [
            {
              display: '1. Transfer of an admitted PATIENT from another Hospital Provider in an emergency',
            },
          ],
        },
      },
      {
        url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-AdmissionMethod-1',
        valueString: '',
        valueCodeableConcept: {
          coding: [
            {
              display: '2. Transfer of an admitted PATIENT from another Hospital Provider in an emergency',
            },
          ],
        },
      },
    ],
  },
  serviceProvider: {
    reference: 'https://phoenixqa.careworks.ie/Services/api/fhir/v3/organisation/324e18de-69d4-e911-a2c7-005056926fe4',
    display: 'Beaumont Hospital',
    typeName: 'Organisation',
  },
  metadata: mockMetadata,
}

export { HospitalStayOne, HospitalStayTwo, HospitalStayThree }
