import { IconButton } from '@ltht-react/icon'
import { FC, HTMLAttributes, useState } from 'react'
import SingleError, { ErrorInfo } from '../atoms/error'

const ErrorSummary: FC<Props> = ({ errors, errorHeaderText, ...rest }) => {
  const [showErrorList, setShowErrorList] = useState<boolean>(errors.length <= 3)

  if (errors.length === 1) {
    return <SingleError type={errors[0].type} text={errors[0].text} />
  }

  return (
    <div {...rest}>
      <>{errorHeaderText ?? 'Some errors occurred...'}</>
      <IconButton
        iconProps={{ type: 'chevron', size: 'large', direction: showErrorList ? 'down' : 'up' }}
        onClick={() => {
          setShowErrorList(!showErrorList)
        }}
      />
      {showErrorList && (
        <ul>
          {errors.map((error, index) => {
            return (
              <li key={index}>
                <SingleError type={error.type} text={error.text} />
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  errors: ErrorInfo[]
  errorHeaderText?: string
}

export default ErrorSummary
