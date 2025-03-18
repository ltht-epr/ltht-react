import { cloneElement, FC, HTMLAttributes, ReactElement } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import Icon from '@ltht-react/icon'
import { Button, ButtonProps } from '@ltht-react/button'

import { BTN_COLOURS, SMALL_SCREEN_MAXIMUM_MEDIA_QUERY, TABLET_MINIMUM_MEDIA_QUERY } from '@ltht-react/styles'
import Title from '../atoms/diagnosis-title'
import OnsetDateEstimated from '../atoms/diagnosis-onset-estimated'
import Redacted from '../molecules/diagnosis-redacted'
import DiagnosisDataSource from '../atoms/diagnosis-data-source'

const StyledTitle = styled.div`
  display: flex;
`

const StyledSummary = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const StyledDescription = styled.div`
  flex-grow: 1;
`

const StyledTitleAndDateContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 5px;

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    flex-flow: column nowrap;
    align-items: flex-start;
    div {
      text-align: left;
    }
  }
`

const StyledButtonAndTagContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const StyledResponsiveButtonContainer = styled.div`
  display: flex;
  margin-right: auto;
  flex-flow: row wrap;
  gap: 5px;
  height: fit-content;
  flex-grow: 1;

  & > * {
    height: 1.2rem;
    padding: 0 5px;

    ${TABLET_MINIMUM_MEDIA_QUERY} {
      font-size: 0.8rem !important;
    }
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    margin: 0;
    flex-direction: column;

    span {
      width: 100%;
      max-width: 10rem;
    }
  }
`

const StyledResponsiveTagContainer = styled.div`
  display: flex;
  margin-left: auto;
  flex-flow: row wrap;
  gap: 5px;
  height: fit-content;
  justify-content: flex-end;
  flex-grow: 1;

  & > * {
    display: flex;
    align-items: center;
    height: 1.2rem;
    margin: 0 !important;
    font-size: 0.8rem !important;
    padding: 0 10px;
    justify-content: center;

    ${TABLET_MINIMUM_MEDIA_QUERY} {
      font-size: 0.8rem !important;
    }
  }

  ${SMALL_SCREEN_MAXIMUM_MEDIA_QUERY} {
    flex-direction: column;
    margin: 0;

    & > * {
      margin: 0;
      width: 100%;
      max-width: 10rem;
      padding: 0 10px;
    }
  }
`

const StyledButton = styled(Button)`
  padding: 0 5px;
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
  justify-content: start;
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
  padding: 0 5px;
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
      <StyledTitleAndDateContainer>
        <StyledDescription>
          <StyledTitle>
            <Title
              enteredInError={enteredInError}
              condition={condition}
              systemExclusionsFilter={systemExclusionsFilter}
            />
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
          </StyledTitle>
          {displaySource && <DiagnosisDataSource condition={condition} enteredInError={enteredInError} />}
        </StyledDescription>
        <StyledDate>
          <DateSummary enteredInError={enteredInError} datetime={condition?.assertedDate} dateOnlyView={dateOnlyView} />
          <OnsetDateEstimated enteredInError={enteredInError} condition={condition} />
        </StyledDate>
      </StyledTitleAndDateContainer>

      {!isReadOnly && (controls.length > 0 || tags.length > 0) && (
        <StyledButtonAndTagContainer>
          <StyledResponsiveButtonContainer>
            {controls.map((props, index) => (
              <StyledButton key={index} {...props} />
            ))}
          </StyledResponsiveButtonContainer>

          <StyledResponsiveTagContainer>
            {tags?.map((tag, index) => (tag.key ? tag : cloneElement(tag, { key: index })))}
          </StyledResponsiveTagContainer>
        </StyledButtonAndTagContainer>
      )}
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
