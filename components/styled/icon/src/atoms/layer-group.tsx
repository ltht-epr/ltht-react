import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSize } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

const LayerGroupIcon: FC<LayerGroupIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__layer__group`.trimStart()}
    icon={faLayerGroup}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface LayerGroupIconProps extends HTMLAttributes<SVGElement> {
  size: IconSize
}

export default LayerGroupIcon
