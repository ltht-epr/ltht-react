import { TableData } from '@ltht-react/table/src/atoms/table'
import {
  PartialDateTime,
  PartialDateTimeKindCode,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'
import { QuestionnairePublicationStatus } from '@ltht-react/types/src'
import { Checkbox } from '@material-ui/core'

export const summaryDefinitionOneVerticalTableData: TableData = {
  headers: [
    {
      accessor: 'property',
      header: '',
    },
    {
      accessor: '1',
      header: '17-Feb-2022 17:23',
    },
    {
      accessor: '2',
      header: '12-Feb-2022 12:33',
    },
    {
      accessor: '3',
      header: '01-Jan-2022 16:02',
    },
  ],
  rows: [
    {
      id: '1',
      cells: [
        {
          key: 'property',
          value: 'Score',
        },
        {
          key: '1',
          value: '5 NEWS',
        },
        {
          key: '2',
          value: '4 NEWS',
        },
        {
          key: '3',
          value: '15 NEWS',
        },
      ],
      subRows: [],
    },
    {
      id: '2',
      cells: [
        {
          key: 'property',
          value: 'Intervention',
        },
        {
          key: '1',
          value: 'ICON',
        },
        {
          key: '2',
          value: '',
        },
        {
          key: '3',
          value: '',
        },
      ],
      subRows: [],
    },
    {
      id: '3',
      cells: [
        {
          key: 'property',
          value: 'Partial Indication',
        },
        {
          key: '1',
          value: '',
        },
        {
          key: '2',
          value: '',
        },
        {
          key: '3',
          value: '',
        },
      ],
      subRows: [],
    },
    {
      id: '4',
      cells: [
        {
          key: 'property',
          value: 'Standard Observations',
        },
        {
          key: '1',
          value: <Checkbox size="small" color="primary" checked style={{ padding: 0 }} />,
        },
        {
          key: '2',
          value: <Checkbox size="small" color="primary" checked style={{ padding: 0 }} />,
        },
        {
          key: '3',
          value: <Checkbox size="small" color="primary" checked style={{ padding: 0 }} />,
        },
      ],
      subRows: [
        {
          id: '4a',
          cells: [
            { key: 'property', value: 'RR (breaths/min)' },
            { key: '1', value: <Checkbox size="small" color="primary" checked style={{ padding: 0 }} /> },
            { key: '2', value: <Checkbox size="small" color="primary" checked={false} style={{ padding: 0 }} /> },
            { key: '3', value: <Checkbox size="small" color="primary" checked={false} style={{ padding: 0 }} /> },
          ],
          subRows: [
            {
              id: '4aa',
              cells: [
                { key: 'property', value: 'RR Part 1 (breaths/min)' },
                { key: '1', value: '25(1)' },
                { key: '2', value: '' },
                { key: '3', value: '' },
              ],
              subRows: [],
            },
            {
              id: '4ab',
              cells: [
                { key: 'property', value: 'RR Part 2 (breaths/min)' },
                { key: '1', value: '25(2)' },
                { key: '2', value: '' },
                { key: '3', value: '' },
              ],
              subRows: [],
            },
          ],
        },
        {
          id: '4b',
          cells: [
            { key: 'property', value: 'O2 Sat (%)' },
            { key: '1', value: '92 (Target 94-98 %)' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4c',
          cells: [
            { key: 'property', value: 'Supp O2' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4d',
          cells: [
            { key: 'property', value: 'Blood Pressure' },
            { key: '1', value: '144 / 122' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4e',
          cells: [
            { key: 'property', value: 'Standing 1 Minute BP' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4f',
          cells: [
            { key: 'property', value: 'Standing 3 Minute BP' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4g',
          cells: [
            { key: 'property', value: 'HR (BPM)' },
            { key: '1', value: '88' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4h',
          cells: [
            { key: 'property', value: 'Temp (°C)' },
            { key: '1', value: '37' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4i',
          cells: [
            { key: 'property', value: 'Consciousness' },
            { key: '1', value: 'Alert' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4j',
          cells: [
            { key: 'property', value: 'Pain Score' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4k',
          cells: [
            { key: 'property', value: 'Blood Glucose (mmol/L)' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
      ],
    },
  ],
}

export const summaryDefinitionOneHorizontalTableData: TableData = {
  headers: [
    {
      accessor: 'date',
      header: 'Record Date',
    },
    {
      accessor: '1',
      header: 'Score',
      subheaders: undefined,
    },
    {
      accessor: '2',
      header: 'Intervention',
      subheaders: undefined,
    },
    {
      accessor: '3',
      header: 'Partial Indication',
      subheaders: undefined,
    },
    {
      accessor: '',
      header: 'Standard Observations',
      subheaders: [
        {
          accessor: '',
          header: 'RR (breaths/min)',
          subheaders: [
            {
              accessor: '4aa',
              header: 'RR Part 1 (breaths/min)',
              subheaders: undefined,
            },
            {
              accessor: '4ab',
              header: 'RR Part 2 (breaths/min)',
              subheaders: undefined,
            },
          ],
        },
        {
          accessor: '4b',
          header: 'O2 Sat (%)',
          subheaders: undefined,
        },
        {
          accessor: '4c',
          header: 'Supp O2',
          subheaders: undefined,
        },
        {
          accessor: '4d',
          header: 'Blood Pressure',
          subheaders: undefined,
        },
        {
          accessor: '4e',
          header: 'Standing 1 Minute BP',
          subheaders: undefined,
        },
        {
          accessor: '4f',
          header: 'Standing 3 Minute BP',
          subheaders: undefined,
        },
        {
          accessor: '4g',
          header: 'HR (BPM)',
          subheaders: undefined,
        },
        {
          accessor: '4h',
          header: 'Temp (°C)',
          subheaders: undefined,
        },
        {
          accessor: '4i',
          header: 'Consciousness',
          subheaders: undefined,
        },
        {
          accessor: '4j',
          header: 'Pain Score',
          subheaders: undefined,
        },
        {
          accessor: '4k',
          header: 'Blood Glucose (mmol/L)',
          subheaders: undefined,
        },
      ],
    },
  ],
  rows: [
    {
      cells: [
        { key: 'date', value: '17-Feb-2022 17:23' },
        { key: '1', value: '5 NEWS' },
        { key: '2', value: 'ICON' },
        { key: '3', value: '' },
        { key: '4a', value: '25' },
        { key: '4aa', value: '25(1)' },
        { key: '4ab', value: '25(2)' },
        { key: '4b', value: '92 (Target 94-98 %)' },
        { key: '4c', value: '' },
        { key: '4d', value: '144 / 122' },
        { key: '4e', value: '' },
        { key: '4f', value: '' },
        { key: '4g', value: '88' },
        { key: '4h', value: '37' },
        { key: '4i', value: 'Alert' },
        { key: '4j', value: '' },
        { key: '4k', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
    {
      cells: [
        { key: 'date', value: '12-Feb-2022 12:33' },
        { key: '1', value: '4 NEWS' },
        { key: '2', value: '' },
        { key: '3', value: '' },
        { key: '4.1', value: '12' },
        { key: '4.2', value: '94 (Target 94-98 %)' },
        { key: '4.3', value: '' },
        { key: '4.4', value: '122 / 88' },
        { key: '4.5', value: '' },
        { key: '4.6', value: '' },
        { key: '4.7', value: '188' },
        { key: '4.8', value: '37' },
        { key: '4.9', value: 'Alert' },
        { key: '4.10', value: '' },
        { key: '4.11', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
    {
      cells: [
        { key: 'date', value: '01-Jan-2022 16:02' },
        { key: '1', value: '15 NEWS' },
        { key: '2', value: '' },
        { key: '3', value: '' },
        { key: '4.1', value: '65' },
        { key: '4.2', value: '65 (Target 94-98 %)' },
        { key: '4.3', value: '' },
        { key: '4.4', value: '65 / 6' },
        { key: '4.5', value: '' },
        { key: '4.6', value: '' },
        { key: '4.7', value: '64' },
        { key: '4.8', value: '35' },
        { key: '4.9', value: 'New Confusion' },
        { key: '4.10', value: '1 - Mild Pain' },
        { key: '4.11', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
  ],
}

export const mockSummaryDefinition: Questionnaire = {
  identifier: [],
  status: QuestionnairePublicationStatus.Draft,
  id: '1234abcd',
  metadata: {
    requestedWhen: '2021-07-01T13:15:15+01:00',
    isRedacted: false,
    dataSources: [],
  },
  item: [
    {
      type: QuestionnaireItemTypeCode.QuestionString,
      text: `What is your name?`,
      linkId: 'questionId1',
    },
    {
      type: QuestionnaireItemTypeCode.QuestionString,
      text: `What is your quest?`,
      linkId: 'questionId2',
    },
    {
      type: QuestionnaireItemTypeCode.QuestionString,
      text: `What is your favourite colour?`,
      linkId: 'questionId3',
    },
    {
      type: QuestionnaireItemTypeCode.QuestionString,
      text: `What is the capital of Assyria?`,
      linkId: 'questionId4',
    },
    {
      type: QuestionnaireItemTypeCode.Group,
      text: `What is the air speed velocity of an unladen swallow?`,
      linkId: 'questionId5',
      item: [
        {
          text: 'African',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: 'questionId5-SubSection1',
        },
        {
          text: 'European',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: 'questionId5-SubSection2',
        },
      ],
    },
  ],
}

export const mockSummaryRecordsList: QuestionnaireResponse[] = [
  {
    authored: {
      value: '1975-05-25T17:27:23+00:00',
      kind: PartialDateTimeKindCode.Date,
    } as PartialDateTime,
    item: [
      {
        linkId: 'questionId1',
        answer: [{ valueString: 'Sir Lancelot of Camelot' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId2',
        answer: [{ valueString: 'To seek the Holy Grail' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId3',
        answer: [{ valueString: 'Blue' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId4',
        answer: [{ valueString: 'Assur' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId5',
        answer: [
          {
            valueString: 'What do you mean, African or European?',
            item: [
              {
                linkId: 'questionId5-SubSection1',
                answer: [
                  {
                    valueString: '~20.1 miles per hour',
                  },
                ],
              },
              {
                linkId: 'questionId5-SubSection2',
                answer: [
                  {
                    valueString: '~24.9 miles per hour',
                  },
                ],
              },
            ],
          } as QuestionnaireResponseItemAnswer,
        ],
      } as QuestionnaireResponseItem,
    ],
    status: QuestionnaireResponseStatus.Completed,
    id: 'S1rL4nc5l0t',
    metadata: {
      requestedWhen: '2021-07-01T13:15:15+01:00',
      isRedacted: false,
      dataSources: [],
    },
  } as QuestionnaireResponse,
  {
    authored: {
      value: '1975-05-25T17:32:43+00:00',
      kind: PartialDateTimeKindCode.Date,
    } as PartialDateTime,
    item: [
      {
        linkId: 'questionId1',
        answer: [{ valueString: 'Sir Robin of Camelot' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId2',
        answer: [{ valueString: 'To seek the Holy Grail' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId3',
        answer: [{ valueString: 'Green' } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId4',
        answer: [{ valueString: `What? I don't know tha--WAAARGH` } as QuestionnaireResponseItemAnswer],
      } as QuestionnaireResponseItem,
      {
        linkId: 'questionId5',
        answer: [
          {
            valueString: `I don't know that`,
            item: [
              {
                linkId: 'questionId5-SubSection1',
                answer: [
                  {
                    valueString: 'Faster than the Vicious Chicken of Bristol?',
                  },
                ],
              },
              {
                linkId: 'questionId5-SubSection2',
                answer: [
                  {
                    valueString: `I've soiled my armour`,
                  },
                ],
              },
            ],
          } as QuestionnaireResponseItemAnswer,
        ],
      } as QuestionnaireResponseItem,
    ],
    status: QuestionnaireResponseStatus.Completed,
    id: 'S1rR0b1n',
    metadata: {
      requestedWhen: '2021-07-01T13:17:54+01:00',
      isRedacted: false,
      dataSources: [],
    },
  } as QuestionnaireResponse,
]

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
          valueString: '',
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
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '25',
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '25(1)',
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
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
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
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
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
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
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
          valueString: '4 NEWS',
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
          valueString: '',
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
          valueString: '',
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
          item: [
            {
              linkId: '4.1',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '12',
                },
              ],
            },
            {
              linkId: '4.2',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '94 (Target 94-98 %)',
                },
              ],
            },
            {
              linkId: '4.3',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.4',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '122 / 88',
                },
              ],
            },
            {
              linkId: '4.5',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.6',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.7',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '188',
                },
              ],
            },
            {
              linkId: '4.8',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '37',
                },
              ],
            },
            {
              linkId: '4.9',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Alert',
                },
              ],
            },
            {
              linkId: '4.10',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.11',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
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
          valueString: '15 NEWS',
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
          valueString: '',
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
          valueString: '',
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
          item: [
            {
              linkId: '4.1',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '65',
                },
              ],
            },
            {
              linkId: '4.2',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '65 (Target 94-98 %)',
                },
              ],
            },
            {
              linkId: '4.3',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.4',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '65 / 6',
                },
              ],
            },
            {
              linkId: '4.5',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.6',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
            {
              linkId: '4.7',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '64',
                },
              ],
            },
            {
              linkId: '4.8',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '35',
                },
              ],
            },
            {
              linkId: '4.9',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'New Confusion',
                },
              ],
            },
            {
              linkId: '4.10',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '1 - Mild Pain',
                },
              ],
            },
            {
              linkId: '4.11',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// this should be the actual data we pass in, but I've commented it out for simplicity
export const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]
