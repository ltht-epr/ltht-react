/* eslint no-console: 0 */
import { AdminActionsForQuestionnaire } from '@ltht-react/table/src/organisms/questionnaire-table-methods'
import {
  PartialDateTimeKindCode,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnairePublicationStatus,
  QuestionnaireResponse,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'

export const obsDefinitionItems: QuestionnaireItem[] = [
  {
    text: 'Score',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '1',
    item: null,
  },
  {
    text: 'Intervention',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '2',
    item: null,
  },
  {
    text: 'Partial Indication',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '3',
    item: null,
  },
  {
    text: 'Standard Observations',
    type: QuestionnaireItemTypeCode.Group,
    linkId: '4',
    item: [
      {
        text: 'RR (breaths/min)',
        type: QuestionnaireItemTypeCode.Group,
        linkId: '4a',
        item: [
          {
            text: 'RR Part 1 (breaths/min)',
            type: QuestionnaireItemTypeCode.QuestionString,
            linkId: '4aa',
          },
          {
            text: 'RR Part 2 (breaths/min)',
            type: QuestionnaireItemTypeCode.QuestionString,
            linkId: '4ab',
          },
        ],
      },
      {
        text: 'O2 Sat (%)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4b',
      },
      {
        text: 'Supp O2',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4c',
      },
      {
        text: 'Blood Pressure',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4d',
      },
      {
        text: 'Standing 1 Minute BP',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4e',
      },
      {
        text: 'Standing 3 Minute BP',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4f',
      },
      {
        text: 'HR (BPM)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4g',
      },
      {
        text: 'Temp (°C)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4h',
      },
      {
        text: 'Consciousness',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4i',
      },
      {
        text: 'Pain Score',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4j',
      },
      {
        text: 'Blood Glucose (mmol/L)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4k',
      },
    ],
  },
]

export const obsDefinition: Questionnaire = {
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/template',
    },
  ],
  useContext: [
    {
      valueCodeableConcept: {
        coding: [
          {
            code: 'Daily',
            system: 'https://leedsth.nhs.uk/summary-definition/date-grouping-strategy',
          },
        ],
      },
    },
  ],
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5561803+01:00',
    isRedacted: false,
    dataSources: [],
  },
  identifier: [
    {
      system: 'TestSystem',
      value: 'TestValue',
    },
  ],
  status: QuestionnairePublicationStatus.Active,
  id: '1',
  title: 'Observations',
  item: obsDefinitionItems,
}

export const axialDefinition: Questionnaire = {
  identifier: [],
  metadata: {
    requestedWhen: '',
    dataSources: [],
    isRedacted: false,
  },
  id: 'spa-axial-proms',
  url: null,
  version: null,
  title: 'Axial Questionnaire',
  status: QuestionnairePublicationStatus.Active,
  item: [
    {
      linkId: 'spine-pain-vas',
      text: 'Spine Pain (VAS)',
      type: QuestionnaireItemTypeCode.QuestionInteger,
      repeats: null,
      item: [],
    },
    {
      linkId: 'global-spondylitis-gvas',
      text: 'Global Spondylitis (GVAS)',
      type: QuestionnaireItemTypeCode.QuestionInteger,
      repeats: null,
      item: [],
    },
    {
      linkId: 'basdai-total',
      text: 'BASDAI Total',
      type: QuestionnaireItemTypeCode.QuestionDecimal,
      repeats: null,
      item: [],
    },
    {
      linkId: 'average-basfi-score',
      text: 'Average BASFI Score',
      type: QuestionnaireItemTypeCode.QuestionDecimal,
      repeats: null,
      item: [],
    },
    {
      linkId: 'created-by',
      text: 'Created By',
      type: QuestionnaireItemTypeCode.QuestionString,
      repeats: null,
      item: [],
    },
  ],
}

