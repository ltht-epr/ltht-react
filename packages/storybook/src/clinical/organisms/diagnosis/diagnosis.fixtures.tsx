import Badge, { BadgeTypes } from '@ltht-react/badge'
import { ButtonProps } from '@ltht-react/button'
import Icon from '@ltht-react/icon'
import { TEXT_COLOURS } from '@ltht-react/styles'
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
import { ReactElement } from 'react'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  tag: [
    {
      system: 'https://leedsth.nhs.uk/cds/snippet-text',
      display: 'Mock snippet text value',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
      display: 'Mock snippet hover text value',
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
      {
        linkId: 'IndexLesion',
        text: 'Index Lesion',
        type: QuestionnaireItemTypeCode.QuestionInteger,
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
    {
      linkId: 'IndexLesion',
      answer: [
        {
          valueString: null,
          valueBoolean: null,
          valueDateTime: null,
          valueInteger: 2,
        },
      ],
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
    dataSources: [
      {
        display: 'Mock',
      },
    ],
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
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-text',
        display: 'Confirmed, Heel Pain: Adenocarcinoma, no subtype, Active',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Confirmed, Heel Pain: Adenocarcinoma, no subtype, Active',
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
    {
      text: '&lt;ol&gt;&lt;li&gt;option 1&lt;/li&gt;&lt;li&gt;option 2&lt;/li&gt;&lt;li&gt;option 3&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;Note text&lt;/p&gt;&lt;ul&gt;&lt;li&gt;note 1&lt;/li&gt;&lt;li&gt;note 2&lt;/li&gt;&lt;li&gt;&lt;strong&gt;&lt;em&gt;&lt;u&gt;note 3&lt;/u&gt;&lt;/em&gt;&lt;/strong&gt;&lt;/li&gt;&lt;/ul&gt;',
    },
    {
      text: '&lt;ul&gt;&lt;li&gt;asd&lt;/li&gt;&lt;li&gt;dsa&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;NEXT&lt;/p&gt;&lt;ol&gt;&lt;li&gt;one&lt;/li&gt;&lt;li&gt;two&lt;/li&gt;&lt;/ol&gt;',
    },
  ],
  clinicalStatus: ConditionClinicalStatus.Active,
  verificationStatus: ConditionVerificationStatus.Confirmed,
  assertedDate: {
    value: '2018-08-07T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
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
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-text',
        display: 'Refuted, Diabetes mellitus type 2: Remission',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Refuted, Diabetes mellitus type 2: Remission',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
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
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-text',
        display: 'Confirmed, Otitis externa: Active',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Confirmed, Otitis externa: Active',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
  assertedDate: {
    kind: PartialDateTimeKindCode.Date,
    value: '2022-03-18T00:00:00+00:00',
  },
  verificationStatus: ConditionVerificationStatus.Confirmed,
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
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-text',
        display: 'Entered In Error, Diabetes mellitus type 2: Remission',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Entered In Error, Diabetes mellitus type 2: Remission',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
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
  metadata: {
    dataSources: [
      {
        display: 'Mock',
      },
    ],
    tag: [
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-text',
        display: 'Entered In Error, Transient ischemic attack: Active',
      },
      {
        system: 'https://leedsth.nhs.uk/cds/snippet-hover-text',
        display: 'Entered In Error, Transient ischemic attack: Active',
      },
    ],
    isRedacted: false,
    requestedWhen: '',
  },
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

const conditions: Condition[] = [ConditionOne, ConditionThree, ConditionFive, ConditionFour, ConditionTwo, ConditionTwo]

const conditionExternalSchizophreniaHumber: Condition = {
  "id": "FCE87.00d2929a-7449-4f09-b2b7-bcea0957b224",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "58214004",
        "display": "Schizophrenia"
      }
    ],
    "text": "Schizophrenia"
  },
  "metadata": {
    "dataSources": [
      {
        "code": "RV9",
        "display": "Humber Teaching NHS Foundation Trust"
      }
    ],
    "tag": [
      {
        "code": "RV9",
        "display": "Humber Teaching NHS Foundation Trust",
        "system": "https://yhcr.nhs.uk/Source"
      },
      {
        "code": "RV9",
        "display": "Humber Teaching NHS Foundation Trust",
        "system": "https://yhcr.nhs.uk/Provenance"
      }
    ],
    isRedacted: false,
    requestedWhen: ''     
  }
}

const conditionExternalProblemsWithSightDoncaster: Condition = {
  "id": "FCE87.ffe50aa5-02c0-45f2-911a-3bccc45e8053",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "452071000000109",
        "display": "Problems with sight"
      }
    ],
    "text": "Problems with sight"
  },
  "metadata": {
    "dataSources": [
      {
        "code": "RP5",
        "display": "Doncaster and Bassetlaw Hospitals NHS Trust"
      }
    ],
    "tag": [
      {
        "code": "RP5",
        "display": "Doncaster and Bassetlaw Hospitals NHS Trust",
        "system": "https://yhcr.nhs.uk/Source"
      },
      {
        "code": "RP5",
        "display": "DONCASTER AND BASSETLAW TEACHING HOSPITALS NHS FOUNDATION TRUST",
        "system": "https://yhcr.nhs.uk/Provenance"
      }
    ],
    isRedacted: false,
    requestedWhen: ''
  }
}

const conditionsExternal = [conditionExternalSchizophreniaHumber, conditionExternalProblemsWithSightDoncaster]

const controls: ButtonProps[] = [
  {
    icon: <Icon type="paper-clip" size="medium" />,
    value: 'Control 1',
    title: 'Description of the button action can go here!!!',
    styling: {
      buttonStyle: 'workflow',
      padding: '20px',
    },
  },
  {
    icon: <Icon type="link" size="medium" />,
    value: 'Control 2',
    styling: {
      buttonStyle: 'standard',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="trash" size="medium" />,
    value: 'Control 3',
    styling: {
      buttonStyle: 'danger',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="star" size="medium" />,
    value: 'Control 4',
    styling: {
      buttonStyle: 'primary',
      padding: '2px 10px',
    },
  },
  {
    icon: <Icon type="check" size="medium" />,
    iconColour: 'black',
    value: 'Control 5',
    styling: {
      buttonStyle: 'clear',
      padding: '2px 10px',
    },
  },
]

const createTag = (name: string, style: BadgeTypes) => (
  <Badge style={{ textAlign: 'center' }} type={style}>
    {name}
  </Badge>
)

const tags: ReactElement[] = [
  <div style={{ color: TEXT_COLOURS.INDICATORS.WARN, display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
    <Icon type="exclamation" size="medium" color="amber" />
    <small>Recommended</small>
  </div>,
  createTag('some tag 1', 'danger'),
  createTag('in-progress', 'standard'),
  createTag('tag 2', 'primary'),
  createTag('warning', 'warning'),
]

export { conditions, conditionsExternal, controls, tags }
