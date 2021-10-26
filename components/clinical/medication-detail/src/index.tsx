import { Maybe, MedicationRequest } from '@ltht-react/types'
import styled from '@emotion/styled'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  StringDetail,
} from '@ltht-react/detail'
import { FC } from 'react'

const TopSection = styled.div``

const Seperator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  width: calc(100% + 12px);
  margin: 1rem 0;
`

const MedicationDetail: FC<IProps> = ({ medication }) => {
  const route = medication?.dosageInstruction && medication.dosageInstruction[0]?.route
  const hasChanged = !medication?.medicationReference?.isBrand

  return (
    <>
      <TopSection>
        <StringDetail term="Status at Discharge" description={hasChanged ? 'Changed' : 'Same'} />
        <AnnotationListDetail term="Changes / Comments" notes={medication?.note} />
        <Seperator />
      </TopSection>

      <CodeableConceptDetail term="Medication" concept={medication?.medicationReference?.code} />
      <DatetimeDetail term="Perscription Date" datetime={medication?.authoredOn} />
      <CodeableConceptDetail term="Form" concept={medication?.medicationReference?.form} />
      <CodeableConceptDetail term="Route" concept={route} />
      <CodeableConceptListDetail term="Indication" concepts={medication?.reasonCode} />
    </>
  )
}

interface IProps {
  medication: Maybe<MedicationRequest>
}

export default MedicationDetail
