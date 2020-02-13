import React from 'react'
import SummaryItem from '@ltht-react/summary-item'
import { AllergyIntolerance, AllergyIntoleranceCriticalityCode } from '@ltht-react/types'
import ExclamationIcon from '@ltht-react/exclamation-icon'
import {
  codeableConceptDisplaySummary,
  codeableConceptCodeSummary,
  allergyIntoleranceCategoryCodeDisplaySummary,
  titleCase,
  partialDateTimeText,
} from '@ltht-react/utils'

const AllergySummaryItem: React.FC<Props> = ({ allergy }) => {
  // icon
  let icon = <ExclamationIcon status="default" size="medium" />
  if (allergy.criticality && allergy.criticality === AllergyIntoleranceCriticalityCode.High) {
    icon = <ExclamationIcon status="red" size="medium" />
  }

  // description
  const dvalues = []
  const codeSummary = codeableConceptCodeSummary(allergy.code)
  if (codeSummary && codeSummary.length > 0) dvalues.push(codeSummary)
  const categorySummary = allergy.category && allergyIntoleranceCategoryCodeDisplaySummary(allergy.category)
  if (categorySummary && categorySummary.length > 0) dvalues.push(categorySummary)
  if (allergy.type) dvalues.push(titleCase(allergy.type))
  const description = dvalues.join(' - ')

  // status
  const svalues = []

  if (allergy.clinicalStatus) svalues.push(titleCase(allergy.clinicalStatus))
  if (allergy.verificationStatus) svalues.push(titleCase(allergy.verificationStatus))

  const status = svalues.join(' - ')

  return (
    <SummaryItem
      icon={icon}
      primaryHeader={codeableConceptDisplaySummary(allergy.code)}
      secondaryHeader={description}
      primaryFooter={partialDateTimeText(allergy.assertedDate)}
      secondaryFooter={status}
    />
  )
}

interface Props {
  allergy: AllergyIntolerance
}

export default AllergySummaryItem
