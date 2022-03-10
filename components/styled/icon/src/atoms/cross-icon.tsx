import { FC } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CrossIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <FontAwesomeIcon className="icon__cross" icon={faTimes} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default CrossIcon
