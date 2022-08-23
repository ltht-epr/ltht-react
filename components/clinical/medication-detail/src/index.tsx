import { DetailViewType, DosageRelationshipType, Maybe, MedicationRequest } from '@ltht-react/types'
import styled from '@emotion/styled'
import {
  AnnotationListDetail,
  CodeableConceptDetail,
  CodeableConceptListDetail,
  CollapsibleDetailCollection,
  CollapsibleDetailCollectionProps,
  DatetimeDetail,
  NestedListDetail,
  StringDetail,
} from '@ltht-react/type-detail'
import { MedicationDosageInstructions } from '@ltht-react/medication'

import { FC } from 'react'

const TopSection = styled.div``

const Seperator = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.125);
  width: calc(100% + 12px);
  margin: 1rem 0;
`

const MedicationDetail: FC<IProps> = ({ medication, viewType = DetailViewType.Compact }) => {
  const route = medication?.dosageInstruction && medication.dosageInstruction[0]?.route
  const source = medication?.supportingInformation && medication.supportingInformation[0]?.identifier?.value
  const status = medication?.extension?.find((extension) => extension?.url.includes('status'))?.valueString
  const schedule = medication?.dosageInstruction && medication.dosageInstruction[0]?.patientInstruction
  const verificationComment = medication?.note && medication?.note[0]?.text
  const qualifier =
    medication?.dosageInstruction &&
    medication?.dosageInstruction
      .map((dosageInstruction) => dosageInstruction?.additionalInstruction?.map((el) => el?.text).join(', '))
      .join(', ')

  const medicationClasses =
    medication?.dosageRelationship === DosageRelationshipType.And ||
    medication?.dosageRelationship === DosageRelationshipType.Or ||
    medication?.dosageRelationship === DosageRelationshipType.Then
      ? 'medication-dosage-instruction--full-width'
      : 'medication-dosage-instruction'

  return (
    <>
      <TopSection>
        <StringDetail term="Status at Discharge" description={status} />
        <AnnotationListDetail term="Changes / Comments" notes={medication?.note} />
      </TopSection>
      <Seperator />
      <CollapsibleDetailCollection viewType={viewType}>
        <CodeableConceptDetail term="Medication" concept={medication?.medicationReference?.code} />
        <NestedListDetail term="Dosage" className={medicationClasses}>
          <MedicationDosageInstructions
            dosageInstructions={medication?.dosageInstruction}
            reasons={medication?.reasonCode}
            dosageRelationshipType={medication?.dosageRelationship}
          />
        </NestedListDetail>
        <CodeableConceptDetail term="Form" concept={medication?.medicationReference?.form} />
        <CodeableConceptListDetail term="Indication" concepts={medication?.reasonCode} />
        <StringDetail term="Schedule" description={schedule} />
        <StringDetail term="Qualifier" description={qualifier} />
        <CodeableConceptDetail term="Route" concept={route} />
        <DatetimeDetail term="Prescription Date" datetime={medication?.authoredOn} />
        <StringDetail term="Verification Comment" description={verificationComment} />
        <StringDetail term="Source" description={source} />
      </CollapsibleDetailCollection>
    </>
  )
}

interface IProps extends CollapsibleDetailCollectionProps {
  medication: Maybe<MedicationRequest>
}

export default MedicationDetail
