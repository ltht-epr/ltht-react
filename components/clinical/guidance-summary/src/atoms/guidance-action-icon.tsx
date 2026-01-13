import styled from '@emotion/styled'
import Icon from '@ltht-react/icon'
import { RequestGroupAction } from '@ltht-react/types'
import { FC } from 'react'

const StyledIcon = styled(Icon)`
  padding-right: 0.5rem;
`

const GuidanceActionTypeIcon: FC<Props> = ({ action, ...rest }) => {
  const actionCode = action?.code?.find((x) =>
    x?.coding?.some((y) => y?.system === 'https://leedsth.nhs.uk/ehr/guidance-action')
  )?.coding?.[0]

  if (!actionCode?.code) {
    return <StyledIcon type="link" size="large" {...rest} color="white" />
  }

  const parts = actionCode.code.split('/')

  switch (parts[1]) {
    case 'form':
    case 'care-plan':
      return <StyledIcon type="folder-plus" size="large" {...rest} color="white" />
    default:
      return <StyledIcon type="link" size="large" {...rest} color="white" />
  }
}

interface Props {
  action: RequestGroupAction
}

export default GuidanceActionTypeIcon
