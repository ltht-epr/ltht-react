import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const SearchIcon: FC<Props> = ({ size, className, ...rest }) => (
  <StyledFontAwesomeIcon
    className={`${className ?? ''} icon__search`.trimStart()}
    icon={faSearch}
    size={calculateIconSize(size)}
    {...rest}
  />
)

interface Props extends HTMLAttributes<SVGElement> {
  size: IconSizes
}

export default SearchIcon
