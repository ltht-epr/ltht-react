import { DocumentReference, DocumentReferenceStatusCode, Metadata } from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const redactedMetaData: Metadata = {
  dataSources: [],
  isRedacted: true,
  requestedWhen: '',
}

const Document1: DocumentReference = {
  id: '6b554095-bd5f-4134-8dbb-a21971959fd3',
  metadata: mockMetadata,
  content: [],
  description: 'Description of document one',
  indexed: {
    value: '2020-04-01T00:00:00+00:00',
  },
  created: {
    value: '2020-04-01T00:00:00+00:00',
  },
  status: DocumentReferenceStatusCode.Current,
  type: {},
}

const Document2: DocumentReference = {
  id: '2d889a55-d7ec-46ae-b674-23dfc6666014',
  metadata: mockMetadata,
  content: [],
  description: 'Description of document two',
  indexed: {
    value: '2019-10-11T00:00:00+00:00',
  },
  created: {
    value: '2019-10-11T00:00:00+00:00',
  },
  status: DocumentReferenceStatusCode.EnteredInError,
  type: {},
}

const Document3: DocumentReference = {
  id: '38962be0-4e5e-4640-a23e-af45da7c0578',
  metadata: redactedMetaData,
  content: [],
  description: 'Description of document three',
  indexed: {
    value: '2020-01-23T00:00:00+00:00',
  },
  created: {
    value: '2020-01-11T00:00:00+00:00',
  },
  status: DocumentReferenceStatusCode.Superseded,
  type: {},
}

const Document4: DocumentReference = {
  id: '38962be0-4e5e-4640-a23e-af45da7c0777',
  metadata: mockMetadata,
  content: [],
  description: 'Description of document three',
  indexed: {
    value: '2020-01-23T00:00:00+00:00',
  },
  created: {
    value: '2020-01-23T00:00:00+00:00',
  },
  status: DocumentReferenceStatusCode.Superseded,
  type: {},
}

const documents: DocumentReference[] = [Document1, Document2, Document3, Document4]

export default documents
