import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSize, calculateIconSize, IconStatus } from '@ltht-react/styles'

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

const CounterIcon: FC<CounterIconProps> = ({ status, size, value, className, ...rest }) => (
  <StyledCounterIcon className="fa-layers fa-fw">
    <StyledFontAwesomeIcon
      className={`${className ?? ''} icon__counter`.trimStart()}
      status={status}
      icon={faCircle}
      size={calculateIconSize(size)}
      {...rest}
    />
    <StyledCounterValue className="fa-layers-text fa-inverse fa-xs">{value}</StyledCounterValue>
  </StyledCounterIcon>
)

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: IconStatus
}
interface CounterIconProps extends HTMLAttributes<SVGElement> {
  status: IconStatus
  size: IconSize
  value: number
}

export default CounterIcon
