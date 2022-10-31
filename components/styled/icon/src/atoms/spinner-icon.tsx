import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSize, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const SpinnerIcon: FC<Props> = ({ size, animate = true, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__spinner${animate && ' fa-spin'}`.trimStart()}
    icon={faSync}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface Props extends HTMLAttributes<SVGElement> {
  size: IconSize
  animate?: boolean
}

export default SpinnerIcon
