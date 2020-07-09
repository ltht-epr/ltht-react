/** @jsx jsx */
import React from 'react'
import { css, jsx, SerializedStyles } from '@emotion/core'
import { Patient } from '@ltht-react/types'

import PrimaryInformation from './molecules/primary-info'
import SecondaryInformation from './molecules/secondary-info'

const styles = (deceased: boolean): SerializedStyles => {
  return css`
    font-family: 'Arial';
    border: ${deceased ? '0.1rem dashed #f5f7f8' : '0.1rem solid #56008c'};

    & > div {
      background-color: ${deceased ? '#231f20' : '#56008c'};
    }
  `
}

const PatientBanner: React.FC<Props> = ({ patient }) => {
  const deceased = patient.deceased?.deceasedBoolean ?? false

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
  patient: Patient
}

export default PatientBanner
