import { FC } from 'react'
import styled from '@emotion/styled'
import { RedactedDescription } from '@ltht-react/type-summary'

const StyledRedacted = styled.div`
  display: flex;
  align-items: center;
`

const StyledRedactedDescription = styled(RedactedDescription)`
  flex: 1;
`

const Redacted: FC = () => (
  <StyledRedacted>
    <StyledRedactedDescription>Insufficient Priveleges</StyledRedactedDescription>
  </StyledRedacted>
)

export default Redacted
