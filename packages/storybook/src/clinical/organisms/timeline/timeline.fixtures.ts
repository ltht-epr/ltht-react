import { AuditEventContinuation, AuditEvent } from '@ltht-react/types'

const Audit1: AuditEvent = {
  id: 'id1',
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
          text: 'DYSON, Jonny (Dr) Transplant Surgeon',
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
          text: 'DYSON, Jonny (Dr) Transplant Surgeon',
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
          text: 'DYSON, Jonny (Dr) Transplant Surgeon',
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
          text: 'DYSON, Jonny (Dr) Transplant Surgeon',
        },
      ],
      requestor: true,
    },
  ],
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
          text: 'BUSUIOC, George (Mr) Consultant General',
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
    text: 'Criteria Removed',
  },
  outcomeDesc: 'Criteria "Pain - Pain under control" has been removed.',
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
          text: 'BUSUIOC, George (Mr) Consultant General',
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
    text: 'Pathway Ended',
  },
  outcomeDesc: 'Patient being readied for discharge',
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
          text: 'BUSUIOC, George (Mr) Consultant General',
        },
      ],
      requestor: true,
    },
  ],
}

const AuditTrail: AuditEvent[] = [Audit7, Audit6, Audit5, Audit4, Audit3, Audit2, Audit1]

export default AuditTrail
