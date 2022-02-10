import { FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Maybe, Scalars } from '@ltht-react/types'

const StyledTitleInfo = styled.div``

const Title = styled.h4`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const TitleInfo: FC<IProps> = ({ title }) => {
  if (!title) return null

  return <StyledTitleInfo>{title && <Title>{title}</Title>}</StyledTitleInfo>
}

interface IProps {
  title: Maybe<Scalars['String']> | undefined
}

export default TitleInfo
