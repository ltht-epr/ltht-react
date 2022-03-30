import {
  Metadata,
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
  PartialDateTimeKindCode,
  QuestionnaireResponse,
  QuestionnaireResponseStatus,
  QuestionnaireItemTypeCode,
  QuestionnairePublicationStatus,
} from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const redactedMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock Source A',
    },
    {
      display: 'Mock Source B',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

export const QuestionnaireResponse1: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: 'http://ehr.leedsth.nhs.uk/questionnaire/Right-To-Reside',
    version: '1',
    title: 'Diagnosis Morphology',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: 'MorphologicalAbnormality',
        text: 'Morphological Abnormality',
        type: QuestionnaireItemTypeCode.QuestionCoding,
        item: null,
      },
    ],
  },
  item: [
    {
      linkId: 'MorphologicalAbnormality',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Adenocarcinoma, no subtype' },
        },
      ],
      item: null,
    },
  ],
}

export const QuestionnaireResponse2: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: 'http://ehr.leedsth.nhs.uk/questionnaire/Right-To-Reside',
    version: '1',
    title: 'Diagnosis Body Site',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: 'BodyStructure',
        text: 'Body Structure',
        type: QuestionnaireItemTypeCode.QuestionCoding,
      },
      {
        linkId: 'Laterality',
        text: 'Laterality',
        type: QuestionnaireItemTypeCode.QuestionCoding,
      },
    ],
  },
  item: [
    {
      linkId: 'BodyStructure',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Breast structure' },
        },
      ],
      item: null,
    },
    {
      linkId: 'Laterality',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Right' },
        },
      ],
      item: null,
    },
  ],
}

const ConditionOne: Condition = {
  id: '017ca927-67e0-e581-a2c7-115087226fg2|condition',
  metadata: redactedMetadata,
  asserter: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
  },
  extensionData: [QuestionnaireResponse1, QuestionnaireResponse2],
  bodySite: [
    {
      coding: [
        {
          code: '1234',
          display: 'Base of phalanx of foot',
        },
      ],
      text: 'Base of phalanx of foot',
    },
    {
      coding: [
        {
          code: '5678',
          display: 'Subcutaneous tissue of lateral border of sole of foot',
        },
      ],
      text: 'Subcutaneous tissue of lateral border of sole of foot',
    },
  ],
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Category A',
        },
      ],
      text: 'Category A',
    },
    {
      coding: [
        {
          code: '55607006',
          display: 'Category B',
        },
      ],
      text: 'Category B',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '60123008',
        display: 'Heel Pain',
      },
    ],
    text: 'Heel Pain',
  },
  note: [{ text: 'Blister of foot without infection' }, { text: 'Nonvenomous insect bite of foot with indection' }],
  clinicalStatus: ConditionClinicalStatus.Active,
  verificationStatus: ConditionVerificationStatus.Confirmed,
  assertedDate: {
    value: '2018-08-07T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  onset: {
    dateTime: {
      value: '2016-09-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.YearMonth,
    },
  },
  stage: {
    summary: {
      coding: [
        {
          code: '786005',
          display: 'Clinical stage I B',
        },
      ],
      text: 'Clinical stage I B',
    },
  },
  severity: {
    coding: [{ code: '2448400', display: 'Moderate' }],
    text: 'Moderate',
  },
}

const ConditionTwo: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  metadata: mockMetadata,
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Problem',
        },
      ],
      text: 'Problem',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '44054006',
        display: 'Diabetes mellitus type 2',
      },
    ],
    text: 'Diabetes mellitus type 2',
  },
  clinicalStatus: ConditionClinicalStatus.Remission,
  assertedDate: {
    value: '2020-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.Refuted,
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
}

const ConditionThree: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  metadata: mockMetadata,
  category: [
    {
      coding: [
        {
          code: '55607006',
          display: 'Problem',
        },
      ],
      text: 'Problem',
    },
  ],
  code: {
    coding: [
      {
        system: 'HEALTHPLUG',
        code: '44054006',
        display: 'Diabetes mellitus type 2',
      },
    ],
    text: 'Entered in Error example',
  },
  clinicalStatus: ConditionClinicalStatus.Remission,
  assertedDate: {
    value: '2020-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.EnteredinError,
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
}

const conditions: Condition[] = [ConditionOne, ConditionTwo, ConditionThree]

export default conditions
