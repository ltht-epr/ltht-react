import { FC } from 'react'
import styled from '@emotion/styled'
import { Patient } from '@ltht-react/types'

import {
  CSS_RESET,
  PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR,
  PATIENT_BANNER_BACKGROUND_COLOUR,
} from '@ltht-react/styles'
import PrimaryInformation from './molecules/primary-info'
import SecondaryInformation from './molecules/secondary-info'

const StyledPatientBanner = styled.div<StyledPatientBannerProps>`
  ${CSS_RESET}
  border: ${({ deceased }): string =>
    deceased
      ? `2px dashed ${PATIENT_BANNER_DECEASED_BACKGROUND_COLOUR}`
      : `2px solid ${PATIENT_BANNER_BACKGROUND_COLOUR}`};
`

const PatientBanner: FC<Props> = ({ patient }) => {
  const date = patient?.deceased?.deceasedDateTime

  let deceased: boolean

  if (date == null) {
    deceased = patient?.deceased?.deceasedBoolean ?? false
  } else {
    deceased = true
  }

  return (
    <StyledPatientBanner deceased={deceased}>
      <PrimaryInformation patient={patient} deceased={deceased} />
      <SecondaryInformation patient={patient} />
    </StyledPatientBanner>
  )
}

interface StyledPatientBannerProps {
  deceased: boolean
}

interface Props {
  patient: Patient | undefined
}

export default PatientBanner
