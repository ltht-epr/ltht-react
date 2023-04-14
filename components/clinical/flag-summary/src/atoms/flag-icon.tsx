import { FC, HTMLAttributes } from 'react'
import { ExclamationIcon } from '@ltht-react/icon'
import { Flag } from '@ltht-react/types'

const FlagIcon: FC<Props> = ({ flag: { extension } }) => {
  const ext = extension?.find((e) => e?.url === 'https://leedsth.nhs.uk/alert/priority')
  if (ext !== null && ext?.valueString === 'High') {
    return <ExclamationIcon status="red" size="medium" />
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagIcon
