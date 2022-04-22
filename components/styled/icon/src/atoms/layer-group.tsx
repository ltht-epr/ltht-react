import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

const LayerGroupIcon: FC<LayerGroupIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__layer__group" icon={faLayerGroup} size={calculateIconSize(size)} {...rest} />
)

interface LayerGroupIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default LayerGroupIcon
