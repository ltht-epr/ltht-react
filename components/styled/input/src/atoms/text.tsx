import { FC, InputHTMLAttributes } from 'react'
import { SearchIcon } from '@ltht-react/icon'
import styled from '@emotion/styled'
import { DESKTOP_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'

const TextInputContainer = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: auto;
  }
`

const StyledTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0.5rem 1rem 0.5rem 1.75rem;

  &::placeholder {
    color: #98a4ad;
  }

  ${DESKTOP_MINIMUM_MEDIA_QUERY} {
    width: auto;
  }
`

const StyledSearchIcon = styled.div`
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

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, ...rest }) => (
  <TextInputContainer>
    <StyledSearchIcon>
      <SearchIcon size="medium" />
    </StyledSearchIcon>
    <StyledTextInput type="text" placeholder={placeholder} {...rest} />
  </TextInputContainer>
)

export default TextInput
