import { FC } from 'react'
import styled from '@emotion/styled'
import Icon from '@ltht-react/icon'
import Badge from '@ltht-react/badge'
import { Maybe } from '@ltht-react/types'

const StyledMedicationAdditionalInfo = styled.div`
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
      {hasVerificationComments && <Icon type="comment" size="medium" title="Has Additional Comments" />}
    </StyledMedicationAdditionalInfo>
  )
}

interface IProps {
  hasChanged?: Maybe<boolean>
  hasVerificationComments?: boolean | null
}

export default MedicationAdditionalInfo
