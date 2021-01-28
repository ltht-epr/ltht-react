import React from 'react'
import styled from '@emotion/styled'
import { Patient } from '@ltht-react/types'
import { TABLET_MEDIA_QUERY } from '@ltht-react/styles'

import Address from '../atoms/address'
import PasNumber from '../atoms/pas-number'

const StyledSecondaryInformation = styled.div`
  display: none;

  ${TABLET_MEDIA_QUERY} {
    background-color: white;
    display: block;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`

const SecondaryInformation: React.FC<Props> = ({ patient }) => (
  <StyledSecondaryInformation>
    <Address patient={patient} />
    <PasNumber patient={patient} />
  </StyledSecondaryInformation>
)

interface Props {
  patient: Patient | undefined
}

export default SecondaryInformation
