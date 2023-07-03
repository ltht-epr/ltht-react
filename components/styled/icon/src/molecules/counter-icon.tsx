import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { IconSize, IconStatus } from '@ltht-react/styles'
import StyledIcon from '../atoms/styled-icon'

const StyledCounterIcon = styled.span``

const StyledCounterValue = styled.span`
  font-weight: bold;
`

const CounterIcon: FC<CounterIconProps> = ({ status, size, value, ...rest }) => (
  <StyledCounterIcon className="fa-layers fa-fw">
    <StyledIcon status={status} icon={faCircle} type="counter" customSize={size} {...rest} />
    <StyledCounterValue className="fa-layers-text fa-inverse fa-xs">{value}</StyledCounterValue>
  </StyledCounterIcon>
)

interface CounterIconProps extends HTMLAttributes<SVGElement> {
  status: IconStatus
  size: IconSize
  value: number
}

export default CounterIcon
