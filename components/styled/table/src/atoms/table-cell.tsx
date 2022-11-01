import Icon, { IconProps } from '@ltht-react/icon/lib/molecules/icon'
import Button from '@ltht-react/button/src/atoms/button'
import { FC, HTMLAttributes } from 'react'
import IconButton from '@ltht-react/icon/lib/organisms/icon-button'
import styled from '@emotion/styled'

const StyledText = styled.span`
  margin-left: 0.4rem;
`

const TableCell: FC<Props> = ({ isButton = false, text, iconProps, clickHandler }) => {
  if (isButton) {
    return <Button type="button" value={text} icon={iconProps && <Icon {...iconProps} />} onClick={clickHandler}/>
  }

  if (clickHandler && iconProps) {
    return <IconButton iconProps={iconProps} text={text} onClick={clickHandler}></IconButton>
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

interface Props extends HTMLAttributes<HTMLDivElement> {
  isButton?: boolean
  text?: string
  iconProps?: IconProps
  clickHandler?: () => undefined
}

export default TableCell
