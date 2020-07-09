import { Patient, HumanNameUseCode, AddressUseCode } from '@ltht-react/types'
import { titleCase } from './title-case'

const formatPatientAddress = (patient: Patient): string => {
  let address
  if (patient.address && patient.address.length > 0) {
    address = patient.address.find(x => x?.use === AddressUseCode.Home && (!x?.period || !x.period?.end))
  }

  return address?.text ?? ''
}

const formatPatientAge = (patient: Patient): string => {
  // ToDO format patient current age / age at death
  const date = patient.birthDate?.value
  return `${date?.substring(0, 0)}25y`
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

const formatNHSNumber = (value?: string | null | undefined): string => {
  if (!value || value.length === 0) {
    return ''
  }

  if (value.length === 10) {
    return `${value.substring(0, 3)} ${value.substring(3, 6)} ${value.substring(6, 10)}`
  }

  return value
}

export { formatPatientAddress, formatPatientAge, formatPatientName, formatNHSNumber }
