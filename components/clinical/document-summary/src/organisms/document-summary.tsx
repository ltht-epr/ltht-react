import React from 'react'
import styled from '@emotion/styled'

import { DocumentReference } from '@ltht-react/types'

import Date from '../atoms/document-date'
import Description from '../atoms/document-description'
import Source from '../atoms/document-source'
import Status from '../atoms/document-status'
import Redacted from '../molecules/document-redacted'

const StyledSummary = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledDate = styled.div``

const StyledDescription = styled.div`
  flex-grow: 1;
  margin-left: 0.5rem;
`

const StyledSource = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`

const DocumentSummary: React.FC<Props> = ({ document }) => {
  if (document.metadata.isRedacted) {
    return (
      <StyledSummary>
        <Redacted document={document} />
      </StyledSummary>
    )
  }

  return (
    <StyledSummary>
      <StyledDate>
        <Date document={document} />
      </StyledDate>
      <StyledDescription>
        <Description document={document} />
      </StyledDescription>
      <StyledSource>
        <Source document={document} />
        <Status document={document} />
      </StyledSource>
    </StyledSummary>
  )
}

interface Props {
  document: DocumentReference
}

export default DocumentSummary
