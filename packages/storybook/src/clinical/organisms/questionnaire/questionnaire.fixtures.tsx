import {
  QuestionnaireResponse,
  QuestionnaireResponseStatus,
  QuestionnairePublicationStatus,
  QuestionnaireItemTypeCode,
  PartialDateTimeKindCode,
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

const MockQuestionnare: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-17T13:13:56.9755581+01:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'John Smith',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: 'http://ehr.leedsth.nhs.uk/questionnaire/Right-To-Reside',
    version: '1',
    title: 'Right to Reside',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'Do you have allergies?',
        type: QuestionnaireItemTypeCode.QuestionBoolean,
        item: null,
      },
      {
        linkId: '2',
        text: 'This is some display text.',
        type: QuestionnaireItemTypeCode.Display,
        item: null,
      },
      {
        linkId: '3',
        text: 'General questions',
        type: QuestionnaireItemTypeCode.Group,
        item: [
          {
            linkId: '3.1',
            text: 'What is your gender?',
            type: QuestionnaireItemTypeCode.QuestionString,
          },
          {
            linkId: '3.2',
            text: 'What is your date of birth?',
            type: QuestionnaireItemTypeCode.QuestionDate,
          },
        ],
      },
      {
        linkId: '4',
        text: 'Clinical Summary',
        type: QuestionnaireItemTypeCode.QuestionStringBbCode,
        item: null,
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: true,
          valueDateTime: null,
        },
      ],
      item: null,
    },
    {
      linkId: '3',
      text: null,
      answer: null,
      item: [
        {
          linkId: '3.1',
          text: null,
          answer: [
            {
              valueString: 'Male',
              valueBoolean: false,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '3.2',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: false,
              valueDateTime: {
                kind: PartialDateTimeKindCode.Date,
                value: '1971-01-12T00:00:00+00:00',
              },
            },
          ],
        },
      ],
    },
    {
      linkId: '4',
      text: null,
      answer: [
        {
          valueString: '[b]Bold text...[/b]\n[i]Italic text...[/i]\n[u]Underline text...[/u]',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
  ],
}

export default MockQuestionnare
