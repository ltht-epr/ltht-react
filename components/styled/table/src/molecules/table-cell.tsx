import { FC } from 'react'
import { Button } from '@ltht-react/button'
import styled from '@emotion/styled'
import { Icon, IconButton, IconProps } from '@ltht-react/icon'

const StyledText = styled.span`
  margin-left: 0.4rem;
`

const TableCell: FC<CellProps> = ({ isButton = false, text, iconProps, clickHandler }) => {
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
  isButton?: boolean
  text?: string
  iconProps?: IconProps
  clickHandler?: () => undefined
}

export default TableCell
