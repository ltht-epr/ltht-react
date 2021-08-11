import {
  MedicationRequest,
  MedicationRequestStatusType,
  MedicationRequestIntentType,
  Metadata,
  PartialDateTimeKindCode,
  DosageType,
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

const dosageInstruction: DosageType = {
  route: {
    coding: [{ code: '333', display: 'Oral' }],
  },
}

const RedactedMedication: MedicationRequest = {
  id: 'a13e06df-c931-4df1-a9a9-af4db56d7a51',
  metadata: redactedMetadata,
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Plan,
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
    isBrand: true,
    form: {
      coding: [{ code: '222', display: 'Tablet' }],
    },
  },
}

const MedicationOne: MedicationRequest = {
  id: '146dd7ae-8fa9-4abe-a909-dde929c96e36',
  metadata: mockMetadata,
  status: MedicationRequestStatusType.Active,
  intent: MedicationRequestIntentType.Plan,
  authoredOn: {
    value: '2021-03-12T10:56:01+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  note: [
    {
      author: {
        display: 'Dr. John Doe',
        typeName: 'Practitioner',
      },
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      time: {
        value: '2013-01-01T00:00:00+00:00',
        kind: PartialDateTimeKindCode.Date,
      },
    },
  ],
  dosageInstruction: [dosageInstruction],
  medicationReference: {
    code: {
      coding: [{ code: '111', display: 'Paracetamol' }],
    },
    isBrand: true,
    form: {
      coding: [{ code: '222', display: 'Tablet' }],
    },
  },
}

export default [MedicationOne, RedactedMedication]
