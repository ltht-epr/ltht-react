import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

const LayerGroupIcon: FC<LayerGroupIconProps> = ({ size, title }) => (
  <FontAwesomeIcon className="icon__layer__group" icon={faLayerGroup} size={calculateIconSize(size)} title={title} />
)

interface LayerGroupIconProps {
  size: IconSizes
  title?: string | undefined
}

export default LayerGroupIcon
