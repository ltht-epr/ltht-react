import { Maybe, MedicationRequest } from '@ltht-react/types'
import styled from '@emotion/styled'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
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
  const source = medication?.supportingInformation && medication.supportingInformation[0]
  const status = medication?.extension?.find((extension) => extension?.url.includes('status'))?.valueString

  return (
    <>
      <TopSection>
        <StringDetail term="Status at Discharge" description={status} />
        <AnnotationListDetail term="Changes / Comments" notes={medication?.note} />
        <Seperator />
      </TopSection>

      <CodeableConceptDetail term="Medication" concept={medication?.medicationReference?.code} />
      <DatetimeDetail term="Perscription Date" datetime={medication?.authoredOn} />
      <CodeableConceptDetail term="Form" concept={medication?.medicationReference?.form} />
      <CodeableConceptDetail term="Route" concept={route} />
      <CodeableConceptListDetail term="Indication" concepts={medication?.reasonCode} />
      <ResourceReferenceDetail term="Source" resourceReference={source} />
    </>
  )
}

interface IProps {
  medication: Maybe<MedicationRequest>
}

export default MedicationDetail