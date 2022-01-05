import { CodeSystem, Maybe, MedicationRequest } from '@ltht-react/types'
import styled from '@emotion/styled'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  DatetimeDetail,
  ResourceReferenceDetail,
  StringDetail,
} from '@ltht-react/type-detail'
import { MedicationDosageInstructions } from '@ltht-react/medication'
import DescriptionList from '@ltht-react/description-list'

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
  const schedule = medication?.dosageInstruction && medication.dosageInstruction[0]?.patientInstruction
  const type = medication?.metadata.tag?.find((tag) => tag?.system === CodeSystem.MedicationTypeIdentifier)?.display
  const verificationComment = medication?.note && medication?.note[0]?.text
  const qualifier = (medication?.dosageInstruction && medication.dosageInstruction[0]?.additionalInstruction)
    ?.map((el) => el?.text)
    .join(', ')

  return (
    <>
      <TopSection>
        <StringDetail term="Status at Discharge" description={status} />
        <AnnotationListDetail term="Changes / Comments" notes={medication?.note} />
        <Seperator />
      </TopSection>
      <CodeableConceptDetail term="Medication" concept={medication?.medicationReference?.code} />
      <DescriptionList>
        <DescriptionList.Term>Dosage</DescriptionList.Term>
        <DescriptionList.Description>
          <MedicationDosageInstructions
            dosageInstructions={medication?.dosageInstruction}
            reasons={medication?.reasonCode}
            type={type}
          />
        </DescriptionList.Description>
      </DescriptionList>
      <CodeableConceptDetail term="Form" concept={medication?.medicationReference?.form} />
      <CodeableConceptListDetail term="Indication" concepts={medication?.reasonCode} />
      <StringDetail term="Schedule" description={schedule} />
      <StringDetail term="Qualifier" description={qualifier} />
      <CodeableConceptDetail term="Route" concept={route} />
      <DatetimeDetail term="Perscription Date" datetime={medication?.authoredOn} />
      <StringDetail term="Verification Comment" description={verificationComment} />
      <ResourceReferenceDetail term="Source" resourceReference={source} />
    </>
  )
}

interface IProps {
  medication: Maybe<MedicationRequest>
}

export default MedicationDetail
