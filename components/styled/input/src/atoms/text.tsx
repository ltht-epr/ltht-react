import { FC, InputHTMLAttributes, ReactElement } from 'react'
import styled from '@emotion/styled'
import { DESKTOP_MINIMUM_MEDIA_QUERY, inputBaseStyles } from '@ltht-react/styles'

const TextInputContainer = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: auto;
  }
`

const StyledTextInput: FC<IStyledTextInputProps> = styled.input`
  width: 100%;
  ${inputBaseStyles}
  padding: 0.5rem 1rem 0.5rem 1.75rem;
  padding-left: ${({ hasIcon }: IStyledTextInputProps) => (hasIcon ? '1.75rem' : '0.5rem')};
  &::placeholder {
    color: #98a4ad;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: auto;
  }
`

const StyledIconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);

  svg {
    color: #98a4ad;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: auto;
  }
`

const TextInput: FC<ITextInputProps> = ({ placeholder, icon, ...rest }) => (
  <TextInputContainer>
    {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
    <StyledTextInput type="text" placeholder={placeholder} {...rest} hasIcon={icon !== undefined} />
  </TextInputContainer>
)

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactElement
}

interface IStyledTextInputProps extends ITextInputProps {
  hasIcon: boolean
}

export default TextInput
