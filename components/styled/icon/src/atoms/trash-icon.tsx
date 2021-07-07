import { FC } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${LINK_COLOURS.TEXT.DEFAULT};
`

const ExternalLinkIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__trash" icon={faTrashAlt} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default ExternalLinkIcon
