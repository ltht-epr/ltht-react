import { AdminActionsForQuestionnaire, TableData } from '@ltht-react/table'
import mapQuestionnaireDefinitionAndResponsesToTableData from '@ltht-react/table/src/organisms/questionnaire-table-methods'
import {
  PartialDateTime,
  PartialDateTimeKindCode,
  Questionnaire,
  QuestionnaireItemTypeCode,
  QuestionnaireResponse,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemAnswer,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'
import { QuestionnairePublicationStatus } from '@ltht-react/types/src'

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

export const mockSummaryAdminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: 'S1rL4nc5l0t',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          // eslint-disable-next-line no-console
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium', color: 'info-blue' },
      },
    ],
  },
  {
    questionnaire: 'S1rR0b1n',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          // eslint-disable-next-line no-console
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium', color: 'info-blue' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          // eslint-disable-next-line no-console
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium', color: 'green' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          // eslint-disable-next-line no-console
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'cross', size: 'medium', color: 'red' },
      },
    ],
  },
]

export const mockMapper = (colData: Questionnaire, rowData: QuestionnaireResponse[]): TableData => {
  const mappedData = mapQuestionnaireDefinitionAndResponsesToTableData(colData, rowData, 'x')
  if (!mappedData) {
    throw Error('Something went wrong')
  }
  return mappedData
}
