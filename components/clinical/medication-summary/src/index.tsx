import React from 'react'

import { MedicationList } from '@ltht-react/types'
import { DescriptionList, DescriptionListTerm, DescriptionListDescription } from '@ltht-react/description-list'

import { codeableConceptDisplaySummary as displaySummary } from '@ltht-react/utils'

const MedicationSummary: React.FC<Props> = ({ medicationlist = undefined }) => {
  if (!medicationlist) {
    return <div>No Data</div>
  }

  const meds2 = new Array<JSX.Element>()

  medicationlist.medicationStatements?.forEach(stmt => {
    const code = stmt?.medication.code
    if (!code) {
      return
    }

    meds2.push(<DescriptionListTerm>{displaySummary(code)}</DescriptionListTerm>)
    meds2.push(<DescriptionListDescription>{stmt?.dosage?.map(x => x?.text).join(', ')}</DescriptionListDescription>)
  })

  return <DescriptionList>{meds2}</DescriptionList>
}

interface Props {
  medicationlist: MedicationList | undefined
}

export default MedicationSummary
