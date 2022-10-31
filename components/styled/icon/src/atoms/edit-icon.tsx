import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSize, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${LINK_COLOURS.TEXT.DEFAULT};
`

const EditIcon: FC<EditIconProps> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__edit`.trimStart()}
    icon={faEdit}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface EditIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default EditIcon
