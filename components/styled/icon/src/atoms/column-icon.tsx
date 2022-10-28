import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { css, SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faColumns } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const calculateIconColor = (status: string): SerializedStyles => css`
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE};`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING};`}
  ${status === 'red' && `${ICON_COLOURS.DANGER};`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT.VALUE};`}
  ${status === 'info' && `${ICON_COLOURS.INFO};`}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const ColumnIcon: FC<IconProps> = ({ status, size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__column`.trimStart()}
    status={status}
    icon={faColumns}
    size={calculateIconSize(size)}
    transform={{ rotate: 180 }}
    {...rest}
  />
)

type StatusValues = 'red' | 'green' | 'amber' | 'default' | 'info'
interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status: StatusValues
}

interface IconProps extends HTMLAttributes<SVGElement> {
  status: StatusValues
  size: IconSizes
}

export default ColumnIcon
