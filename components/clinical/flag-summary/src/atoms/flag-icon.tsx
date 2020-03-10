import React from 'react'

import { ExclamationIcon } from '@ltht-react/icon'
import { Flag, FlagStatusCode } from '@ltht-react/types'

const FlagIcon: React.FC<Props> = ({ flag }) => {
  const status = flag.status === FlagStatusCode.Active ? 'red' : 'amber'
  return <ExclamationIcon status={status} size="medium" />
}

interface Props {
  flag: Flag
}

export default FlagIcon
