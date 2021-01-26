import React from 'react'
import styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'
import { RedactedDescription } from '@ltht-react/summary'

import Date from '../atoms/document-date'

const StyledDescription = styled.div`
  flex: 1;
  text-align: right;
`
const StyledDate = styled.div`
  flex: 1;
`

const DocumentRedacted: React.FC<Props> = ({ document }) => (
  <>
    <StyledDate>
      <Date document={document} />
    </StyledDate>
    <StyledDescription>
      <RedactedDescription />
    </StyledDescription>
  </>
)

interface Props {
  document: DocumentReference
}

export default DocumentRedacted
