import { FC } from 'react'
import styled from '@emotion/styled'
import { ExclamationIcon } from '@ltht-react/icon'
import { AllergyIntoleranceCriticalityCode, Maybe } from '@ltht-react/types'

const StyledIcon = styled.div`
  padding-right: 10px;
`

const AllergyIcon: FC<Props> = ({ criticalityCode }) => {
  if (criticalityCode === AllergyIntoleranceCriticalityCode.High) {
    return (
      <StyledIcon>
        <ExclamationIcon status="red" size="medium" />
      </StyledIcon>
    )
  }

  if (criticalityCode && criticalityCode === AllergyIntoleranceCriticalityCode.Low) {
    return (
      <StyledIcon>
        <ExclamationIcon status="amber" size="medium" />
      </StyledIcon>
    )
  }

  return null
}

interface Props {
  criticalityCode?: Maybe<AllergyIntoleranceCriticalityCode>
}

export default AllergyIcon
