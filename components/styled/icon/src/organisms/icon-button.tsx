import styled from '@emotion/styled'
import { CSS_RESET } from '@ltht-react/styles'
import { FC, ButtonHTMLAttributes } from 'react'
import Icon, { IconProps } from './icon'

const StyledInvisibleButton = styled.button`
  ${CSS_RESET}
  border-width: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 0.4rem;
  margin-left: 0.4rem;
`

const IconButton: FC<IconButtonProps> = ({ iconProps, text, iconPosition = 'left', ...rest }: IconButtonProps) => {
  if (iconPosition === 'left') {
    return (
      <StyledInvisibleButton {...rest} role="button">
        <StyledIcon {...iconProps} />
        {text}
      </StyledInvisibleButton>
    )
  }

  return (
    <StyledInvisibleButton {...rest} role="button">
      {text}
      <StyledIcon {...iconProps} />
    </StyledInvisibleButton>
  )
}

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconProps: IconProps
  text?: string
  iconPosition?: 'left' | 'right'
}

export default IconButton
