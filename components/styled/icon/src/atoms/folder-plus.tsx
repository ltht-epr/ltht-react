import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<ControlProps>`
  color: ${({ clickable }) => (clickable ? LINK_COLOURS.TEXT.DEFAULT : '')};
  &:hover {
    color: ${({ clickable }) => (clickable ? LINK_COLOURS.TEXT.HOVER : '')};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : '')};
  }
`
const FolderPlusIcon: FC<FolderPlusIconProps> = ({ size, ...rest }) => {
  return (
    <StyledFontAwesomeIcon
      className="icon__folder__plus"
      icon={faFolderPlus}
      size={calculateIconSize(size)}
      clickable={rest.onClick !== undefined}
      {...rest}
    />
  )
}
interface ControlProps {
  clickable: boolean
}
interface FolderPlusIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}
export default FolderPlusIcon
