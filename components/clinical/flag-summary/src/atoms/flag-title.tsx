import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag, FlagStatusCode } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledFlagTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`
const StyledFlagTitleHighlight = styled.div`
  color: ${TEXT_COLOURS.DANGER};
  text-align: left;
`

const FlagTitle: FC<Props> = ({ flag: { code, status }, ...rest }) => {
  if (status === FlagStatusCode.Active) {
    return <StyledFlagTitleHighlight {...rest}>{codeableConceptDisplaySummary(code)}</StyledFlagTitleHighlight>
  }

  return <StyledFlagTitle {...rest}>{codeableConceptDisplaySummary(code)}</StyledFlagTitle>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagTitle
