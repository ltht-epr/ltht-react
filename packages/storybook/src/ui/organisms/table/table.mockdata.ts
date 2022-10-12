import { Questionnaire, QuestionnaireResponse } from '@ltht-react/types'
import { QuestionnairePublicationStatus } from '@ltht-react/types/src'

export const mockSummaryDefinition: Questionnaire = {
  identifier: [],
  status: QuestionnairePublicationStatus.Draft,
  id: '',
  metadata: {
    requestedWhen: '2021-07-01T13:15:15+01:00',
    isRedacted: false,
    dataSources: [],
  },
  item: [],
}

export const mockSummaryRecordsList: QuestionnaireResponse[] = []
