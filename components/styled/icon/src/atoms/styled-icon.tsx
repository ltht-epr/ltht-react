import { FC, MouseEvent } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconSize, calculateIconSize, IconColor, calculateIconColor } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  ${({ color }): SerializedStyles => calculateIconColor(color)};
`

const StyledIcon: FC<StyledFontAwesomeIconProps> = ({
  icon,
  type,
  color,
  customSize,
  animation,
  className,
  clickHandler,
  ...rest
}) => {
  const handleClick = (e: MouseEvent<SVGSVGElement>): void => {
    e.preventDefault()
    e.stopPropagation()
    clickHandler && clickHandler()
  }

  const spinClass = animation?.spin ? 'fa-spin' : ''

  return (
    <StyledFontAwesomeIcon
      className={`${className ?? ''} icon__${type} ${spinClass}`.trimStart()}
      color={color}
      icon={icon}
      size={calculateIconSize(customSize ?? 'medium')}
      onClick={clickHandler && handleClick}
      {...rest}
    />
  )
}

export interface IconAnimation {
  spin: boolean
}

interface StyledFontAwesomeIconProps extends FontAwesomeIconProps {
  color: IconColor
  customSize?: IconSize
  animation?: IconAnimation
  clickHandler?(): void
}

export default StyledIcon
