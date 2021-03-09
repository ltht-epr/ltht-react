import { FC } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${LINK_COLOURS.TEXT.DEFAULT};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${LINK_COLOURS.TEXT.HOVER};
  }
`

const EditIcon: FC<EditIconProps> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__edit" icon={faEdit} size={calculateIconSize(size)} />
)

interface EditIconProps {
  size: IconSizes
}

export default EditIcon
