import { FC } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const SpinnerIcon: FC<Props> = ({ size, animate = true }) => (
  <StyledFontAwesomeIcon
    className={`icon__spinner${animate && ' fa-spin'}`}
    icon={faSync}
    size={calculateIconSize(size)}
  />
)

interface Props {
  size: IconSizes
  animate?: boolean
}

export default SpinnerIcon
