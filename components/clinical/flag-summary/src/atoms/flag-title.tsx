import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary } from '@ltht-react/utils'

const StyledFlagTitle = styled.div`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
`

const FlagTitle: FC<Props> = ({ flag: { code }, ...rest }) => (
  <StyledFlagTitle {...rest}>{codeableConceptDisplaySummary(code)}</StyledFlagTitle>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagTitle
