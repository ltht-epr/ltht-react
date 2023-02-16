import styled from '@emotion/styled'
import { Icon, IconButton } from '@ltht-react/icon'
import { FC, HTMLAttributes, useState } from 'react'
import { Problem, ProblemMessage } from '../atoms/problem-message'

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

const ProblemSummary: FC<MultipleErrorsProps> = ({
  problems,
  headerMessage = 'Oops, there were a few problems.',
  ...rest
}) => {
  const [showErrorList, setShowErrorList] = useState<boolean>(problems.length <= 3)

  if (problems.length === 1) {
    return <ProblemMessage type={problems[0].type} text={problems[0].text} />
  }

  return (
    <div {...rest}>
      <StyledIcon type="exclamation" status={problems.some((p) => p.type === 'error') ? 'red' : 'amber'} size="large" />
      <span>{headerMessage}</span>
      <StyledIconButton
        iconProps={{ type: 'chevron', size: 'large', direction: showErrorList ? 'down' : 'right' }}
        onClick={() => {
          setShowErrorList(!showErrorList)
        }}
        text="See details"
        iconPosition="right"
      />
      {showErrorList && (
        <StyledList>
          {problems.map((problem, index) => (
            <li key={index}>
              <ProblemMessage type={problem.type} text={problem.text} />
            </li>
          ))}
        </StyledList>
      )}
    </div>
  )
}

interface MultipleErrorsProps extends HTMLAttributes<HTMLDivElement> {
  problems: Problem[]
  headerMessage?: string
}

export default ProblemSummary
