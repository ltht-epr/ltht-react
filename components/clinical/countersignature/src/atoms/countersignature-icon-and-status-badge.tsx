import styled from '@emotion/styled'
import { ClinicalApprovalStatus } from '@ltht-react/types'
import { FC } from 'react'

const Container = styled.div`
  position: relative;
  display: inline-block;
`

const Badge = styled.span<{ backgroundColour: string; status: ClinicalApprovalStatus; isClickable?: boolean }>`
  background-color: ${({ backgroundColour }) => backgroundColour};
  color: #664d03;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: ${({ status }) => (status === ClinicalApprovalStatus.Cancelled ? 'line-through' : 'none')};
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};

  &::before {
    content: '✏️';
    font-size: 0.75rem;
    margin-right: 0.2rem;
  }

  ${({ isClickable }) =>
    isClickable &&
    `
    &:hover {
      opacity: 0.8;
      transition: opacity 0.2s ease-in-out;
    }
  `}
`

const getBadgeBackgroundColour = (status: ClinicalApprovalStatus): string => {
  switch (status) {
    case ClinicalApprovalStatus.Requested:
      return '#f35656'
    case ClinicalApprovalStatus.Reviewed:
      return '#46eb34'
    case ClinicalApprovalStatus.Cancelled:
      return '#cfcaca'
    case ClinicalApprovalStatus.Expired:
      return '#cfcaca'
    default:
      return '#fff3cd'
  }
}

const getBadgeDisplayText = (
  status: ClinicalApprovalStatus,
  completedOnDisplay?: string,
  completedByDisplayName?: string
) => {
  switch (status) {
    case ClinicalApprovalStatus.Requested:
      return 'Countersignature Requested'
    case ClinicalApprovalStatus.Reviewed:
      return `Countersigned at ${completedOnDisplay} by ${completedByDisplayName}`
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
  completedOnDisplay?: string,
  completedByDisplayName?: string,
  clickHandler?: () => void
) => {
  const displayText = getBadgeDisplayText(status, completedOnDisplay, completedByDisplayName)
  const backgroundColour = getBadgeBackgroundColour(status)

  return (
    <Container>
      <Badge
        backgroundColour={backgroundColour}
        status={status}
        isClickable={!!clickHandler}
        title={displayText}
        {...(clickHandler && { onClick: clickHandler })}
      >
        {displayText}
      </Badge>
    </Container>
  )
}

const CountersignatureIconAndStatusBadge: FC<ICountersignatureIconAndStatusBadge> = ({
  status,
  completedOnDisplay,
  completedByDisplayName,
  clickHandler,
}: ICountersignatureIconAndStatusBadge) =>
  status ? renderBadge(status, completedOnDisplay, completedByDisplayName, clickHandler) : null

interface ICountersignatureIconAndStatusBadge {
  status?: ClinicalApprovalStatus
  completedOnDisplay?: string
  completedByDisplayName?: string
  clickHandler?: () => void
}

export default CountersignatureIconAndStatusBadge
