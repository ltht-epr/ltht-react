import styled from '@emotion/styled'
import { ClinicalApprovalStatus, Maybe, PartialDateTime } from '@ltht-react/types'
import { partialDateTimeText } from '@ltht-react/utils'
import { FC } from 'react'

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Badge = styled.span<{ backgroundColour: string; status: ClinicalApprovalStatus }>`
  background-color: ${({ backgroundColour }) => backgroundColour};
  border: 1px solid #e0b632;
  color: #664d03;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: ${({ status }) => (status === ClinicalApprovalStatus.Cancelled ? 'line-through' : 'none')};

  &::before {
    content: '✏️';
    font-size: 0.75rem;
    margin-right: 0.2rem;
  }
`

const getBadgeBackgroundColour = (status: ClinicalApprovalStatus): string => {
  switch (status) {
    case ClinicalApprovalStatus.Requested:
      return '#eb3434'
    case ClinicalApprovalStatus.Reviewed:
      return '#46eb34'
    case ClinicalApprovalStatus.Cancelled:
      return '#808080'
    case ClinicalApprovalStatus.Expired:
      return '#808080'
    default:
      return '#fff3cd'
  }
}

const getBadgeDisplayText = (
  status: ClinicalApprovalStatus,
  completedOn?: Maybe<PartialDateTime>,
  completedByDisplayName?: string
) => {
  switch (status) {
    case ClinicalApprovalStatus.Requested:
      return 'Countersignature Requested'
    case ClinicalApprovalStatus.Reviewed:
      return `Countersigned at ${partialDateTimeText(completedOn)} by ${completedByDisplayName}`
    case ClinicalApprovalStatus.Cancelled:
      return 'Countersign Request Withdrawn'
    case ClinicalApprovalStatus.Expired:
      return 'Countersign Request Closed by system'
    default:
      return ''
  }
}

const renderBadge = (
  status: ClinicalApprovalStatus,
  completedOn?: Maybe<PartialDateTime>,
  completedByDisplayName?: string
) => {
  const displayText = getBadgeDisplayText(status, completedOn, completedByDisplayName)
  const backgroundColour = getBadgeBackgroundColour(status)

  return (
    <Container>
      <Badge backgroundColour={backgroundColour} status={status} title="countersign-icon-and-status-badge">
        {displayText}
      </Badge>
    </Container>
  )
}

const CountersignatureIconAndStatusBadge: FC<ICountersignatureIconAndStatusBadge> = ({
  status,
  completedOn,
  completedByDisplayName,
}: ICountersignatureIconAndStatusBadge) => (status ? renderBadge(status, completedOn, completedByDisplayName) : null)

interface ICountersignatureIconAndStatusBadge {
  status?: ClinicalApprovalStatus
  completedOn?: Maybe<PartialDateTime>
  completedByDisplayName?: string
}

export default CountersignatureIconAndStatusBadge
