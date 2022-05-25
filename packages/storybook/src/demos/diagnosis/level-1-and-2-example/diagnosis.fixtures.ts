import {
  Metadata,
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
  PartialDateTimeKindCode,
  Extension,
  QuestionnaireResponseStatus,
  QuestionnairePublicationStatus,
  QuestionnaireItemTypeCode,
  QuestionnaireResponse,
} from '@ltht-react/types'

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'York',
    },
    {
      display: 'Hull',
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

const mockLungCancerLevel2Data: Extension[] = [
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Grade',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'T Stage',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'N Stage',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'M Stage',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Check Sites of Metastasis at Diagnosis',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Details of Mets',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'FEV1 Amount',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'FEV1 %',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Epidermal Growth Factor Receptor Mutational Status',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Dysphagia Score',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Stage Classification',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Dyspnea Score',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Smoking History',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Measured FVC (L)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'DLCO %',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'V02 Max at CPEX',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Load (Watts) at CPEX',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'VE/VC02 at CPEX',
  },
]

const mockHemophiliaLevel2Data: Extension[] = [
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Grade',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Check Sites of Metastasis at Diagnosis',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Details of Mets',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Bone Marrow aspirate of Diagnosis',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMA Blast Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMA Plasma Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMA Lymphoid Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMA Storage Iron Amount',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMA Trilineage Involvement',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Bone Marrow Trephine at Diagnosis',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Blast Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Plasma Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Lymphoid Cell Number (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Pattern of Infiltration',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Pattern of Reticulin',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'BMT Trilineage Involvement',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Source on which diagnosis made',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Cells Analysed For Immunophenotype (%)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Bone Marrow Karyotype',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Cytogenetic Risk Group',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Number of Abnormal Nodal Areas',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Primary Extranodal Site',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Number Of Extranodal Sites Code',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Spleen Cm Below Costal Margin',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Hepatomegaly Indicator',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Splenomegaly Indicator',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Number Of Lymphadenopathy Areas',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'HASFORD Index (CML)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'SOKAL Index (CML)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'IPSS (myelodysplasia)',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'HASENCLEVER Index',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'FLIPI IndexCOSD',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'RIPI Index for DLBCL Score',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Extramedullary Disease',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Has Ann Arbor Symptoms?',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Ann Arbor Extranodal Involvement?',
  },
  {
    valueString: '',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: 'Ann Arbor Bulky Disease Present?',
  },
]

const AcuteBronchitis: Condition = {
  id: '111',
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
        display: 'Acute Bronchitis',
      },
    ],
    text: 'Acute Bronchitis',
  },
  clinicalStatus: ConditionClinicalStatus.Inactive,
  assertedDate: {
    value: '2019-03-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.Confirmed,
  severity: {
    coding: [{ code: '2448402', display: 'Mild' }],
    text: 'Mild',
  },
}

const LungCancer: Condition = {
  id: '222',
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
        display: 'Lung Cancer',
      },
    ],
    text: 'Lung Cancer',
  },
  clinicalStatus: ConditionClinicalStatus.Active,
  asserter: {
    display: 'Practitioner',
    typeName: 'Practitioner',
    asserterName: 'John smith (Dr)',
    asserterType: 'Practitioner',
  },
  assertedDate: {
    value: '2020-01-01T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  onset: {
    dateTime: {
      value: '2020-03-01T00:00:00+00:00',
      kind: PartialDateTimeKindCode.Date,
    },
  },
  evidence: [
    {
      code: [
        {
          coding: [
            {
              code: '1648002',
              display: 'Lymphocytic pseudotumor of lung',
            },
          ],
          text: 'Lymphocytic pseudotumor of lung',
        },
      ],
    },
  ],
  verificationStatus: ConditionVerificationStatus.Confirmed,
  severity: {
    coding: [{ code: '2448402', display: 'Severe' }],
    text: 'Severe',
  },
  extension: [...mockLungCancerLevel2Data],
}

