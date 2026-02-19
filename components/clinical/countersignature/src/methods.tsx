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
import { format as dateFormat } from 'date-fns'
import Constants from './system-value-constants'

const formatDateForDisplay = (date: Date, showSeconds = false): string =>
  showSeconds ? dateFormat(date, 'dd-MMM-yyyy, HH:mm:ss') : dateFormat(date, 'dd-MMM-yyyy, HH:mm')

const parseAndFormatDate = (dateString?: string): string | undefined => {
  if (!dateString) return undefined

  try {
    const date = new Date(dateString)
    return isNaN(date.getTime()) ? dateString : formatDateForDisplay(date)
  } catch {
    return dateString
  }
}

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
      completedOnDisplay = parseAndFormatDate(completedOnCode ?? undefined)

      const completedByCode = cdsExtension?.valueCodeableConcept?.coding?.find(
        (coding: Maybe<Coding>) => coding?.system === Constants.CLINICAL_APPROVAL_COMPLETED_BY_DISPLAY_NAME
      )?.code
      completedByDisplayName = completedByCode || undefined
      break
    }

    case TimelineDomainResourceType.AuditEvent: {
      const auditEvent = domainResource as AuditEvent

      const clinicalApprovalEntity = auditEvent.entity?.find((entity) =>
        entity?.detail?.some((detail) => detail?.type === Constants.CLINICAL_APPROVAL_STATUS)
      )

      const statusDetail = clinicalApprovalEntity?.detail?.find(
        (detail) => detail?.type === Constants.CLINICAL_APPROVAL_STATUS
      )
      status = statusDetail?.value ? (statusDetail.value.toUpperCase() as ClinicalApprovalStatus) : undefined

      const completedOnDetail = clinicalApprovalEntity?.detail?.find(
        (detail) => detail?.type === Constants.CLINICAL_APPROVAL_COMPLETED_ON
      )
      completedOnDisplay = parseAndFormatDate(completedOnDetail?.value ?? undefined)

      const completedByDetail = clinicalApprovalEntity?.detail?.find(
        (detail) => detail?.type === Constants.CLINICAL_APPROVAL_COMPLETED_BY_DISPLAY_NAME
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
