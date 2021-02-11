import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { titleCase } from '@ltht-react/utils'

const StyledFlagStatus = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: right;
  font-size: smaller;
  padding-top: 0.25rem;
`

const FlagStatus: FC<Props> = ({ flag: { status }, ...rest }) => (
  <StyledFlagStatus {...rest}>{titleCase(status)}</StyledFlagStatus>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagStatus
