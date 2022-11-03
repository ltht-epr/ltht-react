import { QuestionnaireResponse, Axis, Questionnaire } from '@ltht-react/types'
import { FC, useMemo } from 'react'
import { Icon } from '@ltht-react/icon'
import Table from '../molecules/table'
import mapQuestionnaireDefinitionAndResponsesToTableData from './questionnaire-table-methods'

const QuestionnaireTable: FC<IProps> = ({ definition, records, headerAxis = 'y' }) => {
  const tableData = useMemo(() => mapQuestionnaireDefinitionAndResponsesToTableData(definition, records, headerAxis), [
    headerAxis,
    definition,
    records,
  ])

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

  return <Table tableData={tableData} />
}

interface IProps {
  definition: Questionnaire
  records: QuestionnaireResponse[]
  headerAxis?: Axis
}

export default QuestionnaireTable