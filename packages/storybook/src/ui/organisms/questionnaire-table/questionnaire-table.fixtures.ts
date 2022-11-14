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
          valueString: 'No',
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
                  valueString: '93',
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
                  valueString: '120',
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
                  valueString: '8',
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
          valueString: 'Yes',
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
                  valueString: '31',
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '31(1)',
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
                  valueString: '3',
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
          valueString: 'No',
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
                  valueString: '17',
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(1)',
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
