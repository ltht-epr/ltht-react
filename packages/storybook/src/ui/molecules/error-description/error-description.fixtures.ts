import { ErrorInfo } from '@ltht-react/root'

export const ErrorMessageOne: ErrorInfo = {
  text: `Unable to fetch data from GraphQL. Field 'ehr' does not exist.`,
  type: 'error',
}

export const ErrorMessageTwo: ErrorInfo = {
  text: `Unable to fetch data from GraphQL. Field 'summaryView' does not exist.`,
  type: 'error',
}

export const ErrorMessageThree: ErrorInfo = {
  text: `Unable to fetch data from GraphQL. Field 'auditEvent' does not exist.`,
  type: 'error',
}

export const WarningMessageOne: ErrorInfo = {
  text: `Some data was missing. QuestionnaireResponses do not contain a rootInstanceIdentifier.`,
  type: 'warning',
}

export const WarningMessageTwo: ErrorInfo = {
  text: `Some data was missing. QuestionnaireResponses do not contain a setGuid.`,
  type: 'warning',
}

export const WarningMessageThree: ErrorInfo = {
  text: `Some data was missing. QuestionnaireResponses do not contain a template name.`,
  type: 'warning',
}

export const ThreeErrors: ErrorInfo[] = [ErrorMessageOne, ErrorMessageTwo, ErrorMessageThree]

export const SixWarningsAndErrors = [
  ErrorMessageOne,
  ErrorMessageTwo,
  ErrorMessageThree,
  WarningMessageOne,
  WarningMessageTwo,
  WarningMessageThree,
]
