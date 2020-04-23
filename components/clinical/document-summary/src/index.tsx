/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'
import { CARD_BORDER_COLOUR, CARD_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'
import { UnorderedList } from '@ltht-react/list'
import DocumentSummaryItem from './document-summary-item'

const styles = {
  root: css`
    margin-right: -0.5rem;
    > ul li {
      border-top: 1px solid ${CARD_BORDER_COLOUR};
      padding-top: 0.25rem;
      &:hover {
        cursor: pointer;
        background: ${CARD_LIST_ITEM_BACKGROUND_HOVER};
      }
      > div {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-bottom: 0.25rem;
        padding-right: 0.5rem;
      }
    }
  `,
}

const DocumentSummary: React.FC<Props> = ({ documents, clickHandler }) => {
  if (!documents) {
    return null
  }

  const items = documents.map(doc => <DocumentSummaryItem key={doc.id} document={doc} clickHandler={clickHandler} />)

  return (
    <div css={styles.root}>
      <UnorderedList>{items}</UnorderedList>
    </div>
  )
}

interface Props {
  documents?: DocumentReference[]
  clickHandler?(document: DocumentReference): void
}

export default DocumentSummary
