import { FC } from 'react'
import styled from '@emotion/styled'

import { RedactedDescription } from '@ltht-react/type-summary'

const StyledDescription = styled.div`
  flex-grow: 1;
  text-align: left;
`

const ObservationRedacted: FC = () => (
  <StyledDescription>
    <RedactedDescription />
  </StyledDescription>
)

export default ObservationRedacted
