import { FC } from 'react'
import MaterialTable, { Column } from '@material-table/core'
import {
  CodeableConcept,
  Coding,
  ContactDetail,
  Extension,
  Identifier,
  Maybe,
  Metadata,
  Narrative,
  PartialDateTime,
  PartialDateTimeKindCode,
  Period,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnairePublicationStatus,
  QuestionnaireResponse,
  QuestionnaireResponseItemAnswer,
  QuestionnaireResponseStatus,
  ResourceReference,
  Scalars,
  UsageContext,
} from '@ltht-react/types'

const summaryDefinition: QuestionnaireLocal = {
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

// const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]

// const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne]

// const testColumns: Array<Column<QuestionnaireItemLocal>> = (summaryDefinition.item as unknown) as Array<
//   Column<QuestionnaireItemLocal> // this is an array of QuestionnaireItem
// >

// const testData: Array<QuestionnaireResponseItemLocal> = summaryRecordOne.item as Array<QuestionnaireResponseItemLocal>

// the above are cast to their correc type

const testColumns: Array<
  Column<QuestionnaireResponseItemAndQuestionnaireItemBaseClass>
> = (summaryDefinition.item as unknown) as Array<Column<QuestionnaireResponseItemAndQuestionnaireItemBaseClass>>

const testData: Array<QuestionnaireResponseItemAndQuestionnaireItemBaseClass> = summaryRecordOne.item as Array<QuestionnaireResponseItemAndQuestionnaireItemBaseClass>

//the above are cast to their base class

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

export declare type QuestionnaireItemBaseTest = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** E.g. '1(a)', '2.5.3'. */
  prefix?: Maybe<Scalars['String']>
  /** Whether the item may repeat. */
  repeats?: Maybe<Scalars['Boolean']>
  /** Whether the item must be included in data results. */
  required?: Maybe<Scalars['Boolean']>
  /** Primary text for the item. */
  text?: Maybe<Scalars['String']>
  /** Data type. */
  //type: QuestionnaireItemTypeCode

  type: Maybe<Scalars['String']>
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>
  /** The response(s) to the question. */
  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>
}

///

export type QuestionnaireLocal = {
  /** Concept that represents the overall questionnaire. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** Contact details for the publisher. */
  contact?: Maybe<Array<Maybe<ContactDetail>>>
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>
  /** Date last changed. */
  date?: Maybe<PartialDateTime>
  /** Natural language description of the questionnaire. */
  description?: Maybe<Scalars['String']>
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>
  /** Additional identifier for the questionnaire. */
  identifier: Array<Maybe<Identifier>>
  /** Questions and sections within the Questionnaire. */
  item?: Maybe<Array<Maybe<QuestionnaireItemLocal>>>
  /** Intended jurisdiction for questionnaire (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Name for this questionnaire (computer friendly). */
  name?: Maybe<Scalars['String']>
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  purpose?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  status: QuestionnairePublicationStatus
  /** Name for this questionnaire (human friendly). */
  title?: Maybe<Scalars['String']>
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique). */
  url?: Maybe<Scalars['String']>
  /** The context that the content is intended to support. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>
  /** Business version of the questionnaire. */
  version?: Maybe<Scalars['String']>
  /** When the questionnaire was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>
  /** Instantiates protocol or definition. */
  derivedFrom?: Maybe<Array<Maybe<ResourceReference>>>
  /** When the questionnaire is expected to be used. */
  effectivePeriod?: Maybe<Period>
  /** Resource that can be subject of QuestionnaireResponse. */
  subjectType?: Maybe<Array<Maybe<Scalars['String']>>>
  /** When the questionnaire was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export type QuestionnaireResponseLocal = {
  /** Person who received and recorded the answers. */
  author?: Maybe<ResourceReference>
  /** Date the answers were gathered. */
  authored?: Maybe<PartialDateTime>
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>
  /** Unique id for this set of answers. */
  identifier?: Maybe<Identifier>
  /** Groups and questions. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItemLocal>>>
  /** Form being answered. */
  questionnaire?: Maybe<Questionnaire>
  /** The person who answered the questions. */
  source?: Maybe<ResourceReference>
  /** Why this questionnaire is defined. */
  status: QuestionnaireResponseStatus
  /** Request fulfilled by this QuestionnaireResponse. */
  basedOn?: Maybe<ResourceReference>
  /** Part of this action. */
  partOf?: Maybe<ResourceReference>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
}

