import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, getStringExtension } from '@ltht-react/utils'

const StyledFlagTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`
const StyledFlagTitleHighlight = styled.div`
  color: ${TEXT_COLOURS.DANGER};
  text-align: left;
  padding-left: 2px;
`

const FlagTitle: FC<Props> = ({ flag: { code, extension }, ...rest }) => {
  const ext = getStringExtension(extension, 'https://leedsth.nhs.uk/alert/priority')
  if (ext === 'High') {
    return <StyledFlagTitleHighlight {...rest}>{codeableConceptDisplaySummary(code)}</StyledFlagTitleHighlight>
  }

  return <StyledFlagTitle {...rest}>{codeableConceptDisplaySummary(code)}</StyledFlagTitle>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagTitle
