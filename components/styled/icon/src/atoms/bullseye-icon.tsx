import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'

const BullseyeIcon: FC<BullseyeIconProps> = ({ size, ...rest }) => (
  <FontAwesomeIcon className="icon__bullseye" icon={faBullseye} size={calculateIconSize(size)} {...rest} />
)

interface BullseyeIconProps {
  size: IconSizes
}

export default BullseyeIcon
