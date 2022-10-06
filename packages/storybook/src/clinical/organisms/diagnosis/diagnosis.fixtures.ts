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

export const QuestionnaireResponse1: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  isEnteredInError: false,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
  isEnteredInError: false,
  status: QuestionnaireResponseStatus.Completed,
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710d',
    isEnteredInError: false,
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
      {
        linkId: 'Principal',
        text: 'Principal',
        type: QuestionnaireItemTypeCode.QuestionCoding,
      },
      {
        linkId: 'Status',
        text: 'Status',
        type: QuestionnaireItemTypeCode.QuestionCoding,
      },
      {
        linkId: 'Dexterity',
        text: 'Dexterity',
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
          valueBoolean: null,
          valueDateTime: null,
          valueCoding: null,
        },
      ],
      item: null,
    },
    {
      linkId: 'Principal',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Progress' },
        },
      ],
      item: null,
    },
    {
      linkId: 'Status',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Confirmed' },
        },
      ],
      item: null,
    },
    {
      linkId: 'Dexterity',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Excellent' },
        },
      ],
      item: null,
    },
  ],
}

export const NestedGroupWithDisplayExampleData: QuestionnaireResponse = {
  id: 'f9fb120a-6d65-427c-9c9e-51031e0607b3',
  isEnteredInError: false,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-10-14T12:17:46.683+00:00',
  },
  metadata: mockMetadata,
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: null,
      value: 'ed166c7a-d8cb-450f-aba5-4471f1bbe430',
    },
    display: 'SMITH, Bob (Dr) Doctor - specialtyCodeName',
  },
  questionnaire: {
    id: '4789c2b3-7e37-4dd7-9642-0d456ae2f2bd',
    isEnteredInError: false,
    identifier: [
      {
        system: 'http://leedsth.nhs.uk/user/guid',
        value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
      },
    ],
    metadata: mockMetadata,
    url: null,
    version: '1',
    title: 'Discharge Actions',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'Trust Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '1.1',
            text: 'No actions for the Trust post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '1.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '1.2.1',
                text: 'Trust Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '1.2.2',
                text: 'Action Organised?',
                type: QuestionnaireItemTypeCode.QuestionBoolean,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '2',
        text: 'GP Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '2.1',
            text: 'No actions for the GP post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '2.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '2.2.1',
                text: 'GP Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '2.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '3',
        text: 'Community Pharmacy Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '3.1',
            text: 'No actions for the Community Pharmacy post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '3.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '3.2.1',
                text: 'Community Pharmacy Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '3.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
      {
        linkId: '4',
        text: 'CCG Actions',
        type: QuestionnaireItemTypeCode.Group,
        repeats: false,
        item: [
          {
            linkId: '4.1',
            text: 'No actions for the CCG post-discharge',
            type: QuestionnaireItemTypeCode.Display,
          },
          {
            linkId: '4.2',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            item: [
              {
                linkId: '4.2.1',
                text: 'CCG Actions',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
              {
                linkId: '4.2.2',
                text: 'Requested By?',
                type: QuestionnaireItemTypeCode.QuestionString,
                repeats: false,
              },
            ],
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: 'Trust Actions',
      answer: null,
      item: [
        {
          linkId: '1.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Trust Action 1',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2.2',
              text: null,
              answer: [
                {
                  valueString: null,
                  valueBoolean: false,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Trust Action 2',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2.2',
              text: null,
              answer: [
                {
                  valueString: null,
                  valueBoolean: true,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '2',
      text: 'GP Actions',
      answer: null,
      item: [
        {
          linkId: '2.1',
          text: 'No actions for the GP post-discharge',
          answer: null,
          item: [],
        },
      ],
    },
    {
      linkId: '3',
      text: 'Community Pharmacy Actions',
      answer: null,
      item: [
        {
          linkId: '3.2',
          text: null,
          answer: null,
          item: [
            {
              linkId: '3.2.1',
              text: null,
              answer: [
                {
                  valueString: 'Community Pharmacy Action 1',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '3.2.2',
              text: null,
              answer: [
                {
                  valueString: 'Phil',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '4',
      text: 'CCG Actions',
      answer: null,
      item: [
        {
          linkId: '4.1',
          text: 'No actions for the CCG post-discharge',
          answer: null,
          item: [],
        },
      ],
    },
  ],
}

const ConditionOne: Condition = {
  id: '017ca927-67e0-e581-a2c7-115087226fg2|condition',
  isEnteredInError: false,
  asserter: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
    asserterName: 'BROWN, David (Dr)',
    asserterType: 'Practitioner',
  },
  metadata: {
    requestedWhen: '2016-09-01T00:00:00+00:00',
    dataSources: [],
    isRedacted: false,
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/root-template-display-name',
        display: 'Diagnosis Level One',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/root-template-name',
        display: 'diagnosis-level-one',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/extension-template-name',
        display: 'diagnosis-generic-cancer-level-2',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/extension-template-version',
        display: '1',
      },
    ],
  },
  extensionData: [QuestionnaireResponse1, QuestionnaireResponse2, NestedGroupWithDisplayExampleData],
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
  note: [
    {
      text: '<ol><li><strong><em>This is a note field example</em></strong></li><li><strong><em>option</em></strong></li><li><strong><em><u>3rd</u></em></strong></li></ol>',
    },
    {
      text: '&lt;ol&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;This is a note field example&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;option&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;&lt;u&gt;3rd&lt;/u&gt;&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;/ol&gt;',
    },
  ],
  clinicalStatus: ConditionClinicalStatus.Active,
  verificationStatus: ConditionVerificationStatus.Confirmed,
  // assertedDate: {
  //   value: '2018-08-07T00:00:00+00:00',
  //   kind: PartialDateTimeKindCode.Date,
  // },
  onset: {
    dateTime: {
      value: '2019-03-04T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
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
  extension: [
    {
      url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
      valueBoolean: true,
    },
  ],
}

const ConditionTwo: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087226er3|condition',
  isEnteredInError: false,
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
  onset: {
    dateTime: {
      value: '2016-09-01T03:55:00+00:00',
      kind: PartialDateTimeKindCode.Time,
    },
  },
  verificationStatus: ConditionVerificationStatus.Refuted,
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
  extension: [
    {
      url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
      valueBoolean: true,
    },
  ],
}

const ConditionThree: Condition = {
  isEnteredInError: false,
  abatement: null,
  metadata: mockMetadata,
  assertedDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '2022-03-18T00:00:00+00:00',
  },
  verificationStatus: ConditionVerificationStatus.EnteredInError,
  severity: {
    coding: [{ code: '2448402', display: 'Severe' }],
    text: 'Severe',
  },
  onset: {
    dateTime: {
      value: '2016-09-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.YearMonth,
    },
  },
  asserter: null,
  bodySite: [],
  category: [],
  clinicalStatus: ConditionClinicalStatus.Active,
  code: { coding: [{ code: '3135009', display: 'Otitis externa' }], text: 'Otitis externa' },
  evidence: [],
  extensionData: null,
  id: 'R3|cce08927-b95b-4d16-89e7-f92bd7853059',
  stage: null,
  extension: [
    {
      url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
      valueBoolean: true,
    },
  ],
}

const ConditionFour: Condition = {
  id: '345ha927-34e0-e911-a2c7-005087246er3|condition',
  isEnteredInError: false,
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
  onset: {
    dateTime: {
      value: '2020-09-02T12:30:00+00:00',
      kind: PartialDateTimeKindCode.YearMonth,
    },
  },
  verificationStatus: ConditionVerificationStatus.EnteredInError,
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
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
  extension: [
    {
      url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
      valueBoolean: false,
    },
  ],
}

const ConditionFive: Condition = {
  isEnteredInError: false,
  abatement: null,
  metadata: mockMetadata,
  assertedDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '2022-03-18T00:00:00+00:00',
  },
  verificationStatus: ConditionVerificationStatus.EnteredInError,
  severity: {
    coding: [{ code: '2448402', display: 'Moderate' }],
    text: 'Moderate',
  },
  onset: {
    dateTime: {
      value: '2022-09-06T14:20:00+00:00',
      kind: PartialDateTimeKindCode.DateTime,
    },
  },
  asserter: null,
  bodySite: [],
  category: [],
  clinicalStatus: ConditionClinicalStatus.Active,
  code: { coding: [{ code: '3135009', display: 'Transient ischemic attack' }], text: 'Transient ischemic attack' },
  evidence: [],
  extensionData: null,
  id: 'R3|cce08927-b95b-4d16-89e7-f92bd7853058',
  stage: null,
}

const conditions: Condition[] = [ConditionOne, ConditionThree, ConditionFive, ConditionFour, ConditionTwo]

export default conditions
