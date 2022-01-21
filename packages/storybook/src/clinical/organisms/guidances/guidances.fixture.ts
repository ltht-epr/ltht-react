import { Guidance, Metadata, GuidanceStatusCode } from '@ltht-react/types'

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

// const guidanceList: GuidanceList = {
//   id: '88686ed1-ac86-4e14-8c73-fc020f1b0e5b',
//   metadata: mockMetadata,
//   guidance: [guidanceOne, guidanceTwo, guidanceThree],
// }

export default guidanceList
