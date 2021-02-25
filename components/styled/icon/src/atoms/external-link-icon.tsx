import { FC } from 'react'
import styled from '@emotion/styled'
import { calculateIconSize, IconSizes, LINK_COLOURS } from '@ltht-react/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${LINK_COLOURS.TEXT.DEFAULT};
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${LINK_COLOURS.TEXT.HOVER};
  }
`

const ExternalLinkIcon: FC<ExternalLinkIconProps> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__external-link" icon={faExternalLinkAlt} size={calculateIconSize(size)} />
)

interface ExternalLinkIconProps {
  size: IconSizes
}

export default ExternalLinkIcon
