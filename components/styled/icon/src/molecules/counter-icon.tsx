import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { IconSize, IconColor } from '@ltht-react/styles'
import StyledIcon from '../atoms/styled-icon'

const StyledCounterIcon = styled.span``

const StyledCounterValue = styled.span`
  font-weight: bold;
`

const CounterIcon: FC<CounterIconProps> = ({ color, size, value, ...rest }) => (
  <StyledCounterIcon className="fa-layers fa-fw">
    <StyledIcon color={color} icon={faCircle} type="counter" customSize={size} {...rest} />
    <StyledCounterValue className="fa-layers-text fa-inverse fa-xs">{value}</StyledCounterValue>
  </StyledCounterIcon>
)

interface CounterIconProps extends HTMLAttributes<SVGElement> {
  color: IconColor
  size: IconSize
  value: number
}

export default CounterIcon