const Hemophilia: Condition = {
  id: '333',
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
        display: 'Hemophilia',
      },
    ],
    text: 'Hemophilia',
  },
  clinicalStatus: ConditionClinicalStatus.Resolved,
  asserter: {
    display: 'Practitioner',
    typeName: 'Practitioner',
    asserterName: 'John smith (Dr)',
    asserterType: 'Practitioner',
  },
  assertedDate: {
    value: '2017-12-12T00:00:00+00:00',
    kind: PartialDateTimeKindCode.Date,
  },
  verificationStatus: ConditionVerificationStatus.Confirmed,
  severity: {
    coding: [{ code: '2448402', display: 'Moderate' }],
    text: 'Moderate',
  },
  extension: [...mockHemophiliaLevel2Data],
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
        linkId: '1',
        text: 'Clinical Summary',
        type: QuestionnaireItemTypeCode.QuestionCoding,
        item: null,
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: [
        {
          valueString: null,
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Value Display' },
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
          valueBoolean: false,
          valueDateTime: null,
          valueCoding: { display: 'Right' },
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

export const GroupTypeData: QuestionnaireResponse = {
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
    title: 'Right to Reside',
    status: QuestionnairePublicationStatus.Active,
    item: [
      {
        linkId: '1',
        text: 'General questions',
        type: QuestionnaireItemTypeCode.Group,
        item: [
          {
            linkId: '1.1',
            text: 'What is your gender?',
            type: QuestionnaireItemTypeCode.QuestionString,
          },
          {
            linkId: '1.2',
            text: 'What is your date of birth?',
            type: QuestionnaireItemTypeCode.QuestionDate,
          },
        ],
      },
    ],
  },
  item: [
    {
      linkId: '1',
      text: null,
      answer: null,
      item: [
        {
          linkId: '1.1',
          text: null,
          answer: [
            {
              valueString: 'Male',
              valueBoolean: false,
              valueDateTime: null,
            },
          ],
        },
        {
          linkId: '1.2',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: false,
              valueDateTime: {
                kind: PartialDateTimeKindCode.Date,
                value: '1971-01-12T00:00:00+00:00',
              },
            },
          ],
        },
      ],
    },
  ],
}

