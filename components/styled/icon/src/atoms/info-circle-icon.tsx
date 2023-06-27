import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, calculateIconSize, IconStatus, IconSize } from '@ltht-react/styles'

const calculateIconColor = (status: string): SerializedStyles => css`
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE} !important;`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING} !important;`}
  ${status === 'red' && `${ICON_COLOURS.DANGER} !important;`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT} !important;`}
  ${status === 'info' && `${ICON_COLOURS.INFO} !important;`}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const InfoCircleIcon: FC<IconProps> = ({ status, size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__info-circle`.trimStart()}
    status={status}
    icon={faInfoCircle}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: IconStatus
}
interface IconProps extends HTMLAttributes<SVGElement> {
  status: IconStatus
  size: IconSize
}

export default InfoCircleIcon
