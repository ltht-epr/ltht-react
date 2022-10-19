import { FC } from 'react'
import { Questionnaire, QuestionnaireItem, QuestionnaireResponse, SummaryTableViewType } from '@ltht-react/types'
import { EnsureMaybeArray } from '@ltht-react/utils'
import QuestionnaireTable, { CellRender } from './molecules/questionnaire-table'

const Table: FC<IProps> = ({ definition, records, orientation = 'VERTICAL', customRenderCells }) => {
  if (!definition.item || definition.item.length === 0) {
    return <div>Could not render table. Definition items array was empty.</div>
  }

  return (
    <QuestionnaireTable
      definitionItems={EnsureMaybeArray<QuestionnaireItem>(definition.item)}
      records={records}
      orientation={orientation}
      customRenderCells={EnsureMaybeArray<CellRender>(customRenderCells ?? [])}
    />
  )
}

interface IProps {
  orientation?: SummaryTableViewType
  definition: Questionnaire
  records: QuestionnaireResponse[]
  customRenderCells?: CellRender[]
}

export default Table