const LevelTwoDiagnosis: Condition = {
  id: '017ca927-67e0-e581-a2c7-115087226fg2|condition',
  metadata: redactedMetadata,
  asserter: {
    display: 'BROWN, David (Dr)',
    typeName: 'Doctor',
    asserterName: 'John smith (Dr)',
    asserterType: 'Practitioner',
  },
  extensionData: [
    QuestionnaireResponse1,
    QuestionnaireResponse2,
    GroupTypeData,
    {
      id: '435d2aca-7776-43e7-a33f-1ba481bd2892',
      isEnteredInError: false,
      metadata: mockMetadata,
      status: QuestionnaireResponseStatus.Completed,
      authored: {
        kind: PartialDateTimeKindCode.DateTime,
        value: '2021-08-17T13:13:56.9755581+01:00',
      },
      author: {
        typeName: 'EhrUser',
        identifier: {
          system: 'http://leedsth.nhs.uk/user/guid',
          value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
        },
        display: 'John Smith',
      },
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
        title: 'Right to Reside',
        status: QuestionnairePublicationStatus.Active,
        item: [
          {
            linkId: '1',
            text: null,
            type: QuestionnaireItemTypeCode.Group,
            repeats: true,
            item: [
              {
                linkId: '1.1',
                text: 'Criteria',
                type: QuestionnaireItemTypeCode.QuestionString,
              },
              {
                linkId: '1.2',
                text: 'Met?',
                type: QuestionnaireItemTypeCode.QuestionBoolean,
              },
            ],
          },
        ],
      },
      item: [
        {
          linkId: '1',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.1',
              text: null,
              answer: [
                {
                  valueString:
                    'Mauris quis augue sed quam rhoncus commodo et ut urna. Pellentesque condimentum justo et urna euismod eleifend. Mauris interdum convallis tortor ut lacinia. In ullamcorper sem a dapibus maximus. Nunc cursus eu nibh sed gravida. Curabitur velit nibh, scelerisque ut neque sit amet, tempus ornare sapien. Phasellus lobortis dui vitae ante viverra, gravida finibus diam aliquet. Ut auctor semper eros, quis venenatis est porttitor non. Donec mattis euismod scelerisque. Duis in lectus sit amet metus bibendum euismod. Cras pulvinar dictum tellus, at pellentesque ex consectetur id. Mauris cursus risus quis fermentum ultricies. Mauris non fringilla est. Etiam cursus dictum mauris eu porta. Aliquam sagittis velit ut varius elementum.',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2',
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
        {
          linkId: '1',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.1',
              text: null,
              answer: [
                {
                  valueString: 'Pain Management: Pain under control',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2',
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
          linkId: '1',
          text: null,
          answer: null,
          item: [
            {
              linkId: '1.1',
              text: null,
              answer: [
                {
                  valueString: 'Blood Results',
                  valueBoolean: null,
                  valueDateTime: null,
                },
              ],
            },
            {
              linkId: '1.2',
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
      id: '4a188d5f-7e52-41bd-9404-2f4f85b05d37',
      status: QuestionnaireResponseStatus.Completed,
      isEnteredInError: false,
      metadata: mockMetadata,
      authored: {
        kind: PartialDateTimeKindCode.DateTime,
        value: '2022-02-18T11:06:02.987+00:00',
      },
      author: {
        typeName: 'EhrUser',
        identifier: {
          system: null,
          value: 'd6e742bd-770d-4172-9a07-e78960739be2',
        },
        display: 'MANTRI, Aparna (Mrs) Test Analyst, The Leeds Teaching Hospitals NHS Trust',
      },
      questionnaire: {
        id: '4789c2b3-7e37-4dd7-9642-0d456ae2f2bd',
        identifier: [
          {
            system: 'http://leedsth.nhs.uk/user/guid',
            value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
          },
        ],
        metadata: mockMetadata,
        url: null,
        version: '1',
        title: 'Discharge Clinical Summary',
        status: QuestionnairePublicationStatus.Active,
        item: [
          {
            linkId: '1',
            text: 'Contact details',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '2',
            text: 'Reason for admission',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '3',
            text: 'Primary diagnosis',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '4',
            text: 'Secondary diagnosis',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '5',
            text: 'Significant discussions',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '6',
            text: 'Involvement',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '7',
            text: 'Investigation results',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '8',
            text: 'Key treatments',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '9',
            text: 'Information given to patient',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '10',
            text: 'Complications',
            type: QuestionnaireItemTypeCode.QuestionString,
            repeats: false,
            item: null,
          },
          {
            linkId: '11',
            text: 'Fit Note Completed?',
            type: QuestionnaireItemTypeCode.QuestionBoolean,
            repeats: false,
            item: null,
          },
        ],
      },
      item: [
        {
          linkId: '1',
          text: null,
          answer: [
            {
              valueString:
                "Patient's phone number and email address were given and would like to be contacted via phone. Carer's phone number also recored/",
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '2',
          text: null,
          answer: [
            {
              valueString:
                'Patient complains of chest pain, dyspnoea and shortness of breath the day before admissions. \nAlso was tested positive for COVID-19 \nPatient was diagnosed with juvenile diabetes, Goitre and lung infections and was treated for the same. \nIs having regular follow ups with the Endocrinologist and Respiratory medicine. Getting regular bloods and investigations by GP.',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '3',
          text: null,
          answer: [
            {
              valueString: 'Juvenile diabetes mellitus\nCOVID-19 positive\nMyocardial infarction\nAtherosclerosis',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '4',
          text: null,
          answer: [
            {
              valueString: 'Pancreatitis\nLung fibrosis',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '5',
          text: null,
          answer: [
            {
              valueString:
                'Patient admitted to SJUH\nUnderwent angiogram and cardiac surgery \nLung surgery\nWas monitored for diabetes Mellitus',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '6',
          text: null,
          answer: [
            {
              valueString:
                'Endocrinologists and Respiratory medicine specialists were involved while treating the patient for cardiac symptoms.',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '7',
          text: null,
          answer: [
            {
              valueString: 'Xray\nAngiogram\nBloods including U&amp;E and LFTs\nCT and MRI',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '8',
          text: null,
          answer: [
            {
              valueString: 'Angraioplasty\nBypass surgery\n',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '9',
          text: null,
          answer: [
            {
              valueString:
                'Regular follow ups appointment with the consultant and GPs for regular bloods and other investigations. \nAvoid heavy exercises and dietary instructions by Dietician. No smoking and alcohol.',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '10',
          text: null,
          answer: [
            {
              valueString: 'Patient had severe lung infections due to COVID-19 and diarrhoea due to allergy to Nuts',
              valueBoolean: null,
              valueDateTime: null,
            },
          ],
          item: [],
        },
        {
          linkId: '11',
          text: null,
          answer: [
            {
              valueString: null,
              valueBoolean: true,
              valueDateTime: null,
            },
          ],
          item: [],
        },
      ],
    },
  ],
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
  evidence: [
    {
      code: [
        {
          coding: [
            {
              code: '1525003',
              display: 'Blister of foot without infection',
            },
          ],
          text: 'Blister of foot without infection',
        },
        {
          coding: [
            {
              code: '556070069',
              display: 'Nonvenomous insect bite of foot with indection',
            },
          ],
          text: 'Nonvenomous insect bite of foot with indection',
        },
      ],
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

const conditions: Condition[] = [LungCancer, AcuteBronchitis, Hemophilia, LevelTwoDiagnosis]

export default conditions
