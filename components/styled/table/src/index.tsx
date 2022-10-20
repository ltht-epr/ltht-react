import { FC } from 'react'
import { Questionnaire, QuestionnaireItem, QuestionnaireResponse, SummaryTableViewType } from '@ltht-react/types'
import { EnsureMaybeArray } from '@ltht-react/utils'
import QuestionnaireTable from './molecules/questionnaire-table'
import GenericQuestionnaireTable from './molecules/generic-questionnaire-table'
import { TableData } from './atoms/table'

interface IProps {
  orientation?: SummaryTableViewType
  definition: Questionnaire
  records: QuestionnaireResponse[]
}

interface IGenericTableProps {
  definition: Questionnaire
  records: QuestionnaireResponse[]
  mapToTableData: (colItems: QuestionnaireItem[], rowItems: QuestionnaireResponse[]) => TableData
}

const Table: FC<IProps> = ({ definition, records, orientation = 'VERTICAL' }) => {
  if (!definition.item || definition.item.length === 0) {
    return <div>Could not render table. Definition items array was empty.</div>
  }

  return (
    <QuestionnaireTable
      definitionItems={EnsureMaybeArray<QuestionnaireItem>(definition.item)}
      records={records}
      orientation={orientation}
    />
  )
}

export const GenericTable: FC<IGenericTableProps> = ({ definition, records, mapToTableData }) => {
  if (!definition.item || definition.item.length === 0) {
    return <div>Could not render table. Definition items array was empty.</div>
  }

  if (!mapToTableData) {
    return <div>Could not render table. Mapping method not supplied.</div>
  }

  return (
    <GenericQuestionnaireTable
      definitionItems={EnsureMaybeArray<QuestionnaireItem>(definition.item)}
      records={records}
      mapToTableData={mapToTableData}
    />
  )
}

export default Table
