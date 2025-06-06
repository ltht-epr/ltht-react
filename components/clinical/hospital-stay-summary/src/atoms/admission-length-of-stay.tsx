import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { formatDistance } from 'date-fns'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { Encounter } from '@ltht-react/types'

const StyledLengthOfStayText = styled.div`
  color: ${TEXT_COLOURS.INFO};
  width: fit-content;
  font-size: 0.9em;
  margin-top: 5px;
  text-align: left;
`

const AdmissionLengthOfStay: FC<Props> = ({ encounter, ...rest }) => {
  if (encounter.length?.value) {
    const milliseconds = (encounter?.length?.value ?? 0) * 60000
    return <StyledLengthOfStayText {...rest}>Length of Stay: {formatDistance(milliseconds, 0)}</StyledLengthOfStayText>
  }

  return null
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  encounter: Encounter
}

export default AdmissionLengthOfStay
