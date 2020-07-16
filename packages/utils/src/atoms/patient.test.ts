import {
  Patient,
  PatientIdentifierType,
  NhsNumberStatus,
  AddressUseCode,
  PartialDateTimeKindCode,
} from '@ltht-react/types'
import { formatNHSNumber, formatPatientAddress, formatPatientAge, formatPatientName, nhsNumberStatus } from './patient'

let patient: Patient

const initializePatient = (): void => {
  patient = {
    id: 'test:patient',
    metadata: {
      dataSources: [],
      isRedacted: true,
      requestedWhen: '',
    },
    name: [],
  }
}

beforeEach(() => {
  initializePatient()
})

describe('formatNhsNumber', () => {
  it('returns empty string when patient does not have one', () => {
    expect(formatNHSNumber(patient)).toEqual('')
  })

  it('returns empty string when patient has an unofficial nhs number', () => {
    patient.identifier = [
      {
        system: 'unofficial:system',
        value: '9876-246',
      },
    ]
    expect(formatNHSNumber(patient)).toEqual('')
  })

  it('returns formatted nhs number when patient has a official nhs number', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.NhsNumber,
        value: '9876543210',
      },
    ]
    expect(formatNHSNumber(patient)).toEqual('987 654 3210')
  })

  it('returns formatted nhs number when patient has both official and unofficial nhs number', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.NhsNumber,
        value: '9876543210',
      },
      {
        system: 'unofficial:system',
        value: '9876-246',
      },
    ]
    expect(formatNHSNumber(patient)).toEqual('987 654 3210')
  })

  it('returns non-formatted nhs number when patient has a official nhs number with greater than 10 chars', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.NhsNumber,
        value: '98765432109',
      },
    ]
    expect(formatNHSNumber(patient)).toEqual('98765432109')
  })

  it('returns non-formatted nhs number when patient has a official nhs number with less than 10 chars', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.NhsNumber,
        value: '98765432',
      },
    ]
    expect(formatNHSNumber(patient)).toEqual('98765432')
  })
})

describe('formatPatientAddress', () => {
  it('returns empty string when Address is not specified', () => {
    patient.address = null
    expect(formatPatientAddress(patient)).toEqual('')
  })

  it('returns empty string when Address collection is empty', () => {
    patient.address = []
    expect(formatPatientAddress(patient)).toEqual('')
  })

  it('returns empty string when no home address is present', () => {
    patient.address = [{ use: AddressUseCode.Work, text: 'some work address' }]
    expect(formatPatientAddress(patient)).toEqual('')
  })

  it('returns empty string when no active home address is present', () => {
    patient.address = [{ use: AddressUseCode.Home, text: 'old home address', period: { end: { value: '2020-02-03' } } }]
    expect(formatPatientAddress(patient)).toEqual('')
  })

  it('returns Address when active home address is present', () => {
    patient.address = [{ use: AddressUseCode.Home, text: 'home address', period: {} }]
    expect(formatPatientAddress(patient)).toEqual('home address')
  })
})

describe('formatPatientAge', () => {
  it('returns empty string when birth date is not specified', () => {
    expect(formatPatientAge(patient)).toEqual('')
  })

  it('returns formatted age when birth date is specified (over 18)', () => {
    let date = new Date()
    let currentYear = date.getFullYear()
    date.setFullYear(currentYear - 21)

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('21y')
  })

  it('returns formatted age when birth date is specified (under 18 and over 2)', () => {
    let date = new Date()
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    date.setFullYear(currentYear - 15)
    date.setMonth(0) // set to jan

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual(`15y ${currentMonth}m`)
  })

  it('returns formatted age when birth date is specified (under 2 and over 1)', () => {
    let date = new Date()
    let currentYear = date.getFullYear()
    let currentDate = date.getDate()
    date.setFullYear(currentYear - 1)
    date.setDate(0) // set to last day of previous month

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual(`12m ${currentDate + 1}d`)
  })
})

describe('formatPatientName', () => {
  it('returns empty string when name collection is empty', () => {
    expect(formatPatientName(patient)).toEqual('')
  })
})

describe('nhsNumberStatus', () => {
  it('returns Unknown status when identifier is null', () => {
    patient.identifier = null
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when identifier is empty', () => {
    patient.identifier = []
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when identifier system is not Nhs Number', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.PasNumber,
        value: '0123456',
      },
    ]
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Unknown status when there is no verification code', () => {
    patient.identifier = [
      {
        system: PatientIdentifierType.NhsNumber,
        value: '9876543210',
      },
    ]
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })

  it('returns Not Verified status when verification code is set to 02', () => {
    patient.identifier = [
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
    ]
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.NotVerified)
  })

  it('returns Verified status when verification code is set to 01', () => {
    patient.identifier = [
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
    ]
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Verified)
  })

  it('returns Unknown status when verification code is set to values other that 01 or 02', () => {
    patient.identifier = [
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
                  code: '03',
                  display: 'Trace Required',
                },
              ],
            },
          },
        ],
      },
    ]
    expect(nhsNumberStatus(patient)).toEqual(NhsNumberStatus.Unknown)
  })
})
