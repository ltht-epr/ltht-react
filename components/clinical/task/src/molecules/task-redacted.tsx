import { FC } from 'react'
import styled from '@emotion/styled'
import { RedactedDescription } from '@ltht-react/summary'

const StyledRedacted = styled.div`
  display: flex;
`

const StyledRedactedDescription = styled(RedactedDescription)`
  flex: 1;
`

const DueDate = styled.div`
  font-style: italic;
`

const Redacted: FC = () => (
  <StyledRedacted>
    <StyledRedactedDescription>Insufficient Priveleges</StyledRedactedDescription>
    <DueDate>---Date---</DueDate>
  </StyledRedacted>
)

export default Redacted
