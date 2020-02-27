import React from 'react'

import { MedicationList } from '@ltht-react/types'

const MedicationSummary: React.FC<Props> = ({ medicationlist = undefined }) => {
  if (!medicationlist) {
    return <div>No Data</div>
  }

  const meds = medicationlist.medicationStatements?.map(x => {
    const coding = x?.medication.code?.coding
    if (!coding) {
      return null
    }

    return <div>{coding[0]?.display}</div>
  })

  return <div>{meds}</div>
}

interface Props {
  medicationlist: MedicationList | undefined
}

export default MedicationSummary
