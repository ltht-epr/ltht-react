import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import Icon from '@ltht-react/icon'
import { Button } from '@ltht-react/button'

import { BTN_COLOURS } from '@ltht-react/styles'
import Category from '../atoms/diagnosis-category'
import Status from '../atoms/diagnosis-status'
import Title from '../atoms/diagnosis-title'
import OnsetDateEstimated from '../atoms/diagnosis-onset-estimated'
import Redacted from '../molecules/diagnosis-redacted'

const StyledTitle = styled.div`
  display: inline-block;
`
const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
`
const StyledDescription = styled.div`
  flex-grow: 1;
`
const StyledDate = styled.div`
  text-align: left;
  width: 15%;
`
const IconButtonWrapper = styled(Button)`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  margin-right: 0.5rem;
  display: inline-block !important;
  margin-left: 0.5rem;
  width: auto;
`
const IconWrapper = styled.div`
  margin-left: 0.5rem;
  display: inline-block;
`

const DiagnosisSummary: FC<Props> = ({
  condition,
  extendedTemplateDisplayName,
  extensionTemplateDisplayName,
  extensionClickHandler,
  isReadOnly,
  ...rest
}) => {
  if (condition.metadata.isRedacted) {
    return (
      <StyledSummary {...rest}>
        <Redacted condition={condition} />
      </StyledSummary>
    )
  }

  const enteredInError = condition.verificationStatus === ConditionVerificationStatus.EnteredInError

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <StyledTitle>
          <Title enteredInError={enteredInError} condition={condition} />
        </StyledTitle>
        {extensionTemplateDisplayName && !isReadOnly && !enteredInError && (
          <IconButtonWrapper
            onClick={extensionClickHandler}
            type="button"
            styling={{ buttonStyle: 'clear' }}
            value=""
            icon={<Icon type="folder-plus" size="medium" />}
            iconPlacement="center"
            iconColour={BTN_COLOURS.PRIMARY.VALUE}
            title={`This diagnosis can be extended further using form '${extensionTemplateDisplayName}' by clicking here`}
          />
        )}
        {extendedTemplateDisplayName && (
          <IconWrapper>
            <Icon
              type="comment"
              size="medium"
              title={`This diagnosis has been extended beyond standard diagnosis with form '${extendedTemplateDisplayName}'.
           To view these extra details, click into the full diagnosis detail or edit the existing form.`}
            />
          </IconWrapper>
        )}
        <Category enteredInError={enteredInError} condition={condition} />
      </StyledDescription>

      <StyledDate>
        <DateSummary enteredInError={enteredInError} datetime={condition?.assertedDate} />
        <OnsetDateEstimated enteredInError={enteredInError} condition={condition} />
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
  isReadOnly: boolean
}

export default DiagnosisSummary
