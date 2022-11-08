import styled from '@emotion/styled'
import { FC, HTMLAttributes } from 'react'
import Icon, { IconProps } from '../molecules/icon'

const StyledInvisibleButton = styled.button`
  border-width: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

const StyledText = styled.span`
  margin-left: 0.4rem;
`

const IconButton: FC<Props> = ({ iconProps, text, disabled, ...rest }) => (
  <StyledInvisibleButton {...rest} disabled={disabled}>
    <Icon {...iconProps} />
    {text && <StyledText>{text}</StyledText>}
  </StyledInvisibleButton>
)

interface Props extends HTMLAttributes<HTMLButtonElement> {
  iconProps: IconProps
  text?: string
  disabled?: boolean
}

export default IconButton
