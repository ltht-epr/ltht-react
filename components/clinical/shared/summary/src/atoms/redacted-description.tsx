import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'

const StyledRedactedDescription = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const RedactedDescription: FC<HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => (
  <StyledRedactedDescription {...rest}>Insufficient privileges</StyledRedactedDescription>
)

export default RedactedDescription
