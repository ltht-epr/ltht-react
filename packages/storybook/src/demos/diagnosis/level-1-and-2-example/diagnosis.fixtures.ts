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
