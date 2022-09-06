import {
  AuditEventContinuation,
  AuditEvent,
  PartialDateTimeKindCode,
  DocumentReference,
  DocumentReferenceContinuation,
  DocumentReferenceStatusCode,
  QuestionnaireResponse,
  QuestionnaireResponseStatus,
  QuestionnairePublicationStatus,
  Metadata,
  QuestionnaireResponseContinuation,
} from '@ltht-react/types'

const Audit1: AuditEvent = {
  id: 'id1',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-07-01T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Pathway Started',
  },
  outcomeDesc: '',
  period: {
    start: {
      value: '2021-07-01T06:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-07-01T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit2: AuditEvent = {
  id: 'id2',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-07-01T14:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc: 'Criteria "Pain - Pain under control" has been added. Criteria status is "Met".',
  period: {
    start: {
      value: '2021-07-01T14:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-07-01T14:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
          text: 'BUSUIOC, George (Mr) Consultant General',
        },
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit3: AuditEvent = {
  id: 'id3',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-07-01T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc:
    'Criteria "Observations - The patient has been weaned off oxygen and saturations are between 94% and 98% on air" has been added. Criteria status is "Not Met".',
  period: {
    start: {
      value: '2021-07-01T18:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-07-01T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit4: AuditEvent = {
  id: 'id4',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-03T14:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc:
    'Criteria "Other - Patient on level 0 thin fluids and level regular diet." has been added. Criteria status is "Not Met".',
  period: {
    start: {
      value: '2021-08-03T14:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-03T14:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit5: AuditEvent = {
  id: 'id5',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-03T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Status Changed',
  },
  outcomeDesc:
    'Criteria "Other - Patient on level 0 thin fluids and level regular diet." status has been changed from "Not Met" to "Met".',
  period: {
    start: {
      value: '2021-08-03T17:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-03T08:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit6: AuditEvent = {
  id: 'id6',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T10:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc: 'Criteria "Pain - Manageable" has been added.',
  period: {
    start: {
      value: '2021-08-05T10:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-05T10:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit7: AuditEvent = {
  id: 'id7',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T10:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc: 'Criteria "Observations - Stable" has been added.',
  period: {
    start: {
      value: '2021-08-05T10:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit8: AuditEvent = {
  id: 'id8',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T11:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Added',
  },
  outcomeDesc:
    'Criteria "Pain -  <p><strong>Bold text </strong></p><p><strong><em>Italic text</em></strong></p><p><strong><em><u>Underline text</u></em></strong></p>" has been added.',
  period: {
    start: {
      value: '2021-08-05T11:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-05T11:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit9: AuditEvent = {
  id: 'id9',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T11:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Removed',
  },
  outcomeDesc: 'Criteria "Observations - Stable" has been removed.',
  period: {
    start: {
      value: '2021-08-05T11:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-05T11:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit10: AuditEvent = {
  id: 'id10',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Removed',
  },
  outcomeDesc: 'Criteria "Pain - <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>" has been removed.',
  period: {
    start: {
      value: '2021-08-05T13:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit11: AuditEvent = {
  id: 'id11',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Criteria Removed',
  },
  outcomeDesc: 'Criteria "Pain - <p>Test</p>" has been removed.',
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T14:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit12: AuditEvent = {
  id: 'id12',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Pathway Ended',
  },
  outcomeDesc: 'Patient being readied for discharge',
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T14:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const Audit13: AuditEvent = {
  id: 'id13',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: {
    div: '',
    text: 'Pathway Ended',
  },
  outcomeDesc: 'Patient being readied for discharge',
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T17:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-09-13T17:04:14.0716494+00:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
        },
      ],
      requestor: true,
      who: {
        display: 'DYSON, Jonny (Dr) Transplant Surgeon',
        typeName: '',
      },
    },
  ],
}

const RedactedAuditOne: AuditEvent = {
  id: 'idr1',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: true,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: null,
  outcomeDesc: null,
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T14:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: null,
      requestor: true,
      who: null,
    },
  ],
}

const RedactedAuditTwo: AuditEvent = {
  id: 'idr2',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: true,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: null,
  outcomeDesc: null,
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T16:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: null,
      requestor: true,
      who: null,
    },
  ],
}

const RedactedAuditThree: AuditEvent = {
  id: 'idr3',
  isEnteredInError: false,
  metadata: {
    dataSources: [],
    isRedacted: true,
    requestedWhen: '2021-08-05T13:15:15+01:00',
  },
  source: {
    observer: {
      display: '',
      typeName: '',
    },
  },
  type: {
    display: '',
  },
  text: null,
  outcomeDesc: null,
  period: {
    start: {
      kind: PartialDateTimeKindCode.DateTime,
      value: '2021-09-13T16:04:14.0716494+00:00',
    },
  },
  recorded: {
    value: '2021-08-05T13:15:15+01:00',
  },
  agent: [
    {
      role: null,
      requestor: true,
      who: null,
    },
  ],
}

export const AuditTrail: AuditEventContinuation = {
  resources: [
    Audit13,
    Audit12,
    Audit11,
    Audit10,
    Audit9,
    Audit8,
    Audit7,
    Audit6,
    Audit5,
    Audit4,
    Audit3,
    Audit2,
    Audit1,
  ],
  selfCursorToken: '',
}

export const RedactedAuditTrail: AuditEventContinuation = {
  resources: [RedactedAuditOne, RedactedAuditTwo, RedactedAuditThree],
  selfCursorToken: '',
}

const mockMetadata: Metadata = {
  dataSources: [
    {
      display: 'Mock',
    },
  ],
  isRedacted: false,
  requestedWhen: '',
}

const QuestionnaireResponse1: QuestionnaireResponse = {
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
    title: 'Clinical Note (Created)',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

const QuestionnaireResponse2: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2893',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-17T16:13:56.9755581+01:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'Jonny Dyson',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710e',
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
    title: 'Clinical Note (Edited)',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

const QuestionnaireResponse3: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2894',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-20T13:13:56.9755581+01:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'Jonny Dyson',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710e',
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
    title: 'Clinical Note (Edited)',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

const QuestionnaireResponse4: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2897',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-21T13:13:56.9755581+01:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'Jonny Dyson',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710e',
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
    title: 'Clinical Note (Edited)',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

export const TextTitleResponse: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2897',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-21T13:13:56.9755581+01:00',
  },
  text: {
    div: '',
    text: 'Clinical Note (Created)',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'Jonny Dyson',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710e',
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
    title: 'Clinical Note',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

export const TitleResponse: QuestionnaireResponse = {
  id: '435d2aca-7776-43e7-a33f-1ba481bd2897',
  isEnteredInError: false,
  metadata: mockMetadata,
  status: QuestionnaireResponseStatus.Completed,
  authored: {
    kind: PartialDateTimeKindCode.DateTime,
    value: '2021-08-21T13:13:56.9755581+01:00',
  },
  author: {
    typeName: 'EhrUser',
    identifier: {
      system: 'http://leedsth.nhs.uk/user/guid',
      value: 'cfe6a9d7-f23d-4bb9-a28d-8a3895bee48a',
    },
    display: 'Jonny Dyson',
  },
  questionnaire: {
    id: '14720227-b1f7-4cc5-a0d0-403938cf710e',
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
    title: 'Clinical Note',
    description: 'Submission 1',
    status: QuestionnairePublicationStatus.Active,
    item: [],
  },
  item: [],
}

const QuestionnaireResponses: QuestionnaireResponseContinuation = {
  resources: [QuestionnaireResponse1, QuestionnaireResponse2, QuestionnaireResponse3, QuestionnaireResponse4],
  selfCursorToken: '',
}

export default QuestionnaireResponses

const DocumentReference6: DocumentReference = {
  id: 'c00dd3a5-e78a-4760-baa4-2f57edef4df8',
  created: {
    value: '2022-07-06T11:40:28.023+00:00',
  },
  description: 'Submission 1',
  text: {
    text: 'Clinical Note (Active)',
    div: '',
  },
  author: [
    {
      fullName: 'Jonny Dyson',
      display: 'Jonny Dyson (Oncologist)',
      specialty: 'Oncologist',
      username: 'dysonj',
      typeName: 'Practicioner',
    },
  ],
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '618a16a5-a2ee-498f-8f80-5046e934871c',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'c00dd3a5-e78a-4760-baa4-2f57edef4df8',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

const DocumentReference5: DocumentReference = {
  id: '8db4c96d-a443-46eb-a165-c5f28f87a0b6',
  created: {
    value: '2022-06-22T09:27:57.407+00:00',
  },
  description: 'Clinical Note (Active)',
  text: {
    text: 'Clinical Note (Active)',
    div: '',
  },
  author: [
    {
      fullName: 'Jonny Dyson',
      display: 'Jonny Dyson (Oncologist)',
      specialty: 'Oncologist',
      username: 'dysonj',
      typeName: 'Practicioner',
    },
    {
      fullName: 'Jonny Dyson 2',
      display: 'Jonny Dyson 2 (Oncologist 2)',
      specialty: 'Oncologist 2',
      username: 'dysonj2',
      typeName: 'Practicioner 2',
    },
  ],
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'ccff6894-20eb-4c57-8e79-e837498e43b3',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '8db4c96d-a443-46eb-a165-c5f28f87a0b6',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

const DocumentReference4: DocumentReference = {
  id: '46263f65-d5bd-4197-89b0-f2e3c0b33665',
  created: {
    value: '2022-01-07T12:01:21.853+00:00',
  },
  description: 'Clinical Note (Deleted)',
  text: {
    text: 'Clinical Note (Deleted)',
    div: '',
  },
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '941eda8f-2dbf-4a50-a0bb-d5776d1b814f',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '46263f65-d5bd-4197-89b0-f2e3c0b33665',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

const DocumentReference3: DocumentReference = {
  id: 'bdfe6034-bb1b-4a02-9b03-fbdd8db2147a',
  created: {
    value: '2021-12-16T10:58:14.03+00:00',
  },
  description: 'Clinical Note (Deleted)',
  text: {
    text: 'Clinical Note (Deleted)',
    div: '',
  },
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '6cde4dff-09f2-4f15-9477-f6b42c2adbe3',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'bdfe6034-bb1b-4a02-9b03-fbdd8db2147a',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

const DocumentReference2: DocumentReference = {
  id: '8d4119a4-91c3-4e97-93cc-3c7ada7a4a5d',
  created: {
    value: '2021-12-15T14:20:20.55+00:00',
  },
  description: 'Clinical Note (Deleted)',
  text: {
    text: 'Clinical Note (Deleted)',
    div: '',
  },
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'a56e3062-714c-404d-9042-79a12d90b192',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '8d4119a4-91c3-4e97-93cc-3c7ada7a4a5d',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

const DocumentReference1: DocumentReference = {
  id: 'dc560990-e2bb-4aef-a1ab-9c1402ca75ce',
  created: {
    value: '2021-11-04T10:44:24.143+00:00',
  },
  description: 'Clinical Note (Deleted)',
  text: {
    text: 'Clinical Note (Deleted)',
    div: '',
  },
  identifier: [
    {
      system: 'EventTypeName',
      value: 'CdsRootActivated',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'clinical-note',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: '52c4d808-8984-43fe-b820-b2cfaaedaa46',
    },
    {
      system: 'https://leedsth.nhs.uk/cds/template-name',
      value: 'dc560990-e2bb-4aef-a1ab-9c1402ca75ce',
    },
  ],
  metadata: {
    extension: undefined,
    versionId: undefined,
    requestedWhen: '',
    lastUpdated: undefined,
    dataSources: [],
    security: undefined,
    isRedacted: false,
    tag: undefined,
  },
  status: DocumentReferenceStatusCode.Current,
  type: {
    extension: undefined,
    coding: undefined,
    text: undefined,
  },
  indexed: {
    value: undefined,
    kind: undefined,
  },
  content: [],
}

export const DocumentReferences: DocumentReferenceContinuation = {
  resources: [
    DocumentReference6,
    DocumentReference5,
    DocumentReference4,
    DocumentReference3,
    DocumentReference2,
    DocumentReference1,
  ],
  selfCursorToken: '',
}
