import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import Icon from '@ltht-react/icon'
import { Button, ButtonProps } from '@ltht-react/button'

import { BTN_COLOURS, MOBILE_MAXIMUM_MEDIA_QUERY, SMALL_SCREEN_MAXIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import Category from '../atoms/diagnosis-category'
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
const StyledLeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    flex-direction: column;
  }
`
const StyledControlsContainer = styled.div`
  display: flex;
  margin: auto 10px auto 10px;
  flex-direction: column;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    margin: 10px 0 0 0;
    flex-flow: row wrap;
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 10px 5px 0 0;
    flex-direction: column;
  }
`
const StyledButton = styled(Button)`
  margin: 2px 0 2px 0;
  font-size: 0.8em !important;
  padding: 1px 5px;

  ${MOBILE_MAXIMUM_MEDIA_QUERY} {
    margin: 2px 5px 2px 0;
    width: fit-content;
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 2px 0 2px 0;
    width: 100%;
    max-width: 200px;
  }
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
  isReadOnly = false,
  dateOnlyView = false,
  canExtendDiagnosis = false,
  controls = [],
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
      <StyledLeftContainer>
        <StyledDescription>
          <StyledTitle>
            <Title enteredInError={enteredInError} condition={condition} />
          </StyledTitle>
          {extensionTemplateDisplayName && !isReadOnly && canExtendDiagnosis && !enteredInError && (
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

        {!isReadOnly && controls.length > 0 && (
          <StyledControlsContainer>
            {controls.map((props, index) => (
              <StyledButton key={index} {...props} />
            ))}
          </StyledControlsContainer>
        )}
      </StyledLeftContainer>
      <StyledDate>
        <DateSummary enteredInError={enteredInError} datetime={condition?.assertedDate} dateOnlyView={dateOnlyView} />
        <OnsetDateEstimated enteredInError={enteredInError} condition={condition} />
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
  dateOnlyView?: boolean
  controls?: ButtonProps[]
  canExtendDiagnosis?: boolean
}

export default DiagnosisSummary
