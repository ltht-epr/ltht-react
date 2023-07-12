import { FC } from 'react'
import { Button } from '@ltht-react/button'
import styled from '@emotion/styled'
import Icon, { IconButton, IconProps } from '@ltht-react/icon'
import ActionMenu, { ActionMenuOption } from '@ltht-react/menu'
import { PopUp, getZIndex, BTN_COLOURS } from '@ltht-react/styles'
import { Axis } from '@ltht-react/types'

const StyledIconText = styled.span`
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
  headerAxis = 'x',
  clickHandler,
  customComponentOverride,
}) => {
  if (customComponentOverride) {
    return customComponentOverride
  }

  if (adminActions) {
    return (
      <ActionMenu
        actions={adminActions}
        menuButtonOptions={{
          type: 'button',
          text: '',
          buttonProps: {
            styling: {
              buttonStyle: 'standard',
              padding: headerAxis === 'x' ? '0.3rem 0.5rem' : '0.15rem 0.3rem',
            },
            icon: (
              <Icon {...{ type: headerAxis === 'x' ? 'ellipsis-vertical' : 'ellipsis-horizontal', size: 'medium' }} />
            ),
            iconPlacement: 'center',
            color: `${BTN_COLOURS.DANGER.VALUE}`,
          },
        }}
        popupStyle={{ zIndex: getZIndex(PopUp) }}
        popupPlacement={headerAxis === 'x' ? 'bottom-start' : 'right-start'}
      />
    )
  }

  if (isButton) {
    return <Button value={text} icon={iconProps && <Icon {...iconProps} />} onClick={clickHandler} />
  }

  if (clickHandler && iconProps) {
    return <IconButton iconProps={iconProps} text={text} onClick={clickHandler} />
  }

  if (iconProps) {
    return (
      <>
        <Icon {...iconProps} />
        {text && <StyledIconText>{text}</StyledIconText>}
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
  headerAxis?: Axis
}

export default TableCell
