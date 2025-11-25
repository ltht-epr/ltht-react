import { Guidance, Metadata, GuidanceStatusCode, PartialDateTimeKindCode } from '@ltht-react/types'

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
      display: 'Mock',
    },
  ],
  isRedacted: true,
  requestedWhen: '',
}

const guidanceOne: Guidance = {
  id: 'c2ee5d22-6fcd-4ec8-b12a-e9c6e83876b1',
  isEnteredInError: false,
  metadata: mockMetadata,
  text: {
    div: '',
    text: 'As the information entered indicates that the patient has cognition and mental capacity issues, please consider the need for:',
  },
  note: [
    { text: 'Advice from MCA / MHA team' },
    { text: 'Advice from Psychiatric Liaison Team (if appropriate)' },
    { text: 'Assessment and Care of Psychological Health Care Plan' },
    { text: 'Enhanced care' },
    { text: 'Further assessment and / or referral to Mental Health team' },
    { text: 'Hospital passport' },
    { text: '‘Know Who I Am’ booklet (Forget Me Not)' },
    { text: 'Restrictive Intervention Care Plan' },
    { text: 'Self-Harm or Harm to Others Care Plan' },
    { text: "Utilising the 'Use of Restraint' policy and Good Practice Guidance" },
  ],
  status: GuidanceStatusCode.Success,
  reasonCode: {
    text: 'Risk - Communication',
  },
}

const guidanceTwo: Guidance = {
  id: 'c2ee5d22-6fcd-4ec8-b12a-e9c6e83876b2',
  isEnteredInError: false,
  metadata: redactedMetadata,
  text: {
    div: '',
    text: 'As the information entered indicates that the patient has breathing issues, please consider the need for:',
  },
  note: [{ text: 'Oxygen prescription' }, { text: 'Tracheostomy Care Plan"' }],
  status: GuidanceStatusCode.Success,
  reasonCode: {
    text: 'Risk - Cognition and Mental Capacity',
  },
}

const guidanceThree: Guidance = {
  id: '1e4fd41d-5c55-4c46-acc9-e216b3dc2732',
  isEnteredInError: false,
  metadata: mockMetadata,
  text: {
    div: '',
    text: "As you have indicated that the patient has hydration issues, please alert the Medical Team of the patient's AKI status",
  },
  status: GuidanceStatusCode.Success,
  reasonCode: {
    text: 'Risk - Unknown',
  },
}

const guidanceList: Guidance[] = [guidanceOne, guidanceTwo, guidanceThree]

export const guidanceWithActions: Guidance[] = [
  {
    id: '653e80c0-48e1-4421-8533-c78580ad2d44',
    status: GuidanceStatusCode.Success,
    occuranceDateTime: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2025-11-24T14:15:59.6348495+00:00',
    },
    requestIdentifier: {
      value: '65917780-dd50-4eda-8494-69d491af9e9e',
    },
    reasonCode: {
      text: 'Test Guidance',
    },
    text: {
      div: '',
      text: 'Add a care plan',
    },
    note: [
      {
        elementId: '653e80c0-48e1-4421-8533-c78580ad2d44/0',
        text: 'Tropical Medicine Care Plan',
      },
    ],
    metadata: {
      dataSources: [],
      requestedWhen: '',
      isRedacted: false,
    },
    result: {
      id: '123',
      metadata: {
        dataSources: [],
        isRedacted: false,
        requestedWhen: '',
      },
      status: {
        system: 'https://leedsth.nhs.uk/ehr/request-group/status',
        code: 'active',
        display: 'Active',
      },
      intent: {
        system: 'https://leedsth.nhs.uk/ehr/request-group/intent',
        code: 'proposal',
        display: 'Proposal',
      },
      action: [
        {
          elementId: '653e80c0-48e1-4421-8533-c78580ad2d44/0',
          title: 'Launch Tropical Medicine Care Plan',
          type: {
            text: 'Create',
            coding: [
              {
                system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-type',
                code: 'create',
                display: 'Create',
              },
            ],
          },
          extension: null,
          code: [
            {
              coding: [
                {
                  system: 'https://leedsth.nhs.uk/ehr/guidance-action',
                  code: 'action/care-plan/LTHT/c6b8b82a-f881-01fc-5d89-ad0290544577',
                  display: 'Launch Care Plan',
                },
              ],
            },
          ],
          selectionBehaviour: {
            system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-selection-behaviour',
            code: 'any',
            display: 'Any',
          },
          requiredBehaviour: {
            system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-required-behaviour',
            code: 'could',
            display: 'Could',
          },
        },
      ],
    },
  },
  {
    id: 'c3f634e3-7c4c-4b0b-908b-ea96066f9f24',
    status: GuidanceStatusCode.Success,
    occuranceDateTime: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2025-11-24T14:15:59.6348992+00:00',
    },
    requestIdentifier: {
      value: '65917780-dd50-4eda-8494-69d491af9e9e',
    },
    reasonCode: {
      text: 'Test Guidance',
    },
    text: {
      div: '',
      text: 'Submit an eForm',
    },
    note: [
      {
        elementId: 'c3f634e3-7c4c-4b0b-908b-ea96066f9f24/0',
        text: 'Skin Assessment eForm',
      },
    ],
    metadata: {
      dataSources: [],
      requestedWhen: '',
      isRedacted: false,
    },
    result: {
      id: '123',
      metadata: {
        dataSources: [],
        isRedacted: false,
        requestedWhen: '',
      },
      status: {
        system: 'https://leedsth.nhs.uk/ehr/request-group/status',
        code: 'active',
        display: 'Active',
      },
      intent: {
        system: 'https://leedsth.nhs.uk/ehr/request-group/intent',
        code: 'proposal',
        display: 'Proposal',
      },
      action: [
        {
          elementId: 'c3f634e3-7c4c-4b0b-908b-ea96066f9f24/0',
          title: 'Launch Skin Assessment form',
          type: {
            text: 'Create',
            coding: [
              {
                system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-type',
                code: 'create',
                display: 'Create',
              },
            ],
          },
          extension: [
            {
              url: 'https://leedsth.nhs.uk/cds/template-name',
              valueString: '4at-assessment-test-for-delirium-and-cognitive-impairment',
            },
          ],
          code: [
            {
              coding: [
                {
                  system: 'https://leedsth.nhs.uk/ehr/guidance-action',
                  code: 'action/form/4at-assessment-test-for-delirium-and-cognitive-impairment',
                  display: '4AT Rapid Clinical Test For Delirium',
                },
              ],
            },
          ],
          selectionBehaviour: {
            system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-selection-behaviour',
            code: 'any',
            display: 'Any',
          },
          requiredBehaviour: {
            system: 'https://leedsth.nhs.uk/ehr/request-group/action/action-required-behaviour',
            code: 'could',
            display: 'Could',
          },
        },
      ],
    },
  },
  guidanceOne,
]

// const guidanceList: GuidanceList = {
//   id: '88686ed1-ac86-4e14-8c73-fc020f1b0e5b',
//   metadata: mockMetadata,
//   guidance: [guidanceOne, guidanceTwo, guidanceThree],
// }

export default guidanceList
