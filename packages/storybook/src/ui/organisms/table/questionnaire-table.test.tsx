import QuestionnaireTable, {
  mapQuestionnaireObjectsToHorizontalTableData,
  mapQuestionnaireObjectsToVerticalTableData,
} from '@ltht-react/table/src/molecules/questionnaire-table'
import { render, screen, within } from '@testing-library/react'
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
        orientation="VERTICAL"
      />
    )

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    expect(within(screen.getAllByRole('columnheader')[1]).getByText('17-Feb-2022 17:23')).toBeVisible()

    // Assert that subheaders are ignored in Vertical Mode
    expect(screen.queryByRole('columnheader', { name: /Partial Indication/ })).toBeNull()
  })

  it('Renders Horizontally', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="HORIZONTAL"
      />
    )

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    const headers = screen.getAllByRole('columnheader')
    expect(headers.some((header) => within(header).queryByText('Record Date') !== null)).toBe(true)

    // Assert that subheaders are visible
    expect(
      screen.getAllByRole('columnheader').some((header) => within(header).queryByText('Partial Indication') !== null)
    ).toBe(true)
  })
})
