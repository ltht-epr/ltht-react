import { FC } from 'react'
import styled from '@emotion/styled'
import { CommentIcon } from '@ltht-react/icon'
import Badge from '@ltht-react/badge'

const StyledMedicationAdditionalInfo = styled.div`
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
`

const StyledBadge = styled(Badge)`
  margin-right: 0.5rem;
`

const MedicationAdditionalInfo: FC<IProps> = ({ hasChanged, hasVerificationComments }) => {
  if (!hasChanged && !hasVerificationComments) return null

  return (
    <StyledMedicationAdditionalInfo>
      {hasChanged && <StyledBadge>Changed</StyledBadge>}
      {hasVerificationComments && <CommentIcon size="large" />}
    </StyledMedicationAdditionalInfo>
  )
}

interface IProps {
  hasChanged: boolean
  hasVerificationComments?: boolean | null
}

export default MedicationAdditionalInfo
