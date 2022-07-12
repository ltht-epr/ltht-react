import { FC } from 'react'

import { Questionnaire, QuestionnaireResponse } from '@ltht-react/types'
import HorizontalTable from './atoms/horizontal'
import VerticalTable from './atoms/vertical'

const Table: FC<IProps> = ({ definition, records, orientation = 'vertical' }) => {
  if (orientation === 'horizontal') {
    return <HorizontalTable definition={definition} records={records} />
  }

  return <VerticalTable definition={definition} records={records} />
}

interface IProps {
  orientation?: 'vertical' | 'horizontal'
  definition: Questionnaire
  records: QuestionnaireResponse[]
}

export default Table
