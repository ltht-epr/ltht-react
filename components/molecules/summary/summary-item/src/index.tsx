import React from 'react'

import SummaryItemBody from '@ltht-react/summary-item-body'
import SummaryItemHeader from '@ltht-react/summary-item-header'
import SummaryItemFooter from '@ltht-react/summary-item-footer'
import SummaryItemIcon from '@ltht-react/summary-item-icon'

const SummaryItem: React.FC<Props> = ({
  handleClick,
  icon,
  primaryHeader,
  secondaryHeader,
  primaryFooter,
  secondaryFooter,
}) => {
  return (
    <SummaryItemBody handleClick={handleClick}>
      <SummaryItemIcon>{icon}</SummaryItemIcon>
      <SummaryItemHeader primary={primaryHeader} secondary={secondaryHeader} />
      <SummaryItemFooter primary={primaryFooter} secondary={secondaryFooter} />
    </SummaryItemBody>
  )
}

interface Props {
  icon?: JSX.Element | null
  primaryHeader?: string | undefined
  secondaryHeader?: string | undefined
  primaryFooter?: string | undefined
  secondaryFooter?: string | undefined
  handleClick?(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

export default SummaryItem
