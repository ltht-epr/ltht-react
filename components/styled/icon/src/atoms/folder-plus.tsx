import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'

const FolderPlusIcon: FC<FolderPlusIconProps> = ({ size, title }) => (
  <FontAwesomeIcon className="icon__folder__plus" icon={faFolderPlus} size={calculateIconSize(size)} title={title} />
)

interface FolderPlusIconProps {
  size: IconSizes
  title?: string | undefined
}

export default FolderPlusIcon
