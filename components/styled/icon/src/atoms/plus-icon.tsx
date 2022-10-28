import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const PlusIcon: FC<Props> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__plus`.trimStart()}
    icon={faPlus}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface Props extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default PlusIcon
