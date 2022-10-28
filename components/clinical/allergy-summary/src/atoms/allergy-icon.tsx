import { FC } from 'react'
import styled from '@emotion/styled'
import { ExclamationIcon } from '@ltht-react/icon'
import { AllergyIntoleranceCriticalityCode, Maybe } from '@ltht-react/types'

const StyledExclamationIcon = styled(ExclamationIcon)`
  padding-right: 10px;
`

const AllergyIcon: FC<Props> = ({ criticalityCode }) => {
  if (criticalityCode === AllergyIntoleranceCriticalityCode.High) {
    return <StyledExclamationIcon status="red" size="medium" />
  }

  if (criticalityCode && criticalityCode === AllergyIntoleranceCriticalityCode.Low) {
    return <StyledExclamationIcon status="amber" size="medium" />
  }

  return null
}

interface Props {
  criticalityCode?: Maybe<AllergyIntoleranceCriticalityCode>
}

export default AllergyIcon
