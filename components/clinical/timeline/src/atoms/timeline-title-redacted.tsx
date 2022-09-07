import { FC } from 'react'
import { TEXT_COLOURS } from '@ltht-react/styles'
import styled from '@emotion/styled'

const StyledRedactedMessage = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const TimelineTitleRedacted: FC = () => <StyledRedactedMessage>Insufficient Privileges</StyledRedactedMessage>

export default TimelineTitleRedacted
