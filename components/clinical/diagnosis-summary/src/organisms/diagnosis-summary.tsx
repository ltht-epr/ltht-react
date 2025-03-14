import { cloneElement, FC, HTMLAttributes, ReactElement } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import Icon from '@ltht-react/icon'
import { Button, ButtonProps } from '@ltht-react/button'

import { BTN_COLOURS, SMALL_SCREEN_MAXIMUM_MEDIA_QUERY, WIDESCREEN_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import Title from '../atoms/diagnosis-title'
import OnsetDateEstimated from '../atoms/diagnosis-onset-estimated'
import Redacted from '../molecules/diagnosis-redacted'
import DiagnosisDataSource from '../atoms/diagnosis-data-source'

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
  flex-direction: column;
  gap: 0.3rem;

  ${WIDESCREEN_MINIMUM_MEDIA_QUERY} {
    flex-direction: row;
  }
`
const StyledResponsiveContainer = styled.div`
  display: flex;
  margin: 0;
  flex-flow: row wrap;
  gap: 0.3rem;
  align-content: center;

  ${WIDESCREEN_MINIMUM_MEDIA_QUERY} {
    margin: 0 10px 0 10px;
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 0;
    flex-direction: column;
    align-content: flex-start;

    & > * {
      width: 100%;
      max-width: 10rem;
    }
  }
`

const StyledButton = styled(Button)`
  font-size: 0.8rem !important;
  padding: 1px 5px;
  max-height: 1.5rem;
  width: fit-content;

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    width: 100%;
    max-width: 10rem;
  }
`
const StyledDate = styled.div`
  display: flex;
  flex-flow: column nowrap;
  text-align: right;
  min-width: 6rem;
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
  displaySource = false,
  controls = [],
  tags = [],
  systemExclusionsFilter = [],
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
            <Title
              enteredInError={enteredInError}
              condition={condition}
              systemExclusionsFilter={systemExclusionsFilter}
            />
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

          {displaySource && <DiagnosisDataSource condition={condition} enteredInError={enteredInError} />}
        </StyledDescription>

        {tags.length > 0 && (
          <StyledResponsiveContainer>
            {tags?.map((tag, index) => (tag.key ? tag : cloneElement(tag, { key: index })))}
          </StyledResponsiveContainer>
        )}

        {!isReadOnly && controls.length > 0 && (
          <StyledResponsiveContainer>
            {controls.map((props, index) => (
              <StyledButton key={index} {...props} />
            ))}
          </StyledResponsiveContainer>
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
  isReadOnly: boolean
  dateOnlyView?: boolean
  displaySource?: boolean
  controls?: ButtonProps[]
  tags?: ReactElement[]
  canExtendDiagnosis?: boolean
  extensionClickHandler?(): void
  systemExclusionsFilter?: string[]
}

export default DiagnosisSummary
