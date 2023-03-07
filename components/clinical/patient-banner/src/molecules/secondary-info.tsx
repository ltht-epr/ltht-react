import { FC } from 'react'
import styled from '@emotion/styled'
import { Group, Patient } from '@ltht-react/types'
import { TABLET_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'

import Address from '../atoms/address'
import PasNumber from '../atoms/pas-number'
import PedNumber from '../atoms/ped-number'

const StyledSecondaryInformation = styled.div`
  display: none;

  ${TABLET_MINIMUM_MEDIA_QUERY} {
    background-color: white;
    display: block;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`

const SecondaryInformation: FC<Props> = ({ patient, patientGroups }) => (
  <StyledSecondaryInformation>
    <Address patient={patient} />
    {patientGroups && <PedNumber patientGroups={patientGroups} />}
    <PasNumber patient={patient} />
  </StyledSecondaryInformation>
)

interface Props {
  patient: Patient | undefined
  patientGroups?: Group[]
}

export default SecondaryInformation
