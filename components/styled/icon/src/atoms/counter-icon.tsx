import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconColor = (status: string): SerializedStyles => css`
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE};`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING};`}
  ${status === 'red' && `${ICON_COLOURS.DANGER};`}
  ${status === 'primary' && `${ICON_COLOURS.PRIMARY};`}
  ${status === 'secondary' && `${ICON_COLOURS.SECONDARY};`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT.VALUE};`}
  ${status === 'info' && `${ICON_COLOURS.INFO};`}
`

const StyledCounterIcon = styled.span``

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const StyledCounterValue = styled.span`
  font-weight: bold;
`

const CounterIcon: FC<CounterIconProps> = ({ status, size, value }) => (
  <StyledCounterIcon className="fa-layers fa-fw">
    <StyledFontAwesomeIcon className="icon__counter" status={status} icon={faCircle} size={calculateIconSize(size)} />
    <StyledCounterValue className="fa-layers-text fa-inverse fa-xs">{value}</StyledCounterValue>
  </StyledCounterIcon>
)

type StatusValues = 'red' | 'green' | 'amber' | 'primary' | 'secondary' | 'default' | 'info'

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: StatusValues
}
interface CounterIconProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusValues
  size: IconSizes
  value: number
}

export default CounterIcon
