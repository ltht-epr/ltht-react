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

const mockRedactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

export const AuthorInfoData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
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
    isEnteredInError: false,
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
    item: [],
  },
  item: [],
}

export const TextFieldData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
        text: 'What is your gender?',
        type: QuestionnaireItemTypeCode.QuestionString,
      },
      {
        linkId: '2',
        text: 'Investigations',
        type: QuestionnaireItemTypeCode.QuestionString,
      },
      {
        linkId: '3',
        text: 'Summary',
        type: QuestionnaireItemTypeCode.QuestionString,
      },
      {
        linkId: '4',
        text: 'Do you have allergies?',
        type: QuestionnaireItemTypeCode.QuestionString,
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: [
        {
          valueString: 'Male',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
    {
      linkId: '2',
      text: null,
      answer: [
        {
          valueString: 'Male',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
    {
      linkId: '3',
      text: null,
      answer: [
        {
          valueString:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque mauris ut elementum ultrices. Fusce eu erat est. Etiam pulvinar eget ex id pharetra. Maecenas a neque molestie, rhoncus ex ac, gravida lectus. Ut non magna ornare, vulputate magna a, eleifend ipsum. Cras sit amet massa eu nisl efficitur facilisis fermentum non nunc. Donec iaculis mauris ut metus semper facilisis. Praesent pretium tristique est, tristique tempor mi luctus et.',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
    {
      linkId: '4',
      text: null,
      answer: [
        {
          valueString:
            'Mauris quis augue sed quam rhoncus commodo et ut urna. Pellentesque condimentum justo et urna euismod eleifend. Mauris interdum convallis tortor ut lacinia. In ullamcorper sem a dapibus maximus. Nunc cursus eu nibh sed gravida. Curabitur velit nibh, scelerisque ut neque sit amet, tempus ornare sapien. Phasellus lobortis dui vitae ante viverra, gravida finibus diam aliquet. Ut auctor semper eros, quis venenatis est porttitor non. Donec mattis euismod scelerisque. Duis in lectus sit amet metus bibendum euismod. Cras pulvinar dictum tellus, at pellentesque ex consectetur id. Mauris cursus risus quis fermentum ultricies. Mauris non fringilla est. Etiam cursus dictum mauris eu porta. Aliquam sagittis velit ut varius elementum.',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
  ],
}

export const RedactedExampleData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockRedactedMetadata,
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
    isEnteredInError: false,
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockRedactedMetadata,
    url: 'http://ehr.leedsth.nhs.uk/questionnaire/Right-To-Reside',
    version: '1',
    title: 'Right to Reside',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'What is your gender?',
        type: QuestionnaireItemTypeCode.QuestionString,
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: [
        {
          valueString: 'Male',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
  ],
}

export const DateFieldData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
        text: 'What is your date of birth?',
        type: QuestionnaireItemTypeCode.QuestionDate,
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
          valueBoolean: false,
          valueDateTime: {
            kind: PartialDateTimeKindCode.Date,
            value: '1971-01-12T00:00:00+00:00',
          },
        },
      ],
    },
  ],
}

export const RichTextFieldData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
        text: 'Clinical Summary',
        type: QuestionnaireItemTypeCode.QuestionStringBbCode,
        item: null,
      },
      {
        linkId: '2',
        text: 'Investigation',
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
          valueString:
            '[b]Bold text...[/b][i]Italic text...[/i][u]Underline text...[/u] and then some more text to make it obvious that this is a long string that should be the [b]whole width[/b]',
          valueBoolean: false,
          valueDateTime: null,
        },
      ],
      item: null,
    },
    {
      linkId: '2',
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

export const DisplayFieldData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
        linkId: '2',
        text: 'This is some display text.',
        type: QuestionnaireItemTypeCode.Display,
      },
    ],
  },
  item: [
    {
      linkId: '2',
      text: 'This is some display text.',
      answer: null,
      item: [],
    },
  ],
}

