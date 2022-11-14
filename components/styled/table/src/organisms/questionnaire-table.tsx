import { QuestionnaireResponse, Axis, Questionnaire } from '@ltht-react/types'
import { FC, useMemo } from 'react'
import { Icon } from '@ltht-react/icon'
import mapQuestionnaireDefinitionAndResponsesToTableData, {
  AdminActionsForQuestionnaire,
} from './questionnaire-table-methods'
import Table from '../molecules/table'

const QuestionnaireTable: FC<IProps> = ({ definition, records, headerAxis = 'y', staticColumns = 0, adminActions }) => {
  const tableData = useMemo(
    () => mapQuestionnaireDefinitionAndResponsesToTableData(definition, records, headerAxis, adminActions),
    [headerAxis, definition, records, adminActions]
  )

  // TODO: Replace this fragment with a properly styled error component.
  // Maybe this could be a re-usable atom?
  if (!tableData) {
    return (
      <>
        <Icon type="exclamation" size="large" status="red" />
        <div>An error occurred whilst loading this table.</div>
      </>
    )
  }

  return <Table tableData={tableData} staticColumns={staticColumns} />
}

interface IProps {
  definition: Questionnaire
  records: QuestionnaireResponse[]
  headerAxis?: Axis
  adminActions?: AdminActionsForQuestionnaire[]
  staticColumns?: 0 | 1 | 2
}

export default QuestionnaireTable
