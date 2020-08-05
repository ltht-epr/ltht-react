/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Patient } from '@ltht-react/types'
import { CSS_RESET } from '@ltht-react/styles'

import PrimaryInformation from './molecules/primary-info'
import SecondaryInformation from './molecules/secondary-info'

const styles = (deceased: boolean): SerializedStyles => {
  return css`
    ${CSS_RESET}  
    border: ${deceased ? '0.1rem dashed #231f20' : '0.1rem solid #56008c'};
    background-color: #fff;

    & > div {
      border: none;
    }
  `
}

const PatientBanner: React.FC<Props> = ({ patient }) => {
  const deceased = patient?.deceased?.deceasedBoolean ?? false

  return (
    <div css={styles(deceased)}>
      <div>
        <PrimaryInformation patient={patient} />
        <SecondaryInformation patient={patient} />
      </div>
    </div>
  )
}

interface Props {
  patient: Patient | undefined
}

export default PatientBanner
