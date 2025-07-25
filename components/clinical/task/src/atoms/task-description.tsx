import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe } from '@ltht-react/types'

const StyledDescription = styled.div<IStyledDescription>`
  text-decoration: ${({ cancelled }) => (cancelled ? 'line-through' : 'none')};
`

const Description: FC<IProps> = ({ description, hoverText, cancelled }) => {
  if (description) {
    return (
      <StyledDescription cancelled={cancelled} title={hoverText ?? description}>
        {description}
      </StyledDescription>
    )
  }

  return null
}

interface IProps {
  description?: Maybe<string>
  hoverText?: string
  cancelled: boolean
}

interface IStyledDescription {
  cancelled: boolean
}

export default Description
