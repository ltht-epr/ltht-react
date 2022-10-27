import { FC, HTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const BullseyeIcon: FC<BullseyeIconProps> = ({ size, ...rest }) => (
  <div {...rest}>
    <FontAwesomeIcon className="icon__bullseye" icon={faBullseye} size={calculateIconSize(size)} />
  </div>
)

interface BullseyeIconProps extends HTMLAttributes<HTMLDivElement> {
  size: IconSizes
}

export default BullseyeIcon
