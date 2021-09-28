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
  id: 'id1',
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
  id: 'id1',
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
  id: 'id1',
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
  outcomeDesc: 'Criteria "Pain - Negligble" has been added.',
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
  id: 'id1',
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
  outcomeDesc: 'Criteria "Pain - Manageable" has been removed.',
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

const Audit12: AuditEvent = {
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

const AuditTrail: AuditEventContinuation = {
  resources: [Audit12, Audit11, Audit10, Audit9, Audit8, Audit7, Audit6, Audit5, Audit4, Audit3, Audit2, Audit1],
  selfCursorToken: '',
}

export default AuditTrail
