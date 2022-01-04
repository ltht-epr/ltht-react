import { FC } from 'react'

import { QuestionnaireResponse } from '@ltht-react/types'
import { RedactedDescription } from '@ltht-react/type-summary'

import AuthorInfo from '../atoms/author-info'

const Redacted: FC<IProps> = ({ questionnaire }) => (
  <>
    <RedactedDescription style={{ marginBottom: '0.5rem' }} />
    <AuthorInfo author={questionnaire.author} authoredOn={questionnaire.authored} />
  </>
)

interface IProps {
  questionnaire: QuestionnaireResponse
}

export default Redacted