const obsRecordOne: QuestionnaireResponse = {
  authored: {
    value: '2022-02-17T17:23:56+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '1',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '5 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'No',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '25',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '25(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '25(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '92 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '93',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '144 / 122',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '120',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '143',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '88',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '37',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Alert',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '8',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '75',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const obsRecordTwo = {
  authored: {
    value: '2022-02-12T12:33:00+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '2',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '40 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'Yes',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '31',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '31(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '31(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '81 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '95',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '160 / 140',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '140',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '132',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '74',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '64',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Alert',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '3',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '65',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const obsRecordThree = {
  authored: {
    value: '2022-01-01T16:02:00+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '3',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '17 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'No',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '17',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '95 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '103',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '125 / 115',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '129',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '123',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '120',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '23',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Confusion',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '5',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '102',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const axialRecordOne: QuestionnaireResponse = {
  id: '75f131eb-5cb8-47b7-a12c-2fa71bf4bbc7',
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2023-06-23T14:14:02.043\u002B00:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: '2a6bd0df-1d86-4cf5-af55-7c3987e3f5bf',
    },
    display: 'TODO: populate this value',
  },
  item: [
    {
      linkId: 'spine-pain-vas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 4,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'global-spondylitis-gvas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 7,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'basdai-total',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5,
          item: null,
        },
      ],
    },
    {
      linkId: 'average-basfi-score',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 4.4,
          item: null,
        },
      ],
    },
    {
      linkId: 'created-by',
      text: null,
      answer: [
        {
          valueString: 'WELSH, Thomas (Brigadier) Developer - Drama Therapy',
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
  ],
  metadata: {
    isRedacted: false,
    dataSources: [],
    requestedWhen: '',
  },
  text: {
    text: 'Axial Questionnaire',
    div: '',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/instance-status-code',
      valueCoding: {
        code: 'Active',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/template-name',
      valueCoding: {
        code: 'spa-axial-proms',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-set-identifier',
      valueCoding: null,
      valueUuid: '555f92dd-9ac1-46d5-9dea-3de040fa6fc2',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-identifier',
      valueCoding: null,
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: {
        value: '75f131eb-5cb8-47b7-a12c-2fa71bf4bbc7',
      },
    },
  ],
}

const axialRecordTwo: QuestionnaireResponse = {
  id: '28e976ca-77b9-47b3-a093-4ccf8bfafac8',
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2023-06-23T13:37:27.82\u002B00:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: '2a6bd0df-1d86-4cf5-af55-7c3987e3f5bf',
    },
    display: 'TODO: populate this value',
  },
  item: [
    {
      linkId: 'spine-pain-vas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 5,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'global-spondylitis-gvas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 5,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'basdai-total',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5,
          item: null,
        },
      ],
    },
    {
      linkId: 'average-basfi-score',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5.2,
          item: null,
        },
      ],
    },
    {
      linkId: 'created-by',
      text: null,
      answer: [
        {
          valueString: 'WELSH, Thomas (Brigadier) Developer - Drama Therapy',
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
  ],
  metadata: {
    isRedacted: false,
    dataSources: [],
    requestedWhen: '',
  },
  text: {
    text: 'Axial Questionnaire',
    div: '',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/instance-status-code',
      valueCoding: {
        code: 'Active',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/template-name',
      valueCoding: {
        code: 'spa-axial-proms',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-set-identifier',
      valueCoding: null,
      valueUuid: '1ef3a0d5-b2cc-41bf-8dcd-59c0448fe865',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-identifier',
      valueCoding: null,
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: {
        value: '28e976ca-77b9-47b3-a093-4ccf8bfafac8',
      },
    },
  ],
}

const axialRecordThree: QuestionnaireResponse = {
  id: '074d7347-964c-43fb-bb1b-08f0da7be3b6',
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2023-06-21T14:50:49.003\u002B00:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: 'f68e4d28-beae-421f-842f-f6b5fe34e15f',
    },
    display: 'TODO: populate this value',
  },
  item: [
    {
      linkId: 'spine-pain-vas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 4,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'global-spondylitis-gvas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 4,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'basdai-total',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5.1,
          item: null,
        },
      ],
    },
    {
      linkId: 'average-basfi-score',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5.2,
          item: null,
        },
      ],
    },
    {
      linkId: 'created-by',
      text: null,
      answer: [
        {
          valueString: 'CATEGORY, Test (Mr) test5 - Accident and Emergency',
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
  ],
  metadata: {
    isRedacted: false,
    dataSources: [],
    requestedWhen: '',
  },
  text: {
    text: 'Axial Questionnaire',
    div: '',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/instance-status-code',
      valueCoding: {
        code: 'Active',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/template-name',
      valueCoding: {
        code: 'spa-axial-proms',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-set-identifier',
      valueCoding: null,
      valueUuid: '0b3dc920-b125-4964-a3e2-ddc52c28774e',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-identifier',
      valueCoding: null,
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: {
        value: '074d7347-964c-43fb-bb1b-08f0da7be3b6',
      },
    },
  ],
}

const axialRecordFour: QuestionnaireResponse = {
  id: '451c890b-38a0-4fa9-ab71-dfba655c5f78',
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2023-06-20T13:24:07.957\u002B00:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: '2e950fd3-e16b-4628-ac6f-a312af55df6c',
    },
    display: 'TODO: populate this value',
  },
  item: [
    {
      linkId: 'spine-pain-vas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 7,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'global-spondylitis-gvas',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 4,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: 'basdai-total',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5.8,
          item: null,
        },
      ],
    },
    {
      linkId: 'average-basfi-score',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: 5.8,
          item: null,
        },
      ],
    },
    {
      linkId: 'created-by',
      text: null,
      answer: [
        {
          valueString: 'ROBERTSON, Christopher (Mr) Senior Project Analyst',
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
  ],
  metadata: {
    isRedacted: false,
    dataSources: [],
    requestedWhen: '',
  },
  text: {
    text: 'Axial Questionnaire',
    div: '',
  },
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/instance-status-code',
      valueCoding: {
        code: 'Active',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/template-name',
      valueCoding: {
        code: 'spa-peripheral-axial-proms',
      },
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-set-identifier',
      valueCoding: null,
      valueUuid: 'b4a2714f-b205-4b1b-9f2f-7bb8333145ea',
      valueIdentifier: null,
    },
    {
      url: 'https://leedsth.nhs.uk/cds/instance-identifier',
      valueCoding: null,
      valueUuid: '00000000-0000-0000-0000-000000000000',
      valueIdentifier: {
        value: '451c890b-38a0-4fa9-ab71-dfba655c5f78',
      },
    },
  ],
}

export const obsAdminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: '1',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium', status: 'green' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'cross', size: 'medium', status: 'red' },
      },
    ],
  },
  {
    questionnaire: '2',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium', status: 'green' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'cross', size: 'medium', status: 'red' },
      },
    ],
  },
  {
    questionnaire: '3',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium', status: 'green' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'cross', size: 'medium', status: 'red' },
      },
    ],
  },
]

export const obsRecordsList: QuestionnaireResponse[] = [obsRecordOne, obsRecordTwo, obsRecordThree]

export const axialRecordsList: QuestionnaireResponse[] = [
  axialRecordOne,
  axialRecordTwo,
  axialRecordThree,
  axialRecordFour,
]

export const axialAdminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: '75f131eb-5cb8-47b7-a12c-2fa71bf4bbc7',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 1')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 1')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 1')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '28e976ca-77b9-47b3-a093-4ccf8bfafac8',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 2')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 2')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 2')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '074d7347-964c-43fb-bb1b-08f0da7be3b6',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '451c890b-38a0-4fa9-ab71-dfba655c5f78',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
]