export const GroupTypeData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
        text: 'General questions',
        type: QuestionnaireItemTypeCode.Group,
        item: [
          {
            linkId: '1.1',
            text: 'What is your gender?',
            type: QuestionnaireItemTypeCode.QuestionString,
          },
          {
            linkId: '1.2',
            text: 'What is your date of birth?',
            type: QuestionnaireItemTypeCode.QuestionDate,
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: null,
      item: [
        {
          linkId: '1.1',
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
          linkId: '1.2',
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
  ],
}

export const NoAnswerData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: [],
      item: null,
    },
  ],
}

export const BooleanFieldData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
  ],
}

export const RepeatingGroupsExampleData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
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
    isEnteredInError: false,
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
        text: null,
        type: QuestionnaireItemTypeCode.Group,
        repeats: true,
        item: [
          {
            linkId: '1.1',
            text: 'Criteria',
            type: QuestionnaireItemTypeCode.QuestionString,
          },
          {
            linkId: '1.2',
            text: 'Met?',
            type: QuestionnaireItemTypeCode.QuestionBoolean,
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: null,
      item: [
        {
          linkId: '1.1',
          text: null,
          answer: [
            {
              valueString:
                'Observations: The patient has been weaned off oxygen and saturations are between 90 and 100 on air',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: true,
              valueDateTime: null,
            },
          ],
        },
      ],
    },
    {
      linkId: '1',
      text: null,
      answer: null,
      item: [
        {
          linkId: '1.1',
          text: null,
          answer: [
            {
              valueString: 'Pain Management: Pain under control',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: false,
              valueDateTime: null,
            },
          ],
        },
      ],
    },
    {
      linkId: '1',
      text: null,
      answer: null,
      item: [
        {
          linkId: '1.1',
          text: null,
          answer: [
            {
              valueString: 'Blood Results',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: true,
              valueDateTime: null,
            },
          ],
        },
      ],
    },
  ],
}

