import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const BullseyeIcon: FC<BullseyeIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__bullseye`.trimStart()}
    icon={faBullseye}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface BullseyeIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default BullseyeIcon
