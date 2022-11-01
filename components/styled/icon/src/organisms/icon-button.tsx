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

const IconButton: FC<Props> = ({ iconProps, text, ...rest }) => (
  <StyledInvisibleButton {...rest}>
    <Icon {...iconProps} />
    {text && <StyledText>{text}</StyledText>}
  </StyledInvisibleButton>
)

interface Props extends HTMLAttributes<HTMLButtonElement> {
  iconProps: IconProps
  text?: string
}

export default IconButton
