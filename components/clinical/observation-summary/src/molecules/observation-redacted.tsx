import React from 'react'
import styled from '@emotion/styled'

import { RedactedDescription } from '@ltht-react/summary'

const StyledDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const ObservationRedacted: React.FC = () => (
  <StyledDescription>
    <RedactedDescription />
  </StyledDescription>
)

export default ObservationRedacted
