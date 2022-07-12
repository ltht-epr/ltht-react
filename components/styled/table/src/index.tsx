import { FC } from 'react'

import { Questionnaire, QuestionnaireResponse } from '@ltht-react/types'
import HorizontalTable from './atoms/horizontal'
import VerticalTable from './atoms/vertical'

const Table: FC<IProps> = ({ definition, records, orientation = 'vertical' }) => {
  if (!definition.item) {
    return <></>
  }

  if (orientation === 'horizontal') {
    return <HorizontalTable definitionItems={definition.item} records={records} />
  }

  return <VerticalTable definitionItems={definition.item} records={records} />
}

interface IProps {
  orientation?: 'vertical' | 'horizontal'
  definition: Questionnaire
  records: QuestionnaireResponse[]
}

export default Table
