import { FC, HTMLAttributes } from 'react'
import { calculateIconSize, IconSizes } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CrossIcon: FC<ExternalLinkIconProps> = ({ size, className, ...rest }) => (
  <FontAwesomeIcon
    className={`${className ?? ''} icon__cross`.trimStart()}
    icon={faTimes}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ExternalLinkIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default CrossIcon
