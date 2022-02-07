import {
  Patient,
  AddressUseCode,
  Metadata,
  AddressTypeCode,
  PartialDateTimeKindCode,
  AdministrativeGenderCode,
  IdentifierUseCode,
  HumanNameUseCode,
} from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock Source',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const AlivePatient: Patient = {
  id: '346ca927-67e0-e951-a2c7-115087226fg2|patient',
  metadata: mockMetadata,
  active: true,
  address: [
    {
      city: 'Leeds',
      country: 'UK',
      district: 'Seacroft',
      state: 'West Yorkshire',
      line: ['My House Name', 'The Street'],
      period: {
        start: {
          value: '2020-04-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      text: 'My House Name, The Street, Seacroft, Leeds, West Yorkshire, UK, LS1 2HL',
      type: AddressTypeCode.Both,
      use: AddressUseCode.Home,
      postalCode: 'LS1 2HL',
    },
  ],
  birthDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '1971-08-17T00:00:00+00:00',
  },
  gender: AdministrativeGenderCode.Female,
  identifier: [
    {
      system: 'https://fhir.nhs.uk/Id/nhs-number',
      value: '9876543210',
      use: IdentifierUseCode.Official,
      extension: [
        {
          url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSNumberVerificationStatus-1',
          valueString: 'test',
          valueCodeableConcept: {
            coding: [
              {
                system: 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1',
                code: '01',
                display: 'Number present and verified',
              },
            ],
          },
        },
      ],
    },
    {
      system: 'https://leedsth.nhs.uk/Id/pas-number',
      value: '0033201',
    },
  ],
  name: [
    {
      family: 'Smith',
      given: ['Jane', 'Elizabeth'],
      prefix: ['Mrs'],
      text: 'Jane Elizabeth Smith',
      use: HumanNameUseCode.Usual,
    },
  ],
}

const DeceasedPatient: Patient = {
  id: '829ca260-67e0-e357-b2c7-115087226fg2|patient',
  metadata: mockMetadata,
  active: true,
  address: [
    {
      city: 'Leeds',
      line: ['18 Benson Gardens'],
      period: {
        start: {
          value: '2020-04-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      text: '18 Benson Gardens, Leeds, LS11 8HK',
      type: AddressTypeCode.Both,
      use: AddressUseCode.Home,
      postalCode: 'LS11 8HK',
    },
  ],
  birthDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '1955-06-30T00:00:00+00:00',
  },
  deceased: {
    deceasedBoolean: true,
    deceasedDateTime: {
      kind: PartialDateTimeKindCode.Date,
      value: '2020-02-05T00:00:00+00:00',
    },
  },
  gender: AdministrativeGenderCode.Male,
  identifier: [
    {
      system: 'https://fhir.nhs.uk/Id/nhs-number',
      value: '8967452301',
      use: IdentifierUseCode.Official,
      extension: [
        {
          url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSNumberVerificationStatus-1',
          valueString: 'test',
          valueCodeableConcept: {
            coding: [
              {
                system: 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1',
                code: '01',
                display: 'Number present and verified',
              },
            ],
          },
        },
      ],
    },
    {
      system: 'https://leedsth.nhs.uk/Id/pas-number',
      value: '0056341',
      use: IdentifierUseCode.Official,
    },
  ],
  name: [
    {
      family: 'Woo',
      given: ['John'],
      prefix: ['Mr'],
      text: 'John Woo',
      use: HumanNameUseCode.Usual,
    },
  ],
}

const DeceasedPatientWithoutDate: Patient = {
  id: '829ca260-67e0-e357-b2c7-115087226fg2|patient',
  metadata: mockMetadata,
  active: true,
  address: [
    {
      city: 'Leeds',
      line: ['18 Benson Gardens'],
      period: {
        start: {
          value: '2020-04-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      text: '18 Benson Gardens, Leeds, LS11 8HK',
      type: AddressTypeCode.Both,
      use: AddressUseCode.Home,
      postalCode: 'LS11 8HK',
    },
  ],
  birthDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '1955-06-30T00:00:00+00:00',
  },
  deceased: {
    deceasedBoolean: true,
    deceasedDateTime: null,
  },
  gender: AdministrativeGenderCode.Male,
  identifier: [
    {
      system: 'https://fhir.nhs.uk/Id/nhs-number',
      value: '8967452301',
      use: IdentifierUseCode.Official,
      extension: [
        {
          url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSNumberVerificationStatus-1',
          valueString: 'test',
          valueCodeableConcept: {
            coding: [
              {
                system: 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1',
                code: '01',
                display: 'Number present and verified',
              },
            ],
          },
        },
      ],
    },
    {
      system: 'https://leedsth.nhs.uk/Id/pas-number',
      value: '0056341',
      use: IdentifierUseCode.Official,
    },
  ],
  name: [
    {
      family: 'Woo',
      given: ['John'],
      prefix: ['Mr'],
      text: 'John Woo',
      use: HumanNameUseCode.Usual,
    },
  ],
}

const DeceasedPatientWithoutBoolean: Patient = {
  id: '829ca260-67e0-e357-b2c7-115087226fg2|patient',
  metadata: mockMetadata,
  active: true,
  address: [
    {
      city: 'Leeds',
      line: ['18 Benson Gardens'],
      period: {
        start: {
          value: '2020-04-01T00:00:00+00:00',
          kind: PartialDateTimeKindCode.Date,
        },
      },
      text: '18 Benson Gardens, Leeds, LS11 8HK',
      type: AddressTypeCode.Both,
      use: AddressUseCode.Home,
      postalCode: 'LS11 8HK',
    },
  ],
  birthDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '1955-06-30T00:00:00+00:00',
  },
  deceased: {
    deceasedBoolean: null,
    deceasedDateTime: {
      kind: PartialDateTimeKindCode.Date,
      value: '2020-02-05T00:00:00+00:00',
    },
  },
  gender: AdministrativeGenderCode.Male,
  identifier: [
    {
      system: 'https://fhir.nhs.uk/Id/nhs-number',
      value: '8967452301',
      use: IdentifierUseCode.Official,
      extension: [
        {
          url: 'https://fhir.hl7.org.uk/STU3/StructureDefinition/Extension-CareConnect-NHSNumberVerificationStatus-1',
          valueString: 'test',
          valueCodeableConcept: {
            coding: [
              {
                system: 'https://fhir.hl7.org.uk/STU3/ValueSet/CareConnect-NHSNumberVerificationStatus-1',
                code: '01',
                display: 'Number present and verified',
              },
            ],
          },
        },
      ],
    },
    {
      system: 'https://leedsth.nhs.uk/Id/pas-number',
      value: '0056341',
      use: IdentifierUseCode.Official,
    },
  ],
  name: [
    {
      family: 'Woo',
      given: ['John'],
      prefix: ['Mr'],
      text: 'John Woo',
      use: HumanNameUseCode.Usual,
    },
  ],
}

export { AlivePatient, DeceasedPatient, DeceasedPatientWithoutDate, DeceasedPatientWithoutBoolean }
