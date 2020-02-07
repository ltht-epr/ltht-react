/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { AllergyIntolerance } from '@ltht-react/types'
import {
  DetailList,
  DetailListItemDateTime,
  DetailListItemCodeableConceptDisplay,
  DetailListItemString,
  DetailListItemResourceReference,
} from '@ltht-react/detail'

const AllergyDetailItem: React.FC<Props> = ({ allergy }) => {
  return (
    <DetailList>
      <DetailListItemResourceReference tag="Asserter" resourceReference={allergy?.asserter} />
      <DetailListItemDateTime tag="Asserted Date" datetime={allergy?.assertedDate} />
      <DetailListItemCodeableConceptDisplay tag="Code" concept={allergy?.code} />
      <DetailListItemString tag="Category" string={allergy?.category?.toString()} />
    </DetailList>
  )
}

//     assertedDate?: Maybe<PartialDateTime>;
//     asserter?: Maybe<ResourceReference>;
//     category?: Maybe<Array<Maybe<AllergyIntoleranceCategoryCode>>>;
//     clinicalStatus: AllergyIntoleranceClinicalStatusCode;
//     code: CodeableConcept;
//     criticality?: Maybe<AllergyIntoleranceCriticalityCode>;
//     extension?: Maybe<Array<Maybe<Extension>>>;
//     id: Scalars['ID'];
//     identifier?: Maybe<Array<Maybe<Identifier>>>;
//     lastOccurrence?: Maybe<PartialDateTime>;
//     metadata: Metadata;
//     note?: Maybe<Array<Maybe<Annotation>>>;
//     onSet?: Maybe<AllergyIntoleranceOnSet>;
//     reaction?: Maybe<Array<Maybe<AllergyIntoleranceReaction>>>;
//     recorder?: Maybe<ResourceReference>;
//     text?: Maybe<Narrative>;
//     type?: Maybe<AllergyIntoleranceTypeCode>;
//     verificationStatus?: Maybe<AllergyIntoleranceVerificationStatusCode>;

interface Props {
  allergy: AllergyIntolerance
}

export default AllergyDetailItem
