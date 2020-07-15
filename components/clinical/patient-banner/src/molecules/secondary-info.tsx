/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { Patient } from '@ltht-react/types'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

import Address from '../atoms/address'
import PasNumber from '../atoms/pas-number'

const styles = css`
  visibility: hidden;
  height: 0;

  ${TABLET_MEDIA_QUERY} {
    background-color: #fff;
    height: auto;
    visibility: visible;
    padding: 0.5rem;
    display: flex;

    & > div {
      display: flex;
    }

    & > div:first-of-type {
      margin-left: 0;
      margin-right: auto;
    }
  }
`

const SecondaryInformation: React.FC<Props> = ({ patient }) => {
  return (
    <div css={styles}>
      <div>
        <Address patient={patient} />
      </div>
      <div>
        <PasNumber patient={patient} />
      </div>
    </div>
  )
}

interface Props {
  patient: Patient
}

export default SecondaryInformation
