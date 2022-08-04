import { AuditEventContinuation, AuditEvent, PartialDateTimeKindCode } from '@ltht-react/types'

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

const AuditTrail: AuditEventContinuation = {
  resources: [Audit12, Audit11, Audit10, Audit9, Audit8, Audit7, Audit6, Audit5, Audit4, Audit3, Audit2, Audit1],
  selfCursorToken: '',
}

export const RedactedAuditTrail: AuditEventContinuation = {
  resources: [RedactedAuditOne, RedactedAuditTwo, RedactedAuditThree],
  selfCursorToken: '',
}

export default AuditTrail
