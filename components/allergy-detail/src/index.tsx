/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'

import { AllergyIntolerance } from '@ltht-react/types'
import { Widget, WidgetHeader, WidgetBody } from '@ltht-react/widget'
import SubHeader from '@ltht-react/sub-header'
import AllergyDetailItem from './molecules/allergy-detail-item'

const AllergyDetail: React.FC<Props> = ({ title, allergy }) => {
  return (
    <Widget>
      <WidgetHeader>
        <SubHeader>{title}</SubHeader>
      </WidgetHeader>
      <WidgetBody>
        <AllergyDetailItem allergy={allergy} />
      </WidgetBody>
    </Widget>
  )
}

interface Props {
  title?: string
  allergy: AllergyIntolerance
}

export default AllergyDetail
