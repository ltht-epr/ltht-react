import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Maybe, MedicationRequest } from '@ltht-react/types'
import { DateSummary } from '@ltht-react/summary'
import { CommentIcon } from '@ltht-react/icon'
import Badge from '@ltht-react/badge'

import Title from '../atoms/medication-title'
import Route from '../atoms/medication-route'
import Redacted from '../molecules/medication-redacted'

const StyledSummary = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledDate = styled.div`
  text-align: right;
`

const MedicationSummary: FC<IProps> = ({ medication, ...rest }) => {
  if (medication?.metadata.isRedacted) return <Redacted />

  const route = medication?.dosageInstruction && medication.dosageInstruction[0]?.route
  const hasChanged = !medication?.medicationReference?.isBrand
  const hasVerificationComments = medication?.note

  return (
    <StyledSummary {...rest}>
      <StyledDescription>
        <Title medicationTitle={medication?.medicationReference?.code} form={medication?.medicationReference?.form} />
        <Route route={route} />
        {hasChanged && <Badge>Changed</Badge>}
        {hasVerificationComments && <CommentIcon size="large" />}
      </StyledDescription>
      <StyledDate>
        <DateSummary datetime={medication?.authoredOn} />
      </StyledDate>
    </StyledSummary>
  )
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  medication: Maybe<MedicationRequest>
}

export default MedicationSummary
