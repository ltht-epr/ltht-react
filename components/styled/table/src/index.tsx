import { FC } from 'react'

import { Questionnaire, QuestionnaireResponse, SummaryTableViewType } from '@ltht-react/types'
import HorizontalTable from './atoms/horizontal'
import VerticalTable from './atoms/vertical'

const Table: FC<IProps> = ({ definition, records, orientation = 'vertical' }) => {
  if (!definition.item || definition.item.length === 0) {
    return <div>{`Could not render table. Definition items array was empty.`}</div>
  }

  if (orientation === 'horizontal') {
    return <HorizontalTable definitionItems={definition.item} records={records} />
  }

  return <VerticalTable definitionItems={definition.item} records={records} />
}

interface IProps {
  orientation?: SummaryTableViewType
  definition: Questionnaire
  records: QuestionnaireResponse[]
}

export default Table
