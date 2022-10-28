import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${LINK_COLOURS.TEXT.DEFAULT};
`

const ExternalLinkIcon: FC<ExternalLinkIconProps> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__trash`.trimStart()}
    icon={faTrashAlt}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface ExternalLinkIconProps extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default ExternalLinkIcon
