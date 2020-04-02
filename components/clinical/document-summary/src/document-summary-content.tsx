import React from 'react'

import { ChevronIcon } from '@ltht-react/icon'

const DocumentSummaryContent: React.FC<Props> = ({
  description = undefined,
  created = undefined,
  source = undefined,
  status = undefined,
  clickable = false,
}) => {
  return (
    <>
      <div>{created}</div>
      <div>{description}</div>
      <div className="source">
        <div>{source}</div>
        <div>{status}</div>
      </div>
      <div>{clickable ? <ChevronIcon direction="right" size="large" /> : null}</div>
    </>
  )
}

interface Props {
  description: string | undefined
  created: string | undefined
  source: string | undefined
  status: string | undefined
  clickable: boolean | undefined
}

export default DocumentSummaryContent
