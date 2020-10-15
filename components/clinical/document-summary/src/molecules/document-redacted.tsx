/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import Styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'
import { RedactedDescription } from '@ltht-react/summary'

import Date from '../atoms/document-date'

const StyledDescription = Styled.div`
  flex: 1;
  text-align: right;
`
const StyledDate = Styled.div`
  flex: 1;
`

const DocumentRedacted: React.FC<Props> = ({ document }) => {
  return (
    <React.Fragment>
      <StyledDate>
        <Date document={document} />
      </StyledDate>
      <StyledDescription>
        <RedactedDescription />
      </StyledDescription>
    </React.Fragment>
  )
}

interface Props {
  document: DocumentReference
}

export default DocumentRedacted
