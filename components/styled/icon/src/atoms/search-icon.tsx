import { FC } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const SearchIcon: FC<Props> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__search" icon={faSearch} size={calculateIconSize(size)} />
)

interface Props {
  size: IconSizes
}

export default SearchIcon
