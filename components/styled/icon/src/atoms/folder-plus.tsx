import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

const FolderPlusIcon: FC<FolderPlusIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__folder__plus`.trimStart()}
    icon={faFolderPlus}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface FolderPlusIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}
export default FolderPlusIcon
