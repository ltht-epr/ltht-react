import { QuestionnaireResponse, Axis, Questionnaire } from '@ltht-react/types'
import { FC, useMemo } from 'react'
import { Icon } from '@ltht-react/icon'
import { EnsureMaybe, EnsureMaybeArray } from '@ltht-react/utils'
import Table from '../molecules/table'
import mapQuestionnaireDefinitionAndResponsesToTableData, {
  AdminActionsForQuestionnaire,
} from './questionnaire-table-methods'
import { PaginationOptions, PaginationResult, TableOptions } from '../molecules/table-core'

const QuestionnaireTable: FC<IProps> = ({
  definition,
  records,
  headerAxis = 'y',
  staticColumns = 0,
  adminActions,
  fetchData,
  ...props
}) => {
  const tableData = useMemo(() => {
    if (!fetchData) {
      return mapQuestionnaireDefinitionAndResponsesToTableData(
        EnsureMaybe(definition),
        EnsureMaybeArray(records),
        headerAxis,
        adminActions
      )
    }

    return { headers: [], rows: [] }
  }, [headerAxis, definition, records, adminActions, fetchData])

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

  const fetchQuestionnaireData = async (options: PaginationOptions): Promise<PaginationResult> => {
    if (!fetchData) {
      throw new Error('`fetchData` funtion not defined for questionnaire table!')
    }

    const data = await fetchData(options)
    const emptyTableData = {
      headers: [],
      rows: [],
    }

    return {
      tableData:
        (data
          ? mapQuestionnaireDefinitionAndResponsesToTableData(
              data.definition,
              data.records,
              headerAxis,
              data.adminActions
            )
          : emptyTableData) ?? emptyTableData,
      totalCount: data?.totalCount ?? 0,
    }
  }

  return <Table tableData={tableData} fetchData={fetchQuestionnaireData} staticColumns={staticColumns} {...props} />
}

interface IProps {
  definition?: Questionnaire
  records?: QuestionnaireResponse[]
  headerAxis?: Axis
  staticColumns?: 0 | 1 | 2
  adminActions?: AdminActionsForQuestionnaire[]
  tableOptions?: TableOptions
  fetchData?: (options: PaginationOptions) => Promise<QuestionnairePaginationResult>
}

interface QuestionnairePaginationResult {
  definition: Questionnaire
  records: QuestionnaireResponse[]
  adminActions: AdminActionsForQuestionnaire[]
  totalCount: number
}

export default QuestionnaireTable
