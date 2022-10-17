import QuestionnaireTable, {
  mapQuestionnaireObjectsToHorizontalTableData,
  mapQuestionnaireObjectsToVerticalTableData,
} from '@ltht-react/table/src/molecules/questionnaire-table'
import { render, screen } from '@testing-library/react'
import {
  summaryDefinitionOneHorizontalTableData,
  summaryDefinitionOneVerticalTableData,
} from './questionnaire-table.mockdata'
import { summaryDefinitionItems, summaryRecordsList } from './table.fixtures'

describe('Questionnaire Table', () => {
  it('Maps vertically as expected', () => {
    const result = mapQuestionnaireObjectsToVerticalTableData(summaryDefinitionItems, summaryRecordsList)

    expect(result).toEqual(summaryDefinitionOneVerticalTableData)
  })

  it('Maps horizontally as expected', () => {
    const result = mapQuestionnaireObjectsToHorizontalTableData(summaryDefinitionItems, summaryRecordsList)

    expect(result).toEqual(summaryDefinitionOneHorizontalTableData)
  })

  it('Renders Vertically', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation={'VERTICAL'}
      />
    )

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    expect(screen.getByRole('columnheader', { name: /17-Feb-2022 17:23/ })).toBeVisible()

    // Assert that subheaders are ignored in Vertical Mode
    expect(screen.queryByRole('columnheader', { name: /Partial Indication/ })).toBeNull()
  })

  it('Renders Vertically', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation={'HORIZONTAL'}
      />
    )

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    expect(screen.getByRole('columnheader', { name: /Record Date/ })).toBeVisible()

    // Assert that subheaders are visible
    expect(screen.getByRole('columnheader', { name: /Partial Indication/ })).toBeVisible()
  })
})
