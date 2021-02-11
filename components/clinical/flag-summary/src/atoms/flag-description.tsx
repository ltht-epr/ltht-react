import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, codeableConceptCodeSummary } from '@ltht-react/utils'

const StyledFlagDescription = styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
  text-align: left;
  font-size: smaller;
  padding-top: 0.25rem;
`

const FlagDescription: FC<Props> = ({ flag: { code, category }, ...rest }) => {
  const values = []

  const codeSummary = codeableConceptCodeSummary(code)
  if (codeSummary && codeSummary.length > 0) values.push(codeSummary)

  const categorySummary = category && codeableConceptDisplaySummary(category)
  if (categorySummary && categorySummary.length > 0) values.push(categorySummary)

  return <StyledFlagDescription {...rest}>{values.join(' - ')}</StyledFlagDescription>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagDescription
