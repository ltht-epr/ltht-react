import { FC } from 'react'
import { Button } from '@ltht-react/button'
import styled from '@emotion/styled'
import { Icon, IconButton, IconProps } from '@ltht-react/icon'
import ActionMenu, { ActionMenuOption } from '@ltht-react/menu'
import { PopUp, getZIndex } from '@ltht-react/styles'

const StyledText = styled.span`
  margin-left: 0.4rem;
`

// TODO: This component is still a WIP and will be re-factored soon!
// May be best to split it out into different components, the important part is unifying Type used by React-Table so the mapping can be simplified
// It will need to facilitate the Actions list capability Jonny Dyson has requested
// Betters ways of handling the customComponentOverride will be considered too
const TableCell: FC<CellProps> = ({
  adminActions,
  isButton = false,
  text,
  iconProps,
  clickHandler,
  customComponentOverride,
}) => {
  if (customComponentOverride) {
    return customComponentOverride
  }

  if (adminActions) {
    return <ActionMenu actions={adminActions} popupStyle={{ zIndex: getZIndex(PopUp) }} />
  }

  if (isButton) {
    return <Button type="button" value={text} icon={iconProps && <Icon {...iconProps} />} onClick={clickHandler} />
  }

  if (clickHandler && iconProps) {
    return <IconButton iconProps={iconProps} text={text} onClick={clickHandler} />
  }

  if (iconProps) {
    return (
      <>
        <Icon {...iconProps} />
        {text && <StyledText>{text}</StyledText>}
      </>
    )
  }

  if (text) {
    return <div>{text ?? ''}</div>
  }

  return <></>
}

export interface CellProps {
  adminActions?: ActionMenuOption[]
  isButton?: boolean
  text?: string
  iconProps?: IconProps
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>
  customComponentOverride?: JSX.Element
  parentStyle?: React.CSSProperties
}

export default TableCell
