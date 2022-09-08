import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

import { Condition, ConditionVerificationStatus } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/type-summary'
import { CommentIcon, FolderPlusIcon } from '@ltht-react/icon'
import { Button } from '@ltht-react/button'

import { LINK_COLOURS } from '@ltht-react/styles'
import { isMobileView } from '@ltht-react/utils'
import { useWindowSize } from '@ltht-react/hooks'
import Category from '../atoms/diagnosis-category'
import Status from '../atoms/diagnosis-status'
import Title from '../atoms/diagnosis-title'
import Estimated from '../atoms/diagnosis-onset-estimated'
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
  ...rest
}) => {
  const { width } = useWindowSize()
  const isMobile = isMobileView(width)

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
        {extensionTemplateDisplayName && !isMobile && (
          <IconButtonWrapper
            onClick={extensionClickHandler}
            type="button"
            buttonStyle="clear"
            value=""
            icon={<FolderPlusIcon size="medium" />}
            iconPlacement="center"
            iconColour={LINK_COLOURS.TEXT.DEFAULT}
            title={`This diagnosis can be extended further to form '${extensionTemplateDisplayName}' by clicking here`}
          />
        )}
        {extensionTemplateDisplayName && isMobile && (
          <IconWrapper>
            <FolderPlusIcon
              size="medium"
              title={`This diagnosis can be extended further to form '${extensionTemplateDisplayName}' from the quick actions menu`}
            />
          </IconWrapper>
        )}
        {extendedTemplateDisplayName && (
          <IconWrapper>
            <CommentIcon
              size="medium"
              title={`This diagnosis has been extended beyond standard diagnosis with form '${extendedTemplateDisplayName}'.
           To view these extra details, click into the full diagnosis detail or edit the existing form.`}
            />
          </IconWrapper>
        )}
        <Category enteredInError={enteredInError} condition={condition} />
      </StyledDescription>

      <StyledDate>
        <DateSummary enteredInError={enteredInError} datetime={condition?.onset?.dateTime} />
        <Estimated enteredInError={enteredInError} condition={condition} />
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
