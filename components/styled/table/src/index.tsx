import { FC } from 'react'
import MaterialTable, { Column } from '@material-table/core'
import {
  PartialDateTimeKindCode,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnairePublicationStatus,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'

const summaryDefinition: Questionnaire = {
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
  item: [
    {
      text: 'Score',
      type: 'string',
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
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.1',
        },
        {
          text: 'O2 Sat (%)',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.2',
        },
        {
          text: 'Supp O2',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.3',
        },
        {
          text: 'Blood Pressure',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.4',
        },
        {
          text: 'Standing 1 Minute BP',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.5',
        },
        {
          text: 'Standing 3 Minute BP',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.6',
        },
        {
          text: 'HR (BPM)',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.7',
        },
        {
          text: 'Temp (°C)',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.8',
        },
        {
          text: 'Consciousness',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.9',
        },
        {
          text: 'Pain Score',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.10',
        },
        {
          text: 'Blood Glucose (mmol/L)',
          type: QuestionnaireItemTypeCode.QuestionString,
          linkId: '4.11',
        },
      ],
    },
  ],
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

// const summaryRecordTwo = {
//   authored: {
//     value: '2022-02-12T12:33:00+00:00',
//     kind: PartialDateTimeKindCode.DateTime,
//   },
//   metadata: {
//     requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
//     isRedacted: false,
//     dataSources: [],
//   },
//   status: QuestionnaireResponseStatus.Completed,
//   id: '1',
//   item: [
//     {
//       linkId: '1',
//       extension: [
//         {
//           valueCodeableConcept: {
//             coding: [
//               {
//                 code: 'Medium',
//                 system: 'ScoreStatus',
//               },
//             ],
//           },
//           url: 'https://leedsth.nhs.uk/summary-records/score-status',
//         },
//       ],
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '4 NEWS',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '2',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '3',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '4',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: 'CHECKBOX',
//           item: [
//             {
//               linkId: '4.1',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '12',
//                 },
//               ],
//             },
//             {
//               linkId: '4.2',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '94 (Target 94-98 %)',
//                 },
//               ],
//             },
//             {
//               linkId: '4.3',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.4',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '122 / 88',
//                 },
//               ],
//             },
//             {
//               linkId: '4.5',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.6',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.7',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '188',
//                 },
//               ],
//             },
//             {
//               linkId: '4.8',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '37',
//                 },
//               ],
//             },
//             {
//               linkId: '4.9',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: 'Alert',
//                 },
//               ],
//             },
//             {
//               linkId: '4.10',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.11',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

// const summaryRecordThree = {
//   authored: {
//     value: '2022-01-01T16:02:00+00:00',
//     kind: PartialDateTimeKindCode.DateTime,
//   },
//   metadata: {
//     requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
//     isRedacted: false,
//     dataSources: [],
//   },
//   status: QuestionnaireResponseStatus.Completed,
//   id: '1',
//   item: [
//     {
//       linkId: '1',
//       extension: [
//         {
//           valueCodeableConcept: {
//             coding: [
//               {
//                 code: 'Medium',
//                 system: 'ScoreStatus',
//               },
//             ],
//           },
//           url: 'https://leedsth.nhs.uk/summary-records/score-status',
//         },
//       ],
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '15 NEWS',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '2',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '3',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: '',
//           item: null,
//         },
//       ],
//     },
//     {
//       linkId: '4',
//       extension: null,
//       answer: [
//         {
//           valueDateTime: null,
//           valueBoolean: null,
//           valueString: 'CHECKBOX',
//           item: [
//             {
//               linkId: '4.1',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '65',
//                 },
//               ],
//             },
//             {
//               linkId: '4.2',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '65 (Target 94-98 %)',
//                 },
//               ],
//             },
//             {
//               linkId: '4.3',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.4',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '65 / 6',
//                 },
//               ],
//             },
//             {
//               linkId: '4.5',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.6',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//             {
//               linkId: '4.7',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '64',
//                 },
//               ],
//             },
//             {
//               linkId: '4.8',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '35',
//                 },
//               ],
//             },
//             {
//               linkId: '4.9',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: 'New Confusion',
//                 },
//               ],
//             },
//             {
//               linkId: '4.10',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '1 - Mild Pain',
//                 },
//               ],
//             },
//             {
//               linkId: '4.11',
//               answer: [
//                 {
//                   valueDateTime: null,
//                   valueBoolean: null,
//                   valueString: '',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

//this should be the actual data we pass in, but I've commented it out for simplicity
// const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]

// const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne]

const testColumns: Array<Column<QuestionnaireItem>> = (summaryDefinition.item as unknown) as Array<
  Column<QuestionnaireItem> // this is an array of QuestionnaireItem
>

const testData: Array<QuestionnaireResponseItem> = summaryRecordOne.item as Array<QuestionnaireResponseItem>

// the above are cast to their correct type

//This was a rough idea at how to modify the data so it would have the linkIds in the correct places

interface ExtensionType extends Record<string, any> {
  linkIdValue1: string
}

interface IData {
  answer?: string
  linkIdValue1?: string
  extensionType?: ExtensionType
}

const testcolumns: Array<Column<IData>> = [{ title: 'Question/Date', field: 'linkIdValue1' }]

const testdata: Array<IData> = [{ linkIdValue1: 'test' }]

const Table: FC = () => (
  <>
    <MaterialTable columns={testcolumns} data={testdata} />
  </>
)

export default Table
