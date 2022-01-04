import { DosageType, Maybe } from '@ltht-react/types'

const medicationTitleSeparator = (dosageInstruction: Maybe<DosageType>): string =>
  (dosageInstruction?.doseQuantity || dosageInstruction?.doseRange) && dosageInstruction?.patientInstruction
    ? ' - '
    : ''

export default medicationTitleSeparator
