import { FC } from 'react'
import styled from '@emotion/styled'
import { CodeableConcept, Maybe } from '@ltht-react/types'

const StyleReason = styled.div`
  font-size: smaller;
  font-style: italic;
`

const MedicationDosageReason: FC<IProps> = ({ reasons }) => {
  if (reasons === undefined || reasons == null || reasons.length === 0) {
    return <></>
  }

  return (
    <>
      {reasons?.map((reason) => (
        <StyleReason>{reason?.text}</StyleReason>
      ))}
    </>
  )
}

interface IProps {
  reasons: Maybe<Array<Maybe<CodeableConcept>>> | undefined
}

export default MedicationDosageReason
