import { ICellProps, TableData } from '@ltht-react/table/src/atoms/table'
import {
  mapQuestionnaireObjectsToHorizontalTableData,
  mapQuestionnaireObjectsToVerticalTableData,
} from '@ltht-react/table/src/molecules/questionnaire-table'
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
import { FC } from 'react'

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

const customCellWithColorBox = ({ value }: ICellProps) => (
  <>
    <span
      data-testid={`color-box-${value.toLowerCase()}`}
      style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: value }}
    />{' '}
    {value}
  </>
)

export const mockMappingMethodHorizontalWithCellCustomisation = (
  definitionItems: QuestionnaireItem[],
  records: QuestionnaireResponse[]
): TableData => {
  const tableData = mapQuestionnaireObjectsToHorizontalTableData(definitionItems, records)

  const columnToCustomiseIndex = tableData.headers.findIndex((x) => x.accessor === 'questionId3')
  if (columnToCustomiseIndex > -1) {
    tableData.headers[columnToCustomiseIndex].cell = customCellWithColorBox
  }

  return tableData
}

export const mockMappingMethodVerticalWithCellCustomisation = (
  definitionItems: Array<QuestionnaireItem>,
  records: QuestionnaireResponse[]
): TableData => {
  const tableData = mapQuestionnaireObjectsToVerticalTableData(definitionItems, records)

  const columnToCustomiseIndex = tableData.rows.findIndex((x) => x.id === 'questionId3')
  if (columnToCustomiseIndex > -1) {
    tableData.rows[columnToCustomiseIndex].render = customCellWithColorBox
  }

  tableData.headers = tableData.headers.map((header) => ({
    ...header,
    cell: (props) => (props.row.render as FC<ICellProps>)(props),
  }))

  return tableData
}
