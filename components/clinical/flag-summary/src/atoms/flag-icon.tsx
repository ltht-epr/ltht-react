import { FC, HTMLAttributes } from 'react'
import { ExclamationIcon } from '@ltht-react/icon'
import { Flag, FlagStatusCode } from '@ltht-react/types'

const FlagIcon: FC<Props> = ({ flag: { status } }) => {
  if (status === FlagStatusCode.Active) {
    return <ExclamationIcon status="red" size="medium" />
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagIcon
