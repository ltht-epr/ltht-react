import styled from '@emotion/styled'
import { Icon, IconButton } from '@ltht-react/icon'
import { FC, HTMLAttributes, useState } from 'react'
import { ErrorInfo, SingleError } from '../atoms/error'

const StyledList = styled.ul`
  list-style-type: none;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.4rem;
`

const StyledIconButton = styled(IconButton)`
  padding-top: 0;
  padding-bottom: 0;
`

const ErrorDescription: FC<Props> = ({ errors, errorHeaderText, ...rest }) => {
  const [showErrorList, setShowErrorList] = useState<boolean>(errors.length <= 3)

  if (errors.length === 1) {
    return <SingleError type={errors[0].type} text={errors[0].text} />
  }

  return (
    <div {...rest}>
      <StyledIcon type="exclamation" status={errors.some((e) => e.type === 'error') ? 'red' : 'amber'} size="large" />
      <span>{errorHeaderText ?? 'Oops, there were a few problems.'}</span>
      <StyledIconButton
        iconProps={{ type: 'chevron', size: 'large', direction: showErrorList ? 'down' : 'right' }}
        onClick={() => {
          setShowErrorList(!showErrorList)
        }}
        text={'See details'}
        iconPosition={'right'}
      />
      {showErrorList && (
        <StyledList>
          {errors.map((error, index) => (
            <li key={index}>
              <SingleError type={error.type} text={error.text} />
            </li>
          ))}
        </StyledList>
      )}
    </div>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  errors: ErrorInfo[]
  errorHeaderText?: string
}

export default ErrorDescription
