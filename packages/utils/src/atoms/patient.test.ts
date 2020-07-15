import { Patient, Metadata, PatientIdentifierType, NhsNumberStatus } from '@ltht-react/types'
import { formatNHSNumber, formatPatientName, nhsNumberStatus } from './patient'

const metadata: Metadata = {
  dataSources: [],
  isRedacted: true,
  requestedWhen: '',
}

describe('formatNhsNumber', () => {
  it('formats nhs number to empty string when patient does not have one', () => {
    const patient: Patient = {
      id: 'test:patient:1',
      metadata,
      name: [],
    }
    expect(formatNHSNumber(patient)).toEqual('')
  })

  it('formats nhs number to empty when patient has an unofficial nhs number', () => {
    const patient: Patient = {
      id: 'test:patient:2',
      metadata,
      name: [],
      identifier: [
        {
          system: 'unofficial:system',
          value: '9876-246',
        },
      ],
    }
    expect(formatNHSNumber(patient)).toEqual('')
  })

  it('formats nhs number correctly when patient has a official nhs number', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '9876543210',
        },
      ],
    }
    expect(formatNHSNumber(patient)).toEqual('987 654 3210')
  })

  it('formats nhs number correctly when patient has both official and unofficial nhs number', () => {
    const patient: Patient = {
      id: 'test:patient:4',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '9876543210',
        },
        {
          system: 'unofficial:system',
          value: '9876-246',
        },
      ],
    }
    expect(formatNHSNumber(patient)).toEqual('987 654 3210')
  })

  it('formats nhs number doesnot format when patient has a official nhs number with greater than 10 chars', () => {
    const patient: Patient = {
      id: 'test:patient:5',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '98765432109',
        },
      ],
    }
    expect(formatNHSNumber(patient)).toEqual('98765432109')
  })

  it('formats nhs number doesnot format when patient has a official nhs number with less than 10 chars', () => {
    const patient: Patient = {
      id: 'test:patient:6',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '98765432',
        },
      ],
    }
    expect(formatNHSNumber(patient)).toEqual('98765432')
  })
})

describe('formatPatientName', () => {
  it('returns empty string when name is not specified', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
    }
    expect(formatPatientName(patient)).toEqual('')
  })
})

describe('nhsNumberStatus', () => {
  it('returns Unknown status when identifier is null', () => {
    const patient: Patient = {
      id: 'test:patient:1',
      metadata,
      name: [],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when identifier is empty', () => {
    const patient: Patient = {
      id: 'test:patient:2',
      metadata,
      name: [],
      identifier: [],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when identifier system is not Nhs Number', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.PasNumber,
          value: '0123456',
        },
      ],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when there is no verification code', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '9876543210',
        },
      ],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Not Verified status when verification code is set to 02', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '9876543210',
          extension: [
            {
              url: 'test',
              valueString: 'test',
              valueCodeableConcept: {
                coding: [
                  {
                    code: '02',
                    display: 'Number present and not verified',
                  },
                ],
              },
            },
          ],
        },
      ],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.NotVerified)
  })

  it('returns Verified status when verification code is set to 01', () => {
    const patient: Patient = {
      id: 'test:patient:3',
      metadata,
      name: [],
      identifier: [
        {
          system: PatientIdentifierType.NhsNumber,
          value: '9876543210',
          extension: [
            {
              url: 'test',
              valueString: 'test',
              valueCodeableConcept: {
                coding: [
                  {
                    code: '01',
                    display: 'Number present and verified',
                  },
                ],
              },
            },
          ],
        },
      ],
    }
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Verified)
  })
})
