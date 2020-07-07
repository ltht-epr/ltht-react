import { Patient } from '@ltht-react/types'
import { titleCase } from './title-case'

const formatPatientAge = (patient: Patient): string => {
  // ToDO formate patient current age / age at death
  const dob = patient?.birthDate?.value
  return `25y${dob}`
}

const formatPatientName = (patient: Patient): string => {
  // ToDo re-factor - extracting patient name
  let name
  const family = patient?.name?.[0]?.family
  const title = patient?.name?.[0]?.prefix?.[0]
  const given = patient?.name?.[0]?.given?.join(' ')

  if (!given) {
    name = family ? family.toUpperCase() : ''
  } else {
    name = (family ? `${family.toUpperCase()}, ` : '') + titleCase(given)
  }

  // Add title in brackets if specified.
  if (title) {
    name += ` (${titleCase(title)})`
  }

  return name
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

export { formatPatientAge, formatPatientName, formatNHSNumber }
