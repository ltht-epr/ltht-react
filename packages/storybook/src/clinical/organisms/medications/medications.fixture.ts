import {
  MedicationRequest,
  MedicationRequestStatusType,
  MedicationRequestIntentType,
  Metadata,
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
