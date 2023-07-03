import { FC, MouseEvent } from 'react'
import styled from '@emotion/styled'
import { SerializedStyles } from '@emotion/react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { IconSize, calculateIconSize, IconStatus, calculateIconColor } from '@ltht-react/styles'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)<StyledFontAwesomeIconProps>`
  ${({ status }): SerializedStyles => calculateIconColor(status)};
`

const StyledIcon: FC<StyledFontAwesomeIconProps> = ({
  icon,
  type,
  status,
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

  return (
    <StyledFontAwesomeIcon
      className={`${className ?? ''} icon__${type} ${animation?.spin && 'fa-spin'}`.trimStart()}
      status={status}
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
  status: IconStatus
  customSize?: IconSize
  animation?: IconAnimation
  clickHandler?(): void
}

export default StyledIcon
