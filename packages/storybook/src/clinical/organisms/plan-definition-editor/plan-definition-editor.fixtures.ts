import { PlanDefinition, PlanDefinitionStatus } from '@ltht-react/types'
// eslint-disable-next-line import/prefer-default-export
export const planDefinition: PlanDefinition = {
  id: 'cd44e626-267c-46b1-8f77-60f24c645061',
  metadata: {
    requestedWhen: new Date().toISOString(),
    isRedacted: false,
    dataSources: [],
  },
  url: 'https://cpm.elseviercareplans.com/public/careplan/CPG_IP_Pneumonia-v2022-en-gb',
  goal: [
    {
      elementId: 'Goal/GIP fluid pneumonia',
      category: {
        coding: [
          {
            code: 'clinical',
            system: 'https://elsevier.com/goal-type',
            display: 'Clinical',
          },
        ],
      },
      description: {
        text: 'Fluid Balance',
      },
    },
    {
      elementId: 'Goal/GIP infection pneumonia',
      category: {
        coding: [
          {
            code: 'clinical',
            system: 'https://elsevier.com/goal-type',
            display: 'Clinical',
          },
        ],
      },
      description: {
        text: 'Resolution of Infection Signs and Symptoms',
      },
    },
    {
      elementId: 'Goal/GIP oxygen vent pneumonia',
      category: {
        coding: [
          {
            code: 'clinical',
            system: 'https://elsevier.com/goal-type',
            display: 'Clinical',
          },
        ],
      },
      description: {
        text: 'Effective Oxygenation and Ventilation',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia1 overview',
      category: {
        coding: [
          {
            code: 'educational',
            system: 'https://elsevier.com/goal-type',
            display: 'Educational',
          },
        ],
      },
      description: {
        text: 'Pneumonia: Education: Overview',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia5 manage',
      category: {
        coding: [
          {
            code: 'educational',
            system: 'https://elsevier.com/goal-type',
            display: 'Educational',
          },
        ],
      },
      description: {
        text: 'Pneumonia: Education: Self Management',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia6 pmd',
      category: {
        coding: [
          {
            code: 'educational',
            system: 'https://elsevier.com/goal-type',
            display: 'Educational',
          },
        ],
      },
      description: {
        text: 'Pneumonia: Education: When to Seek Medical Attention',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia text',
      category: {
        coding: [
          {
            code: 'educational',
            system: 'https://elsevier.com/goal-type',
            display: 'Educational',
          },
        ],
      },
      description: {
        text: 'Pneumonia: Text',
      },
    },
  ],
  name: 'Elsevier Pneumonia S22',
  title: 'Pneumonia',
  topic: [
    {
      text: 'bacterial',
    },
    {
      text: 'infection',
    },
    {
      text: 'pneumonia',
    },
    {
      text: 'pulmonary',
    },
    {
      text: 'viral',
    },
  ],
  action: [
    {
      elementId: 'Action/PP Pneumonia Fluid UB',
      code: [
        {
          coding: [
            {
              code: 'problem',
              system: 'https://elsevier.com/action-type',
              display: 'Problem',
            },
          ],
        },
      ],
      action: [
        {
          elementId: 'Action/INVP fluid balance pneumonia FT',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                  system: 'https://elsevier.com/action-type',
                  display: 'Intervention plan',
                },
              ],
            },
          ],
          action: [
            {
              elementId: 'Action/INVG fluid electrolyte management',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Fluid/Electrolyte Management',
            },
          ],
          description: 'Monitor and Manage Fluid Balance',
        },
      ],
      goalId: ['GIP fluid pneumonia'],
      extension: [
        {
          url: 'https://elsevier.com/evidence/url',
          valueString: 'https://cpm.elseviercareplans.com/public/careplan/CPG_IP_Pneumonia-v2022-en-gb',
        },
      ],
      description: 'Fluid Imbalance (Pneumonia)',
    },
    {
      elementId: 'Action/PP Pneumonia Infection UB',
      code: [
        {
          coding: [
            {
              code: 'problem',
              system: 'https://elsevier.com/action-type',
              display: 'Problem',
            },
          ],
        },
      ],
      action: [
        {
          elementId: 'Action/INVP pneumonia prevent infection prog FT',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                  system: 'https://elsevier.com/action-type',
                  display: 'Intervention plan',
                },
              ],
            },
          ],
          action: [
            {
              elementId: 'Action/INV fever comfort',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Fever Reduction/Comfort Measures',
            },
            {
              elementId: 'Action/INV isolation precautions',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Isolation Precautions',
            },
            {
              elementId: 'Action/INVG infection manage',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Infection Management',
            },
          ],
          description: 'Prevent Infection Progression',
        },
      ],
      goalId: ['GIP infection pneumonia'],
      extension: [
        {
          url: 'https://elsevier.com/evidence/url',
          valueString: 'https://cpm.elseviercareplans.com/public/careplan/CPG_IP_Pneumonia-v2022-en-gb',
        },
      ],
      description: 'Infection (Pneumonia)',
    },
    {
      elementId: 'Action/PP Pneumonia Resp Comp UB',
      code: [
        {
          coding: [
            {
              code: 'problem',
              system: 'https://elsevier.com/action-type',
              display: 'Problem',
            },
          ],
        },
      ],
      action: [
        {
          elementId: 'Action/INVP airway clearance pneumonia FT',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                  system: 'https://elsevier.com/action-type',
                  display: 'Intervention plan',
                },
              ],
            },
          ],
          action: [
            {
              elementId: 'Action/INVG breathing airway clear',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Breathing Techniques/Airway Clearance',
            },
            {
              elementId: 'Action/INV cough deep breath',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Cough and Deep Breathing',
            },
          ],
          description: 'Promote Airway Secretion Clearance',
        },
        {
          elementId: 'Action/INVP oxygen vent perfusion pneumonia FT',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                  system: 'https://elsevier.com/action-type',
                  display: 'Intervention plan',
                },
              ],
            },
          ],
          action: [
            {
              elementId: 'Action/INVG airway vent management',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Airway/Ventilation Management',
            },
            {
              elementId: 'Action/INV position hob',
              code: [
                {
                  coding: [
                    {
                      code: 'intervention',
                      system: 'https://elsevier.com/action-type',
                      display: 'Intervention',
                    },
                  ],
                },
              ],
              description: 'Head of Bed (HOB)',
            },
          ],
          description: 'Optimise Oxygenation and Ventilation',
        },
      ],
      goalId: ['GIP oxygen vent pneumonia'],
      extension: [
        {
          url: 'https://elsevier.com/evidence/url',
          valueString: 'https://cpm.elseviercareplans.com/public/careplan/CPG_IP_Pneumonia-v2022-en-gb',
        },
      ],
      description: 'Respiratory Compromise (Pneumonia)',
    },
    {
      elementId: 'Action/EDG pneumonia1 overview',
      code: [
        {
          coding: [
            {
              code: 'education',
              system: 'https://elsevier.com/action-type',
              display: 'Education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia1 overview'],
      description: 'Pneumonia: Education: Overview',
    },
    {
      elementId: 'Action/EDG pneumonia5 manage',
      code: [
        {
          coding: [
            {
              code: 'education',
              system: 'https://elsevier.com/action-type',
              display: 'Education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia5 manage'],
      description: 'Pneumonia: Education: Self Management',
    },
    {
      elementId: 'Action/EDG pneumonia6 pmd',
      code: [
        {
          coding: [
            {
              code: 'education',
              system: 'https://elsevier.com/action-type',
              display: 'Education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia6 pmd'],
      description: 'Pneumonia: Education: When to Seek Medical Attention',
    },
    {
      elementId: 'Action/EDG pneumonia text',
      code: [
        {
          coding: [
            {
              code: 'education',
              system: 'https://elsevier.com/action-type',
              display: 'Education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia text'],
      description: 'Pneumonia: Text',
    },
  ],
  status: PlanDefinitionStatus.Active,
  version: 'Elsevier/2022.04.22',
  publisher: 'Elsevier',
  identifier: [
    {
      value: 'PlanDefinition/Elsevier/CPG IP Pneumonia',
      system: 'https://leedsth.nhs.uk/ehr/plan-definition/publisher-series-id',
    },
  ],
  useContext: [
    {
      code: {
        code: 'Population',
        system: 'https://leedsth.nhs.uk/ehr/care-plan-definition/usage-context-type',
      },
      valueCodeableConcept: {
        coding: [
          {
            code: 'Adult',
            system: 'https://leedsth.nhs.uk/ehr/care-plan-definition/usage-context',
            display: 'Adult',
          },
        ],
      },
    },
    {
      code: {
        code: 'Population',
        system: 'https://leedsth.nhs.uk/ehr/care-plan-definition/usage-context-type',
      },
      valueCodeableConcept: {
        coding: [
          {
            code: 'Obstetrics',
            system: 'https://leedsth.nhs.uk/ehr/care-plan-definition/usage-context',
            display: 'Obstetrics',
          },
        ],
      },
    },
  ],
  description: 'Pneumonia (Adult, Obstetrics Inpatient)',
}
