import { Questionnaire, QuestionnaireItemTypeCode, QuestionnairePublicationStatus } from '@ltht-react/types'

// problems with some properties being required on Questionnaire, but this endpoint does not return them
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

export default summaryDefinition
