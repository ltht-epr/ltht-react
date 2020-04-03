import React from 'react'

import { ChevronIcon } from '@ltht-react/icon'

const DocumentSummaryContent: React.FC<Props> = ({
  description = undefined,
  created = undefined,
  source = undefined,
  status = undefined,
  clickHandler,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    e.preventDefault()
    clickHandler && clickHandler()
  }

  return (
    <div onClick={clickHandler && handleClick}>
      <div>{created}</div>
      <div>{description}</div>
      <div className="source">
        <div>{source}</div>
        <div>{status}</div>
      </div>
      <div>{clickHandler ? <ChevronIcon direction="right" size="large" /> : null}</div>
    </div>
  )
}

interface Props {
  description?: string
  created?: string
  source?: string
  status?: string
  clickHandler?(): void
}

export default DocumentSummaryContent
