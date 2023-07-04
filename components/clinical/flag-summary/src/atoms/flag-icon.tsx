import { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { Icon } from '@ltht-react/icon'
import { getStringExtension } from '@ltht-react/utils'
import { Flag } from '@ltht-react/types'

const StyledFlagIcon = styled.div`
  margin-bottom: 0px;
`

const FlagIcon: FC<Props> = ({ flag: { extension, ...rest } }) => {
  const ext = getStringExtension(extension, 'https://leedsth.nhs.uk/alert/priority')
  if (ext === 'High') {
    return (
      <StyledFlagIcon {...rest}>
        <Icon type="exclamation" status="danger" size="medium" />
      </StyledFlagIcon>
    )
  }

  return <></>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagIcon
