/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { Flag } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import FlagDetailItem from './molecules/flag-detail-item'

const FlagDetail: React.FC<Props> = ({ title, flag }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
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
