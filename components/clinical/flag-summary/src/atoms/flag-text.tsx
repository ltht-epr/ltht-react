import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { NarrativeSummary } from '@ltht-react/type-summary'

const StyledFlagText = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const FlagText: FC<Props> = ({ flag: { text }, ...rest }) => (
  <StyledFlagText {...rest}>
    <NarrativeSummary narrative={text} showIfEmpty={false} truncate />
  </StyledFlagText>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagText
