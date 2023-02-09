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

export const summaryDefinitionItems: QuestionnaireItem[] = [
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

export const summaryDefinition: Questionnaire = {
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
  item: summaryDefinitionItems,
}

const summaryRecordOne: QuestionnaireResponse = {
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

const summaryRecordTwo = {
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

const summaryRecordThree = {
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

export const adminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: '1',
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
    questionnaire: '2',
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
    questionnaire: '3',
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

export const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]
