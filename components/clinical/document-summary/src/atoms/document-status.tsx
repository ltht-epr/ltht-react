/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { TEXT_COLOURS } from '@ltht-react/styles'
import { titleCase } from '@ltht-react/utils'
import { DocumentReference } from '@ltht-react/types'

const StyledStatus = Styled.div`
  color: ${TEXT_COLOURS.SECONDARY.VALUE};
`

const DocumentStatus: React.FC<Props> = ({ document }) => {
  const { status } = document

  if (!status) return <React.Fragment />

  return <StyledStatus>{titleCase(status)}</StyledStatus>
}

interface Props {
  document: DocumentReference
}

export default DocumentStatus
