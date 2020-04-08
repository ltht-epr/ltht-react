/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

import { DocumentReference } from '@ltht-react/types'
import { CARD_BORDER_COLOUR, TEXT_COLOURS, CARD_LIST_ITEM_BACKGROUND_HOVER } from '@ltht-react/styles'
import { UnorderedList, ListItem } from '@ltht-react/list'
import DocumentSummaryItem from './document-summary-item'
import DocumentSummaryContent from './document-summary-content'

const styles = {
  root: css`
    > ul li:first-of-type {
      font-weight: bold;
    }
    > ul li:not(:first-of-type) {
      border-top: 1px solid ${CARD_BORDER_COLOUR};
      padding-top: 0.25rem;
      &:hover {
        cursor: pointer;
        background: ${CARD_LIST_ITEM_BACKGROUND_HOVER};
      }
    }
    > ul li > div {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      padding-bottom: 0.25rem;
      padding-right: 0.5rem;
      > div {
        flex: auto;
        padding-left: 0.75rem;
      }
      > div:first-of-type {
        flex: 0 0 5em;
        padding-left: 0;
      }
      > div.source {
        flex: 0 0 12em;
        > div:last-of-type {
          color: ${TEXT_COLOURS.SECONDARY.VALUE};
          font-weight: normal;
        }
      }
      > div:last-of-type {
        flex: 0 0 1.6em;
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
      <UnorderedList>
        <ListItem key="0">
          <DocumentSummaryContent key="1" created="Created" description="Description" source="Source" status="Status" />
        </ListItem>
        {items}
      </UnorderedList>
    </div>
  )
}

interface Props {
  documents?: DocumentReference[]
  clickHandler?(document: DocumentReference): void
}

export default DocumentSummary
