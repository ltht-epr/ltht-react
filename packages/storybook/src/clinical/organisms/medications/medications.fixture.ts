import {
  MedicationList,
  Metadata,
  MedicationStatusCode,
  MedicationStatement,
  Medication,
  TakenCode,
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

const medicationOne: Medication = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: redactedMetadata,
  code: {
    coding: [
      {
        code: '323509004',
        display: 'Amoxicillin 250mg capsules',
        system: 'http://snomed.info/sct',
      },
    ],
  },
}

const medicationTwo: Medication = {
  id: 'a0259861-c4fb-42fc-8e59-a9133ee5f57d',
  metadata: mockMetadata,
  code: {
    coding: [
      {
        code: '319773006',
        display: 'Aspirin 75mg dispersible tablets',
        system: 'http://snomed.info/sct',
      },
    ],
  },
}

const medicationStatementOne: MedicationStatement = {
  id: 'f6f8e784-2048-4e47-8113-c22cc61851a0',
  dosage: [
    {
      id: 'b53439de-17a1-4e66-98a5-be17cba7f064',
      metadata: mockMetadata,
      patientInstruction: 'Instructions for patient',
      text: 'Take one daily',
    },
  ],
  medication: medicationOne,
  metadata: mockMetadata,
  status: MedicationStatusCode.Active,
  subject: {
    reference: 'patient/0980cd87-220e-4169-8896-87d943630f48',
    display: 'TEST, patient',
    typeName: 'patient',
  },
  taken: TakenCode.Unknown,
}

const medicationStatementTwo: MedicationStatement = {
  id: 'f6f8e784-2048-4e47-8113-c22cc61851a0',
  dosage: [
    {
      id: 'eeed05af-f139-4459-9619-56ce0c820db1',
      metadata: mockMetadata,
      patientInstruction: 'Instructions for patient',
      text: 'Take twice a day',
    },
  ],
  medication: medicationTwo,
  metadata: mockMetadata,
  status: MedicationStatusCode.Active,
  subject: {
    reference: 'patient/0980cd87-220e-4169-8896-87d943630f48',
    display: 'TEST, patient',
    typeName: 'patient',
  },
  taken: TakenCode.Unknown,
}

export const MedicationListOne: MedicationList = {
  id: 'aeb8fd1e-092a-411c-b3da-abfb274cf229',
  metadata: mockMetadata,
  medicationStatements: [medicationStatementOne, medicationStatementTwo],
}

export default MedicationListOne
