import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe } from '@ltht-react/types'

const StyledDescription = styled.div<IStyledDescription>`
  text-decoration: ${({ cancelled }) => (cancelled ? 'line-through' : 'none')};
`

const Description: FC<IProps> = ({ description, cancelled }) => {
  if (description) {
    return <StyledDescription cancelled={cancelled}>{description}</StyledDescription>
  }

  return null
}

interface IProps {
  description?: Maybe<string>
  cancelled: boolean
}

interface IStyledDescription {
  cancelled: boolean
}

export default Description
