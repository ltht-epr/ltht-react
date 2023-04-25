import { HTMLAttributes, FC } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { codeableConceptDisplaySummary, getStringExtension } from '@ltht-react/utils'

const StyledFlagTitle = styled.div<IStyledFlagTitleProps>`
  color: ${TEXT_COLOURS.PRIMARY};
  text-align: left;
  ${(props) =>
    props.priority === 'High' &&
    `
    padding-left:2px;
    color: ${TEXT_COLOURS.DANGER};
`}
`

const FlagTitle: FC<Props> = ({ flag: { code, extension } }) => {
  const ext = getStringExtension(extension, 'https://leedsth.nhs.uk/alert/priority') ?? ''
  return <StyledFlagTitle priority={ext}>{codeableConceptDisplaySummary(code)}</StyledFlagTitle>
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

interface IStyledFlagTitleProps {
  priority: string
}

export default FlagTitle
