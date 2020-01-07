import React from 'react'

import ExclamationIcon from '@ltht-react/exclamation-icon'
import { Flag, FlagStatusCode } from '@ltht-react/types'

const FlagIcon = ({ flag }: { flag: Flag }) => {
  const status = flag.status === FlagStatusCode.Active ? 'red' : 'amber'
  return <ExclamationIcon status={status} size="medium" />
}

export default FlagIcon
