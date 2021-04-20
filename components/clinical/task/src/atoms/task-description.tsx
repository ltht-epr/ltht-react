import { FC } from 'react'
import styled from '@emotion/styled'
import { Maybe } from '@ltht-react/types'

const StyledDescription = styled.div`
  flex: 1;
`

const Description: FC<IProps> = ({ description }) => {
  if (description) return <StyledDescription>{description}</StyledDescription>

  return null
}

interface IProps {
  description?: Maybe<string>
}

export default Description
