import {
  AuditEvent,
  ClinicalApprovalStatus,
  Coding,
  DocumentReference,
  Extension,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import Constants from './system-value-constants'

// eslint-disable-next-line import/prefer-default-export
export const GetCountersignaturePropsFromTimelineItem = (
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>,
  domainResourceType?: TimelineDomainResourceType
): { status?: ClinicalApprovalStatus; completedOn?: string; completedByDisplayName?: string } => {
  if (!domainResource || !domainResourceType) {
    return {}
  }

  let status: ClinicalApprovalStatus | undefined
  let completedOn: string | undefined
  let completedByDisplayName: string | undefined

  switch (domainResourceType) {
    case TimelineDomainResourceType.QuestionnaireResponse: {
      const cdsExtension = domainResource.extension?.find(
        (ext: Maybe<Extension>) => ext?.url === Constants.CDS_EXTENSION
      )

      const statusCode = cdsExtension?.valueCodeableConcept?.coding?.find(
        (coding: Maybe<Coding>) => coding?.system === Constants.CLINICAL_APPROVAL_STATUS
      )?.code
      status = statusCode ? (statusCode.toUpperCase() as ClinicalApprovalStatus) : undefined

      const completedOnCode = cdsExtension?.valueCodeableConcept?.coding?.find(
        (coding: Maybe<Coding>) => coding?.system === Constants.CLINICAL_APPROVAL_COMPLETED_ON
      )?.code
      completedOn = completedOnCode || undefined

      const completedByCode = cdsExtension?.valueCodeableConcept?.coding?.find(
        (coding: Maybe<Coding>) => coding?.system === Constants.CLINICAL_APPROVAL_COMPLETED_BY_DISPLAY_NAME
      )?.code
      completedByDisplayName = completedByCode || undefined
      break
    }

    case TimelineDomainResourceType.AuditEvent: {
      status = undefined
      completedOn = undefined
      completedByDisplayName = undefined
      break
    }
    default: {
      status = undefined
      completedOn = undefined
      completedByDisplayName = undefined
      break
    }
  }

  return {
    status,
    completedOn,
    completedByDisplayName,
  }
}