export type QuestionnaireAndQuestionnaireResponseBaseClass = {
  /** Concept that represents the overall questionnaire. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** Contact details for the publisher. */
  contact?: Maybe<Array<Maybe<ContactDetail>>>
  /** Use and/or publishing restrictions. */
  copyright?: Maybe<Scalars['String']>
  /** Date last changed. */
  date?: Maybe<PartialDateTime>
  /** Natural language description of the questionnaire. */
  description?: Maybe<Scalars['String']>
  /** For testing purposes, not real usage. */
  experimental?: Maybe<Scalars['Boolean']>
  /** Additional identifier for the questionnaire. */
  identifierArray?: Array<Maybe<Identifier>>

  identifier?: Maybe<Identifier>
  /** Intended jurisdiction for questionnaire (if applicable). */
  jurisdiction?: Maybe<Array<Maybe<CodeableConcept>>>
  /** Name for this questionnaire (computer friendly). */
  name?: Maybe<Scalars['String']>
  /** Name of the publisher (organization or individual). */
  publisher?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  purpose?: Maybe<Scalars['String']>
  /** Why this questionnaire is defined. */
  questionnairePublicationStatus: QuestionnairePublicationStatus
  /** Why this questionnaire is defined. */
  questionnaireResponseStatus: QuestionnaireResponseStatus
  /** Name for this questionnaire (human friendly). */
  title?: Maybe<Scalars['String']>
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique). */
  url?: Maybe<Scalars['String']>
  /** The context that the content is intended to support. */
  useContext?: Maybe<Array<Maybe<UsageContext>>>
  /** Business version of the questionnaire. */
  version?: Maybe<Scalars['String']>
  /** When the questionnaire was approved by publisher. */
  approvalDate?: Maybe<PartialDateTime>
  /** Instantiates protocol or definition. */
  derivedFrom?: Maybe<Array<Maybe<ResourceReference>>>
  /** When the questionnaire is expected to be used. */
  effectivePeriod?: Maybe<Period>
  /** Resource that can be subject of QuestionnaireResponse. */
  subjectType?: Maybe<Array<Maybe<Scalars['String']>>>
  /** When the questionnaire was last reviewed. */
  lastReviewDate?: Maybe<PartialDateTime>
  /** Logical Id of the resource. */
  id: Scalars['ID']
  /** Metadata about the resource. */
  metadata: Metadata
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Text summary of the resource, for human interpretation. */
  text?: Maybe<Narrative>
  /** Person who received and recorded the answers. */
  author?: Maybe<ResourceReference>
  /** Date the answers were gathered. */
  authored?: Maybe<PartialDateTime>
  /** Encounter created as part of. */
  encounter?: Maybe<ResourceReference>
  /** Unique id for this set of answers. */
  questionnaireResponseItem?: Maybe<Array<Maybe<QuestionnaireResponseItemLocal>>>
  /** Questions and sections within the Questionnaire. */
  questionnaireItem?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** Form being answered. */
  questionnaire?: Maybe<Questionnaire>
  /** The person who answered the questions. */
  source?: Maybe<ResourceReference>
  /** Request fulfilled by this QuestionnaireResponse. */
  basedOn?: Maybe<ResourceReference>
  /** Part of this action. */
  partOf?: Maybe<ResourceReference>
}

///

export type QuestionnaireItemLocal = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** E.g. '1(a)', '2.5.3'. */
  prefix?: Maybe<Scalars['String']>
  /** Whether the item may repeat. */
  repeats?: Maybe<Scalars['Boolean']>
  /** Whether the item must be included in data results. */
  required?: Maybe<Scalars['Boolean']>
  /** Primary text for the item. */
  text?: Maybe<Scalars['String']>
  /** Data type. */
  type: Maybe<Scalars['String']>
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>
}

export type QuestionnaireResponseItemLocal = {
  /** Additional content defined by implementations. */
  extension?: Maybe<Array<Maybe<Extension>>>
  /** The response(s) to the question. */
  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  item?: Maybe<Array<Maybe<QuestionnaireResponseItemLocal>>>
  /** Name for group or question text. */
  text?: Maybe<Scalars['String']>
  /** Pointer to specific item from Questionnaire. */
  linkId?: Maybe<Scalars['String']>
}

export type QuestionnaireResponseItemAndQuestionnaireItemBaseClass = {
  extension?: Maybe<Array<Maybe<Extension>>>
  /** Corresponding concept for this item in a terminology. */
  code?: Maybe<Array<Maybe<Coding>>>
  /** ElementDefinition - details for the item. */
  definition?: Maybe<Scalars['String']>
  /** Nested questionnaire response items. */
  questionnaireItem?: Maybe<Array<Maybe<QuestionnaireItem>>>
  /** E.g. '1(a)', '2.5.3'. */
  prefix?: Maybe<Scalars['String']>
  /** Whether the item may repeat. */
  repeats?: Maybe<Scalars['Boolean']>
  /** Whether the item must be included in data results. */
  required?: Maybe<Scalars['Boolean']>
  /** Primary text for the item. */
  text?: Maybe<Scalars['String']>
  /** Data type. */
  type: QuestionnaireItemTypeCode
  /** Unique id for item in questionnaire. */
  linkId?: Maybe<Scalars['String']>

  answer?: Maybe<Array<Maybe<QuestionnaireResponseItemAnswer>>>
  /** ElementDefinition - details for the item. */

  questionnaireResponseItem?: Maybe<Array<Maybe<QuestionnaireResponseItemLocal>>>
  /** Name for group or question text. */

  // myType?: MyType
}
