import { FC } from 'react'

import { MedicationList } from '@ltht-react/types'
import DescriptionList from '@ltht-react/description-list'

import { codeableConceptDisplaySummary as displaySummary } from '@ltht-react/utils'

const MedicationSummary: FC<Props> = ({ medicationlist = undefined }) => {
  if (!medicationlist) {
    return null
  }

  const meds = new Array<JSX.Element>()

  medicationlist.medicationStatements?.forEach(stmt => {
    const code = stmt?.medication.code
    if (!code) {
      return
    }

    meds.push(<DescriptionList.Term>{displaySummary(code)}</DescriptionList.Term>)
    meds.push(<DescriptionList.Description>{stmt?.dosage?.map(x => x?.text).join(', ')}</DescriptionList.Description>)
  })

  return <DescriptionList>{meds}</DescriptionList>
}

interface Props {
  medicationlist: MedicationList | undefined
}

export default MedicationSummary
