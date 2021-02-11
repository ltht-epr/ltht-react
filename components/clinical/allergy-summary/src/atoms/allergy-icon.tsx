import { FC } from 'react'
import { ExclamationIcon } from '@ltht-react/icon'
import { AllergyIntoleranceCriticalityCode } from '@ltht-react/types'

const AllergyIcon: FC<Props> = ({ criticalityCode }) => {
  if (criticalityCode && criticalityCode === AllergyIntoleranceCriticalityCode.High) {
    return <ExclamationIcon status="red" size="medium" />
  }
  return <ExclamationIcon status="default" size="medium" />
}

interface Props {
  criticalityCode: AllergyIntoleranceCriticalityCode | null | undefined
}

export default AllergyIcon
