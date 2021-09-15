import { AuditEventContinuation, AuditEvent } from '@ltht-react/types'

const Audit1: AuditEvent = {
  id: 'id1',
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-01T13:15:15+01:00',
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
    text: 'Timeline Entry 1',
  },
  period: {
    start: {
      value: '2021-08-01T06:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-01T13:15:15+01:00',
  },
  agent: [
    {
      role: [
        {
          coding: [
            {
              code: 'PRIMAUTH2',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
          text: 'Jonny Dyson',
        },
      ],
      requestor: true,
    },
  ],
}

const Audit2: AuditEvent = {
  id: 'id2',
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-01T14:15:15+01:00',
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
    text: 'Timeline Entry 2',
  },
  period: {
    start: {
      value: '2021-08-01T14:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-01T14:15:15+01:00',
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
          text: 'George Busuioc',
        },
        {
          coding: [
            {
              code: 'PRIMAUTH',
              display: 'User name',
              system: 'http://hl7.org/fhir/ValueSet/security-role-type',
            },
          ],
          text: 'Jonny Dyson',
        },
      ],
      requestor: true,
    },
  ],
}

const Audit3: AuditEvent = {
  id: 'id1',
  metadata: {
    dataSources: [],
    isRedacted: false,
    requestedWhen: '2021-08-01T13:15:15+01:00',
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
    text: 'Timeline Entry 3',
  },
  period: {
    start: {
      value: '2021-08-01T18:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-01T13:15:15+01:00',
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
          text: 'Jonny Dyson',
        },
      ],
      requestor: true,
    },
  ],
}

const Audit4: AuditEvent = {
  id: 'id3',
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
    text: 'Timeline Entry 4',
  },
  period: {
    start: {
      value: '2021-08-03T14:15:15+01:00',
    },
  },
  recorded: {
    value: '2021-08-03T14:15:15+01:00',
  },
  agent: [],
}

const Audit5: AuditEvent = {
  id: 'id6',
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
    text: 'Timeline Entry 5',
  },
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
          text: 'George Busuioc',
        },
      ],
      requestor: true,
    },
  ],
}

const Audit6: AuditEvent = {
  id: 'id1',
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
    text: 'Timeline Entry 6',
  },
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
          text: 'George Busuioc',
        },
      ],
      requestor: true,
    },
  ],
}

const Audit7: AuditEvent = {
  id: 'id1',
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
    text: 'Timeline Entry 7',
  },
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
          text: 'George Busuioc',
        },
      ],
      requestor: true,
    },
  ],
}

const AuditTrail: AuditEventContinuation = {
  resources: [Audit1, Audit2, Audit3, Audit4, Audit5, Audit6, Audit7],
  selfCursorToken: '',
}

export default AuditTrail
