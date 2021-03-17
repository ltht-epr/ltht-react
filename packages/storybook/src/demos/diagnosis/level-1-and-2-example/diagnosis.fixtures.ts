import {
  Metadata,
  Condition,
  ConditionClinicalStatus,
  ConditionVerificationStatus,
  PartialDateTimeKindCode,
  Extension,
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

const mockLungCancerLevel2Data: Extension[] = [
  {
    valueString: 'Grade',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'T Stage',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'N Stage',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'M Stage',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Check Sites of Metastasis at Diagnosis',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Details of Mets',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'FEV1 Amount',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'FEV1 %',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Epidermal Growth Factor Receptor Mutational Status',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Dysphagia Score',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Stage Classification',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Dyspnea Score',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Smoking History',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Measured FVC (L)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'DLCO %',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'V02 Max at CPEX',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Load (Watts) at CPEX',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'VE/VC02 at CPEX',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
]

const mockHemophiliaLevel2Data: Extension[] = [
  {
    valueString: 'Grade',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Check Sites of Metastasis at Diagnosis',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Details of Mets',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Bone Marrow aspirate of Diagnosis',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMA Blast Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMA Plasma Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMA Lymphoid Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMA Storage Iron Amount',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMA Trilineage Involvement',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Bone Marrow Trephine at Diagnosis',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Blast Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Plasma Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Lymphoid Cell Number (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Pattern of Infiltration',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Pattern of Reticulin',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'BMT Trilineage Involvement',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Source on which diagnosis made',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Cells Analysed For Immunophenotype (%)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Bone Marrow Karyotype',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Cytogenetic Risk Group',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Number of Abnormal Nodal Areas',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Primary Extranodal Site',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Number Of Extranodal Sites Code',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Spleen Cm Below Costal Margin',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Hepatomegaly Indicator',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Splenomegaly Indicator',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Number Of Lymphadenopathy Areas',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'HASFORD Index (CML)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'SOKAL Index (CML)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'IPSS (myelodysplasia)',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'HASENCLEVER Index',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'FLIPI IndexCOSD',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'RIPI Index for DLBCL Score',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Extramedullary Disease',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Has Ann Arbor Symptoms?',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Ann Arbor Extranodal Involvement?',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
  },
  {
    valueString: 'Ann Arbor Bulky Disease Present?',
    valueCodeableConcept: {
      coding: [
        {
          code: '999',
          display: '---',
        },
      ],
      text: '---',
    },
    url: '',
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

const conditions: Condition[] = [LungCancer, AcuteBronchitis, Hemophilia]

export default conditions