export const ComposedExampleData: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  isEnteredInError: false,
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
    isEnteredInError: false,
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
            type: QuestionnaireItemTypeCode.QuestionStringHtml,
          },
          {
            linkId: '3.2',
            text: 'What is your date of birth?',
            type: QuestionnaireItemTypeCode.QuestionDate,
          },
          {
            linkId: '3.3',
            text: 'Investigations',
            type: QuestionnaireItemTypeCode.QuestionStringHtml,
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
              valueString: 'Male <b>Html text</b>',
              valueBoolean: false,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '3.2',
          text: null,
          answer: [],
        },
        {
          linkId: '3.3',
          text: null,
          answer: [
            {
              valueString:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pellentesque mauris ut elementum ultrices. Fusce eu erat est. Etiam pulvinar eget ex id pharetra. Maecenas a neque molestie, rhoncus ex ac, gravida lectus. Ut non magna ornare, vulputate magna a, eleifend ipsum. Cras sit amet massa eu nisl efficitur facilisis fermentum non nunc. Donec iaculis mauris ut metus semper facilisis. Praesent pretium tristique est, tristique tempor mi luctus et.',
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

export const NestedGroupWithDisplayExampleData: QuestionnaireResponse = {
  id: 'f9fb120a-6d65-427c-9c9e-51031e0607b3',
  isEnteredInError: false,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-10-14T12:17:46.683+00:00',
  },
  metadata: mockMetadata,
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: 'ed166c7a-d8cb-450f-aba5-4471f1bbe430',
    },
    display: 'SMITH, Bob (Dr) Doctor - specialtyCodeName',
  },
  questionnaire: {
    id: '4789c2b3-7e37-4dd7-9642-0d456ae2f2bd',
    isEnteredInError: false,
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: null,
    version: '1',
    title: 'Discharge Actions',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'Trust Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '1.1',
            text: 'No actions for the Trust post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '1.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '1.2.1',
                text: 'Trust Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '1.2.2',
                text: 'Action Organised?',
                type: QuestionnaireItemTypeCode.QuestionBoolean,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '2',
        text: 'GP Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '2.1',
            text: 'No actions for the GP post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '2.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '2.2.1',
                text: 'GP Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '2.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '3',
        text: 'Community Pharmacy Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '3.1',
            text: 'No actions for the Community Pharmacy post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '3.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '3.2.1',
                text: 'Community Pharmacy Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '3.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '4',
        text: 'CCG Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '4.1',
            text: 'No actions for the CCG post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '4.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '4.2.1',
                text: 'CCG Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '4.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: 'Trust Actions',
      answer: null,
      item: [
        {
          linkId: '1.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.2.1',
              text: null,
              answer: [
                {
                  valueString:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies diam ornare lorem interdum cursus. Pellentesque vel justo erat. Ut fringilla mauris nec libero facilisis, a interdum ex hendrerit. Maecenas id posuere nulla. Proin a risus hendrerit, eleifend diam vel, pretium orci. Integer nec pharetra diam. Aliquam id blandit metus. Fusce sit amet ex nec mauris sagittis hendrerit. Duis et est faucibus, scelerisque massa venenatis, maximus tortor. Donec et felis ultricies, interdum purus eget, euismod leo. Nulla a aliquam leo. Phasellus dictum arcu eget posuere iaculis. Nullam hendrerit eget metus id mattis.',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2.2',
              text: null,
              answer: [
                {
                  valueString: null,
                  valueBoolean: false,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Trust Action 2',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2.2',
              text: null,
              answer: [
                {
                  valueString: null,
                  valueBoolean: true,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '2',
      text: 'GP Actions',
      answer: null,
      item: [
        {
          linkId: '2.1',
          text: 'No actions for the GP post-discharge',
          answer: null,
          item: [],
        },
      ],
    },
    {
      linkId: '3',
      text: 'Community Pharmacy Actions',
      answer: null,
      item: [
        {
          linkId: '3.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '3.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Community Pharmacy Action 1',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '3.2.2',
              text: null,
              answer: [
                {
                  valueString: 'Phil',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '4',
      text: 'CCG Actions',
      answer: null,
      item: [
        {
          linkId: '4.1',
          text: 'No actions for the CCG post-discharge',
          answer: null,
          item: [],
        },
      ],
    },
  ],
}

export const NestedDischargeExample: QuestionnaireResponse = {
  id: 'e100a254-a590-42bf-8b46-4004c0951d1c',
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2022-01-05T18:14:01.88+00:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: '7a95fbca-1485-4145-8e07-5291e54bf8c2',
    },
    display: 'VARGHESE, Anila (Ms) Test Analyst - Accident and Emergency, The Leeds Teaching Hospitals NHS Trust',
  },
  questionnaire: {
    id: '4789c2b3-7e37-4dd7-9642-0d456ae2f2bd',
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: null,
    version: '1',
    title: 'Discharge Actions',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'Trust Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '1.1',
            text: 'No actions for the Trust post-discharge',
            type: QuestionnaireItemTypeCode.Display,
            item: null,
          },
          {
            linkId: '1.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '1.2.1',
                text: 'Trust Action',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '1.2.2',
                text: 'Action Organised?',
                type: QuestionnaireItemTypeCode.QuestionBoolean,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '2',
        text: 'GP Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '2.1',
            text: 'No actions for the GP post-discharge',
            type: QuestionnaireItemTypeCode.Display,
            item: null,
          },
          {
            linkId: '2.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '2.2.1',
                text: 'GP Action',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '2.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: 'Trust Actions',
      answer: null,
      item: [
        {
          linkId: '1.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Plans for secondary care follow up\n,',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2.2',
              text: null,
              answer: [
                {
                  valueString: null,
                  valueBoolean: true,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '2',
      text: 'GP Actions',
      answer: null,
      item: [
        {
          linkId: '2.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '2.2.1',
              text: null,
              answer: [
                {
                  valueString:
                    'Please indicate What, When, Why, and any actions to be completed based on the result\n,',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '2.2.2',
              text: null,
              answer: [
                {
                  valueString: 'testestsetestsetestest',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
        {
          linkId: '2.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '2.2.1',
              text: null,
              answer: [
                {
                  valueString:
                    'Please indicate What, When, Why, and any actions to be completed based on the result\nPlease indicate What, When, Why, and any actions to be completed based on the result2\n32\n3\n,',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '2.2.2',
              text: null,
              answer: [
                {
                  valueString: 'testsetsetsets',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  metadata: mockMetadata,
}
