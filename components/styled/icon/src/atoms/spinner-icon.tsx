import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const SpinnerIcon: React.FC<Props> = ({ size }) => (
  <StyledFontAwesomeIcon className="fa-spin icon__spinner" icon={faSync} size={calculateIconSize(size)} />
)

interface Props {
  size: IconSizes
}

export default SpinnerIcon
