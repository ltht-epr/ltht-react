/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Flag } from '@ltht-react/types'
import {
  DetailList,
  DetailListItemPeriod,
  DetailListItemResourceReference,
  DetailListItemString,
  DetailListItemCodeableConceptDisplay,
  DetailListItemNarrativeText,
} from '@ltht-react/detail-list'

const FlagDetailItem: React.FC<Props> = ({ flag }) => {
  return (
    <DetailList>
      <DetailListItemCodeableConceptDisplay tag="Code" concept={flag?.code} />
      <DetailListItemString tag="Status" string={flag.status.toString()} />
      <DetailListItemCodeableConceptDisplay tag="Category" concept={flag?.category} />
      <DetailListItemPeriod period={flag?.period} />
      <DetailListItemNarrativeText narrative={flag?.text} />
      <DetailListItemResourceReference tag="Author" resourceReference={flag?.author} />
    </DetailList>
  )
}

interface Props {
  flag: Flag
}

export default FlagDetailItem
