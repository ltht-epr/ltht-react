import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { RedactedDescription } from '@ltht-react/summary'

const StyledRedactedDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const GuidanceRedacted: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => (
  <StyledRedactedDescription {...rest}>
    <RedactedDescription />
  </StyledRedactedDescription>
)

export default GuidanceRedacted
