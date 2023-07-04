import { QuestionnaireResponse, Axis, Questionnaire } from '@ltht-react/types'
import { FC, useMemo } from 'react'
import { Icon } from '@ltht-react/icon'
import Table, { IPaginationProps, ITableDimensionProps } from '../molecules/table'
import mapQuestionnaireDefinitionAndResponsesToTableData, {
  AdminActionsForQuestionnaire,
} from './questionnaire-table-methods'

const QuestionnaireTable: FC<IProps> = ({
  definition,
  records,
  headerAxis = 'y',
  staticColumns = 0,
  adminActions,
  pageSize = 10,
  currentPage = 1,
  keepPreviousData = true,
  ...props
}) => {
  const tableData = useMemo(
    () => mapQuestionnaireDefinitionAndResponsesToTableData(definition, records, headerAxis, adminActions),
    [headerAxis, definition, records, adminActions]
  )

  // TODO: Replace this fragment with a properly styled error component.
  // Maybe this could be a re-usable atom?
  if (!tableData) {
    return (
      <>
        <Icon type="exclamation" size="large" color="red" />
        <div>An error occurred whilst loading this table.</div>
      </>
    )
  }

  return (
    <Table
      tableData={tableData}
      staticColumns={staticColumns}
      headerAxis={headerAxis}
      pageSize={pageSize}
      currentPage={currentPage}
      keepPreviousData={keepPreviousData}
      {...props}
    />
  )
}

interface IProps extends IPaginationProps, ITableDimensionProps {
  definition: Questionnaire
  records: QuestionnaireResponse[]
  headerAxis?: Axis
  adminActions?: AdminActionsForQuestionnaire[]
  staticColumns?: 0 | 1 | 2
}

export default QuestionnaireTable
