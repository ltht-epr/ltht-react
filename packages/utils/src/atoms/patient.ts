import { Patient, HumanNameUseCode, AddressUseCode, NhsNumberStatus, PatientIdentifierType } from '@ltht-react/types'
import { titleCase } from './title-case'

const daysInMonth = (iMonth: number, iYear: number): number => {
  return 32 - new Date(iYear, iMonth, 32).getDate()
}

const formatPatientAddress = (patient: Patient): string => {
  let address
  if (patient.address && patient.address.length > 0) {
    address = patient.address.find(x => x?.use === AddressUseCode.Home && (!x?.period || !x.period?.end))
  }

  return address?.text ?? ''
}

const formatPatientAge = (patient: Patient): string => {
  const start = patient.birthDate?.value ? new Date(patient.birthDate.value) : null
  let end = null

  // ToDO birth/death date Partial date time check
  if (patient.deceased?.deceasedBoolean) {
    end = patient.deceased.deceasedDateTime?.value ? new Date(patient.deceased.deceasedDateTime.value) : null
  } else {
    end = new Date()
  }

  if (start === null || end === null) return ''

  // Calculate calendar age. This is complex because years and months are not constant lengths.
  const yearEnd = end.getFullYear()
  const monthEnd = end.getMonth()
  const dateEnd = end.getDate()
  let yearAge = yearEnd - start.getFullYear()
  let monthAge = monthEnd - start.getMonth()
  let dateAge = dateEnd - start.getDate()

  if (dateAge < 0) {
    monthAge -= 1
    dateAge += daysInMonth(yearEnd, monthEnd - 1)
  }

  if (monthAge < 0) {
    yearAge -= 1
    monthAge += 12
  }

  // Adults (over 18 years): **years**.
  if (yearAge >= 18) return `${yearAge}y`

  // Children over two years: **years and months**.
  if (yearAge >= 2) return `${yearAge}y${monthAge ? ` ${monthAge}m` : ''}`

  // Children 12 to 24 months: **months and days**.
  if (yearAge === 1) {
    return `${12 + monthAge}m${dateAge ? ` ${dateAge}d` : ''}`
  }

  // Calculate age measured in simple units.
  const age = end.getTime() - start.getTime()
  const hourAge = Math.floor(age / (1000 * 60 * 60))
  let dayAge = Math.floor(hourAge / 24)
  const weekAge = Math.floor(dayAge / 7)

  // Children four weeks to one year: **weeks and days**.
  if (weekAge >= 4) {
    dayAge -= weekAge * 7
    return `${weekAge}w${dayAge ? ` ${dayAge}d` : ''}`
  }

  // Children two days to four weeks: **days**.
  if (dayAge >= 2) return `${dayAge}d`

  // Children two to 24 hours: **hours**.
  if (hourAge >= 2) return `${hourAge}hrs`

  // Children under two hours: **minutes**.
  return `${Math.floor(age / (1000 * 60))}min`
}

const formatPatientName = (patient: Patient): string => {
  let activeName = patient?.name?.find(x => (!x?.period || !x?.period?.end) && x?.use === HumanNameUseCode.Official)
  if (!activeName) {
    activeName = patient?.name?.find(x => (!x?.period || !x?.period?.end) && x?.use === HumanNameUseCode.Usual)
  }

  let patientName
  const family = activeName?.family
  const title = activeName?.prefix && activeName.prefix.length > 0 ? activeName.prefix[0] : ''
  const given = activeName?.given?.join(' ')

  if (!given) {
    patientName = family ? family.toUpperCase() : ''
  } else {
    patientName = (family ? `${family.toUpperCase()}, ` : '') + titleCase(given)
  }

  // Add title in brackets if specified.
  if (title) {
    patientName += ` (${titleCase(title)})`
  }

  return patientName
}

const formatNHSNumber = (patient: Patient): string => {
  const value = patient?.identifier?.find(x => x?.system === PatientIdentifierType.NhsNumber)?.value

  if (!value || value.length === 0) {
    return ''
  }

  if (value.length === 10) {
    return `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 10)}`
  }

  return value
}

const nhsNumberStatus = (patient: Patient): NhsNumberStatus => {
  const nhsNo = patient?.identifier?.find(x => x?.system === PatientIdentifierType.NhsNumber)

  if (
    nhsNo?.extension &&
    nhsNo.extension.length > 0 &&
    nhsNo.extension[0]?.valueCodeableConcept?.coding &&
    nhsNo.extension[0].valueCodeableConcept.coding.length > 0
  ) {
    const verifiedCode = nhsNo.extension[0].valueCodeableConcept.coding[0]?.code
    if (verifiedCode === '01') return NhsNumberStatus.Verified
    if (verifiedCode === '02') return NhsNumberStatus.NotVerified
  }

  return NhsNumberStatus.Unknown
}

export { formatPatientAddress, formatPatientAge, formatPatientName, formatNHSNumber, nhsNumberStatus }
