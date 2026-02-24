import {
  AuditEvent,
  AuditEventEntity,
  AuditEventEntityDetail,
  ClinicalApprovalStatus,
  Coding,
  DocumentReference,
  Extension,
  Maybe,
  QuestionnaireResponse,
  TimelineDomainResourceType,
} from '@ltht-react/types'
import Constants from './system-value-constants'
import { parseAndFormatDateStringForDisplay } from '@ltht-react/utils'

// eslint-disable-next-line import/prefer-default-export
export const GetCountersignaturePropsFromTimelineItem = (
  domainResource?: Maybe<AuditEvent | QuestionnaireResponse | DocumentReference>,
  domainResourceType?: TimelineDomainResourceType
): { status?: ClinicalApprovalStatus; completedOnDisplay?: string; completedByDisplayName?: string } => {
  if (!domainResource || !domainResourceType) {
    return {}
  }

  let status: ClinicalApprovalStatus | undefined
  let completedOnDisplay: string | undefined
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
      completedOnDisplay = parseAndFormatDateStringForDisplay(completedOnCode ?? undefined)

      const completedByCode = cdsExtension?.valueCodeableConcept?.coding?.find(
        (coding: Maybe<Coding>) => coding?.system === Constants.CLINICAL_APPROVAL_COMPLETED_BY_DISPLAY_NAME
      )?.code
      completedByDisplayName = completedByCode || undefined
      break
    }

    case TimelineDomainResourceType.AuditEvent: {
      const auditEvent = domainResource as AuditEvent

      const clinicalApprovalEntity = auditEvent.entity?.find((entity: Maybe<AuditEventEntity>) =>
        entity?.detail?.some(
          (detail: Maybe<AuditEventEntityDetail>) => detail?.type === Constants.CLINICAL_APPROVAL_STATUS
        )
      )

      const statusDetail = clinicalApprovalEntity?.detail?.find(
        (detail: Maybe<AuditEventEntityDetail>) => detail?.type === Constants.CLINICAL_APPROVAL_STATUS
      )
      status = statusDetail?.value ? (statusDetail.value.toUpperCase() as ClinicalApprovalStatus) : undefined

      const completedOnDetail = clinicalApprovalEntity?.detail?.find(
        (detail: Maybe<AuditEventEntityDetail>) => detail?.type === Constants.CLINICAL_APPROVAL_COMPLETED_ON
      )
      completedOnDisplay = parseAndFormatDateStringForDisplay(completedOnDetail?.value ?? undefined)

      const completedByDetail = clinicalApprovalEntity?.detail?.find(
        (detail: Maybe<AuditEventEntityDetail>) =>
          detail?.type === Constants.CLINICAL_APPROVAL_COMPLETED_BY_DISPLAY_NAME
      )
      completedByDisplayName = completedByDetail?.value || undefined
      break
    }
    default: {
      status = undefined
      completedOnDisplay = undefined
      completedByDisplayName = undefined
      break
    }
  }

  return {
    status,
    completedOnDisplay,
    completedByDisplayName,
  }
}
