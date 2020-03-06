import React from 'react'

import { MedicationList } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

import { codeableConceptDisplaySummary as displaySummary } from '@ltht-react/utils'

const MedicationSummary: React.FC<Props> = ({ medicationlist = undefined }) => {
  if (!medicationlist) {
    return null
  }

  const meds = new Array<JSX.Element>()

  medicationlist.medicationStatements?.forEach(stmt => {
    const code = stmt?.medication.code
    if (!code) {
      return
    }

    meds.push(<DescriptionListTerm>{displaySummary(code)}</DescriptionListTerm>)
    meds.push(<DescriptionListDescription>{stmt?.dosage?.map(x => x?.text).join(', ')}</DescriptionListDescription>)
  })

  return <DescriptionList>{meds}</DescriptionList>
}

interface Props {
  medicationlist: MedicationList | undefined
}

export default MedicationSummary
