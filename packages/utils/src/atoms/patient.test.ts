import {
  Patient,
  PatientIdentifierType,
  NhsNumberStatus,
  AddressUseCode,
  PartialDateTimeKindCode,
  HumanNameUseCode,
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
    const date = new Date()
    const currentYear = date.getFullYear()
    date.setFullYear(currentYear - 21)

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('21y')
  })

  it('returns formatted age when birth date is specified (under 18 and over 2)', () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth()
    date.setFullYear(currentYear - 15) // set to 15 years ago
    date.setMonth(0) // set to jan

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual(`15y ${currentMonth}m`)
  })

  it('returns formatted age when birth date is specified (under 2 and over 1)', () => {
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentDate = date.getDate()
    date.setFullYear(currentYear - 1) // set to 1 year ago
    date.setDate(1) // set to first day of current month

    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual(`12m ${currentDate - 1}d`)
  })

  it('returns formatted age when birth date is specified (under 1 and over 4 weeks)', () => {
    const date = new Date()
    const currentDate = date.getDate()
    date.setDate(currentDate - 36) // set to 5 weeks and 1 day ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('5w 1d')
  })

  it('returns formatted age when birth date is specified (under 4 weeks and over 2 days)', () => {
    const date = new Date()
    const currentDate = date.getDate()
    date.setDate(currentDate - 14) // set to two weeks ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('14d')
  })

  it('returns formatted age when birth date is specified (under 4 weeks and over 2 days)', () => {
    const date = new Date()
    const currentDate = date.getDate()
    date.setDate(currentDate - 14) // set to two weeks ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('14d')
  })

  it('returns formatted age when birth date is specified (under 2 days and over 2 hours)', () => {
    const date = new Date()
    const currentHour = date.getHours()
    date.setHours(currentHour - 5) // set to 5 hours ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('5hrs')
  })

  it('returns formatted age when birth date is specified (under 2 hours)', () => {
    const date = new Date()
    const currentHour = date.getHours()
    date.setHours(currentHour - 1) // set 1 hour ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: date.toISOString(),
    }
    expect(formatPatientAge(patient)).toEqual('60min')
  })

  it('returns empty string when patient is deceased and birth date is not specified', () => {
    const date = new Date()
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: date.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('')
  })

  it('returns formatted age when patient is deceased', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setFullYear(dod.getFullYear() - 45) // dob set to 45 years ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('45y')
  })

  it('returns formatted age when patient is deceased (under 18 and over 2)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setFullYear(dod.getFullYear() - 15) // dob set to 15 years ago
    dob.setMonth(0) // set to jan
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual(`15y ${dod.getMonth()}m`)
  })

  it('returns formatted age when patient is deceased (under 2 and over 1)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setFullYear(dod.getFullYear() - 1) // dob set to 1 year ago
    dob.setDate(1) // set to first day of current month
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual(`12m ${dod.getDate() - 1}d`)
  })

  it('returns formatted age when patient is deceased (under 1 and over 4 weeks)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setDate(dod.getDate() - 44) // set to 6 weeks and 2 days ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('6w 2d')
  })

  it('returns formatted age when patient is deceased (under 4 weeks and over 2 days)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setDate(dod.getDate() - 17) // set to 17 days ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('17d')
  })

  it('returns formatted age when patient is deceased (under 2 days and over 2 hours)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setHours(dod.getHours() - 27) // set to 27 hours ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('27hrs')
  })

  it('returns formatted age when patient is deceased (under 2 hours)', () => {
    const dod = new Date()
    const dob = new Date()
    dob.setMinutes(dod.getMinutes() - 95) // set to 95 min ago
    patient.birthDate = {
      kind: PartialDateTimeKindCode.Date,
      value: dob.toISOString(),
    }
    patient.deceased = {
      deceasedBoolean: true,
      deceasedDateTime: {
        kind: PartialDateTimeKindCode.Date,
        value: dod.toISOString(),
      },
    }
    expect(formatPatientAge(patient)).toEqual('95min')
  })
})

describe('formatPatientName', () => {
  it('returns empty string when name collection is empty', () => {
    expect(formatPatientName(patient)).toEqual('')
  })

  it('returns empty string when patient has no active name', () => {
    patient.name.push({
      period: {
        end: {
          kind: PartialDateTimeKindCode.Date,
          value: '2020-02-03T13:15:16+00:00',
        },
      },
    })
    expect(formatPatientName(patient)).toEqual('')
  })

  it('returns formatted string when patient has an active name but use not specified', () => {
    patient.name.push({ family: 'test', period: null, use: null })
    expect(formatPatientName(patient)).toEqual('TEST')
  })

  it('returns formatted name when patient has active official & usual 7 unspecified use name', () => {
    patient.name.push({ use: HumanNameUseCode.Usual, family: 'test-usual' })
    patient.name.push({ use: HumanNameUseCode.Official, family: 'test-official' })
    patient.name.push({ use: HumanNameUseCode.Official, family: 'test' })
    expect(formatPatientName(patient)).toEqual('TEST-OFFICIAL')
  })

  it('returns formatted name when patient only has active usual name', () => {
    patient.name.push({ use: HumanNameUseCode.Usual, family: 'usual', given: ['test'] })
    expect(formatPatientName(patient)).toEqual('USUAL, Test')
  })

  it('returns formatted name when patient has active official name', () => {
    patient.name.push({
      use: HumanNameUseCode.Official,
      family: 'official',
      given: ['test', 'me'],
      prefix: ['mr'],
    })
    expect(formatPatientName(patient)).toEqual('OFFICIAL, Test Me (Mr)')
  })

  it('returns formatted name when patient has active official name', () => {
    patient.name.push({
      use: HumanNameUseCode.Official,
      given: ['test', 'me'],
    })
    expect(formatPatientName(patient)).toEqual('Test Me')
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
