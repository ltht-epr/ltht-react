import {
  PartialDateTimeKindCode,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'

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
              linkId: '4.1',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '25',
                },
              ],
            },
            {
              linkId: '4.2',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '92 (Target 94-98 %)',
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
                  valueString: '144 / 122',
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
                  valueString: '88',
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
  id: '1',
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
  id: '1',
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

const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]

export default summaryRecordsList
