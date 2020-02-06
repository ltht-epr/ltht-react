/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import { DetailHeader } from '@ltht-react/detail'
import FlagDetailItem from './molecules/flag-detail-item'

const FlagDetail: React.FC<Props> = ({ title, flag }) => {
  return (
    <Widget>
      <WidgetHeader>
        <DetailHeader>{title}</DetailHeader>
      </WidgetHeader>
      <WidgetBody>
        <FlagDetailItem flag={flag} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title?: string
  flag: Flag
}

export default FlagDetail
