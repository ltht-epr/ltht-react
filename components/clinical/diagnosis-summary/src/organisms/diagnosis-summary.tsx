import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import { CommentIcon, FolderPlusIcon } from '@ltht-react/icon'

import Category from '../atoms/diagnosis-category'
import Status from '../atoms/diagnosis-status'
import Title from '../atoms/diagnosis-title'
import Redacted from '../molecules/diagnosis-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex-grow: 1;
`
const StyledDate = styled.div`
  text-align: right;
`

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  display: inline-block;
`

const DiagnosisSummary: FC<Props> = ({
  condition,
  extendedTemplateDisplayName,
  extensionTemplateDisplayName,
  extensionClickHandler,
  ...rest
}) => {
  if (condition.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted condition={condition} />
      </StyledSummary>
    )
  }

  const enteredInError = condition.verificationStatus === ConditionVerificationStatus.EnteredinError

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title enteredInError={enteredInError} condition={condition} />
        {extendedTemplateDisplayName && (
          <IconWrapper>
            <CommentIcon
              size="medium"
              title={`This diagnosis has been extended beyond standard diagnosis with form '${extendedTemplateDisplayName}'.
           To view these extra details, click into the full diagnosis detail or edit the existing form.`}
            />
          </IconWrapper>
        )}
        {extensionTemplateDisplayName && (
          <IconWrapper>
            <FolderPlusIcon
              size="medium"
              title={`This diagnosis can be extended further to form '${extensionTemplateDisplayName}' by clicking here`}
              clickHandler={extensionClickHandler}
            />
          </IconWrapper>
        )}
        <Category enteredInError={enteredInError} condition={condition} />
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={condition?.onset?.dateTime} />
        <Status enteredInError={enteredInError} condition={condition} />
      </StyledDate>
    </StyledSummary>
  )
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  condition: Condition
  extendedTemplateDisplayName?: string | undefined
  extensionTemplateDisplayName?: string | undefined
  extensionClickHandler?(): void
}

export default DiagnosisSummary
