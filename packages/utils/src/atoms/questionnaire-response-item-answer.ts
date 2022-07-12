import { QuestionnaireResponseItemAnswer, Maybe } from '@ltht-react/types'

const answerText = (qria?: Maybe<QuestionnaireResponseItemAnswer>): string | null | undefined => qria?.valueString

export default answerText
