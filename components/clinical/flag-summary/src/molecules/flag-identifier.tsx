import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { Flag } from '@ltht-react/types'
import Icon from '../atoms/flag-icon'
import Title from '../atoms/flag-title'

const StyledFlagIdentifier = styled.div`
  flex-grow: 1;
  display: inline-flex;
  padding-right: 2px;
`

const FlagIdentifier: FC<Props> = ({ flag, ...rest }) => (
  <StyledFlagIdentifier {...rest}>
    <Icon flag={flag} />
    <Title flag={flag} />
  </StyledFlagIdentifier>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagIdentifier
