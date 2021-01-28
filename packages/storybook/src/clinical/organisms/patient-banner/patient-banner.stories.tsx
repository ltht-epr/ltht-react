import React from 'react'
import { Story } from '@storybook/react'

import PatientBanner from '@ltht-react/patient-banner'
import { AlivePatient, DeceasedPatient } from './patient-banner.fixtures'

export const Alive: Story = () => <PatientBanner patient={AlivePatient} />
export const Deceased: Story = () => <PatientBanner patient={DeceasedPatient} />

export default { title: 'Clinical/Organisms/Patient Banner' }
