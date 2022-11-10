import { PlanDefinition, PlanDefinitionStatus } from '@ltht-react/types'

export const planDefinition: PlanDefinition = {
  id: '763c07bf-1de7-4670-a6e0-5ac3a4340cac',
  title: 'Pneumonia',
  metadata: { isRedacted: false, requestedWhen: new Date().toISOString(), dataSources: [] },
  status: PlanDefinitionStatus.Active,
  useContext: [
    {
      valueCodeableConcept: {
        coding: [
          {
            display: 'Paediatric',
          },
        ],
      },
    },
  ],
  goal: [
    {
      elementId: 'Goal/GIP fluid pneumonia peds',
      description: {
        text: 'Fluid Balance',
      },
    },
    {
      elementId: 'Goal/GIP infection pneumonia peds',
      description: {
        text: 'Resolution of Infection Signs and Symptoms',
      },
    },
    {
      elementId: 'Goal/GIP oxygen vent pneumonia peds',
      description: {
        text: 'Effective Oxygenation and Ventilation',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia1 overview peds',
      description: {
        text: 'Pneumonia: Education: Overview',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia5 manage peds',
      description: {
        text: 'Pneumonia: Education: Self Management',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia6 pmd peds',
      description: {
        text: 'Pneumonia: Education: When to Seek Medical Attention',
      },
    },
    {
      elementId: 'Goal/EDG pneumonia text peds',
      description: {
        text: 'Pneumonia: Text',
      },
    },
  ],
  action: [
    {
      elementId: 'Action/PP Pneumonia Fluid Peds UB',
      description: 'Fluid Imbalance',
      code: [
        {
          coding: [
            {
              code: 'problem',
            },
          ],
        },
      ],
      goalId: ['GIP fluid pneumonia peds'],
      action: [
        {
          description: 'Monitor and Manage Fluid Balance',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                },
              ],
            },
          ],
          action: [
            {
              description: 'Fluid/Electrolyte Management',
              documentation: [],
              action: [],
            },
          ],
        },
      ],
    },
    {
      elementId: 'Action/PP Pneumonia Infection Peds UB',
      description: 'Infection',
      code: [
        {
          coding: [
            {
              code: 'problem',
            },
          ],
        },
      ],
      goalId: ['GIP infection pneumonia peds'],
      action: [
        {
          description: 'Prevent Infection Progression',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                },
              ],
            },
          ],
          action: [
            {
              description: 'Fever Reduction/Comfort Measures',
              documentation: [],
              action: [],
            },
            {
              description: 'Infection Management',
              documentation: [],
              action: [],
            },
            {
              description: 'Isolation Precautions',
              documentation: [],
              action: [],
            },
          ],
        },
      ],
    },
    {
      elementId: 'Action/PP Pneumonia Resp Peds UB',
      description: 'Respiratory Compromise',
      code: [
        {
          coding: [
            {
              code: 'problem',
            },
          ],
        },
      ],
      goalId: ['GIP oxygen vent pneumonia peds'],
      action: [
        {
          description: 'Promote Airway Secretion Clearance',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                },
              ],
            },
          ],
          action: [
            {
              description: 'Breathing Techniques/Airway Clearance',
              documentation: [],
              action: [],
            },
            {
              description: 'Cough and Deep Breathing',
              documentation: [],
              action: [],
            },
          ],
        },
        {
          description: 'Optimise Oxygenation and Ventilation',
          code: [
            {
              coding: [
                {
                  code: 'intervention-plan',
                },
              ],
            },
          ],
          action: [
            {
              description: 'Airway/Ventilation Management',
              documentation: [],
              action: [],
            },
            {
              description: 'Head of Bed (HOB)',
              documentation: [],
              action: [],
            },
          ],
        },
      ],
    },
    {
      elementId: 'Action/EDG pneumonia1 overview peds',
      description: 'Pneumonia: Education: Overview',
      code: [
        {
          coding: [
            {
              code: 'education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia1 overview peds'],
      action: [],
    },
    {
      elementId: 'Action/EDG pneumonia5 manage peds',
      description: 'Pneumonia: Education: Self Management',
      code: [
        {
          coding: [
            {
              code: 'education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia5 manage peds'],
      action: [],
    },
    {
      elementId: 'Action/EDG pneumonia6 pmd peds',
      description: 'Pneumonia: Education: When to Seek Medical Attention',
      code: [
        {
          coding: [
            {
              code: 'education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia6 pmd peds'],
      action: [],
    },
    {
      elementId: 'Action/EDG pneumonia text peds',
      description: 'Pneumonia: Text',
      code: [
        {
          coding: [
            {
              code: 'education',
            },
          ],
        },
      ],
      goalId: ['EDG pneumonia text peds'],
      action: [],
    },
  ],
}
