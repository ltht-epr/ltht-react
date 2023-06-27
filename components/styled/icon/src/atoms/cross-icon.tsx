import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, ICON_COLOURS, IconSize, IconStatus } from '@ltht-react/styles'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { SerializedStyles, css } from '@emotion/react'
import styled from '@emotion/styled'

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

const CrossIcon: FC<CrossIconProps> = ({ status, size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__cross`.trimStart()}
    icon={faTimes}
    status={status}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: IconStatus
}

interface CrossIconProps extends HTMLAttributes<SVGElement> {
  status: IconStatus
  size: IconSize
}

export default CrossIcon
