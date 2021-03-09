import { FC } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ICON_COLOURS, IconSizes, calculateIconSize } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${ICON_COLOURS.PRIMARY};
`

const PlusIcon: FC<Props> = ({ size }) => (
  <StyledFontAwesomeIcon className="icon__plus" icon={faPlus} size={calculateIconSize(size)} />
)

interface Props {
  size: IconSizes
}

export default PlusIcon
