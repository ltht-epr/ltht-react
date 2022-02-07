import { Story } from '@storybook/react'

import PatientBanner from '@ltht-react/patient-banner'
import {
  AlivePatient,
  DeceasedPatient,
  DeceasedPatientWithoutDate,
  DeceasedPatientWithoutBoolean,
} from './patient-banner.fixtures'

export const Alive: Story = () => <PatientBanner patient={AlivePatient} />
export const Deceased: Story = () => <PatientBanner patient={DeceasedPatient} />
export const DeceasedWithoutDate: Story = () => <PatientBanner patient={DeceasedPatientWithoutDate} />
export const DeceasedWithoutBoolean: Story = () => <PatientBanner patient={DeceasedPatientWithoutBoolean} />

export default { title: 'Clinical/Organisms/Patient Banner' }
