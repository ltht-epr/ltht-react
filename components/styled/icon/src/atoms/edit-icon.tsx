import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, ICON_COLOURS, IconSize, IconStatus, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { SerializedStyles, css } from '@emotion/react'

const calculateIconColor = (status: string | undefined): SerializedStyles => css`
  ${status === undefined && `${LINK_COLOURS.TEXT.DEFAULT} !important;`}
  ${status === 'green' && `${ICON_COLOURS.SUCCESS.VALUE} !important;`}
  ${status === 'amber' && `${ICON_COLOURS.WARNING} !important;`}
  ${status === 'red' && `${ICON_COLOURS.DANGER} !important;`}
  ${status === 'default' && `${ICON_COLOURS.DEFAULT} !important;`}
  ${status === 'info' && `${ICON_COLOURS.INFO} !important;`}
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  color: ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const EditIcon: FC<EditIconProps> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__edit`.trimStart()}
    icon={faEdit}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  status?: IconStatus
}

interface EditIconProps extends HTMLAttributes<SVGElement> {
  status?: IconStatus
  size: IconSize
}

export default EditIcon
