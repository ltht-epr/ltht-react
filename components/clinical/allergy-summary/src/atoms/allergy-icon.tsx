import { FC } from 'react'
import styled from '@emotion/styled'
import { Icon } from '@ltht-react/icon'
import { AllergyIntoleranceCriticalityCode, Maybe } from '@ltht-react/types'

const StyledExclamationIcon = styled(Icon)`
  padding-right: 10px;
`

const AllergyIcon: FC<Props> = ({ criticalityCode }) => {
  if (criticalityCode === AllergyIntoleranceCriticalityCode.High) {
    return <StyledExclamationIcon type="exclamation" status="danger" size="medium" />
  }

  if (criticalityCode && criticalityCode === AllergyIntoleranceCriticalityCode.Low) {
    return <StyledExclamationIcon type="exclamation" status="warning" size="medium" />
  }

  return null
}

interface Props {
  criticalityCode?: Maybe<AllergyIntoleranceCriticalityCode>
}

export default AllergyIcon
