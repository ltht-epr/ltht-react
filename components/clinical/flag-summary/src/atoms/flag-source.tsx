import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { TEXT_COLOURS } from '@ltht-react/styles'
import { Flag } from '@ltht-react/types'
import { metadataSourceSummaryText } from '@ltht-react/utils'

const StyledFlagSource = styled.div`
  color: ${TEXT_COLOURS.SECONDARY};
  text-align: right;
`

const FlagSource: React.FC<Props> = ({ flag: { metadata }, ...rest }) => (
  <StyledFlagSource {...rest}>{metadataSourceSummaryText(metadata)}</StyledFlagSource>
)

interface Props extends HTMLAttributes<HTMLDivElement> {
  flag: Flag
}

export default FlagSource
