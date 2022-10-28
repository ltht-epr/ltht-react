import QuestionnaireTable, {
  mapQuestionnaireObjectsToHorizontalTableData,
  mapQuestionnaireObjectsToVerticalTableData,
} from '@ltht-react/table/src/molecules/questionnaire-table'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  summaryDefinitionOneHorizontalTableData,
  summaryDefinitionOneVerticalTableData,
  summaryDefinitionItems,
  summaryRecordsList,
} from './questionnaire-table.mockdata'

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
    expect(within(screen.getAllByRole('columnheader')[2]).getByText('17-Feb-2022 17:23')).toBeVisible()

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

  it('Sorts the table when headers are clicked', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="VERTICAL"
      />
    )

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[1]).getAllByRole('cell')[1]

    expect(getTopLeftDataCell()).toHaveTextContent('Score')

    userEvent.click(screen.getByText('17-Feb-2022 17:23'))

    expect(getTopLeftDataCell()).toHaveTextContent('Partial Indication')
  })

  it('Sorts the table if the lowest level of subheaders are clicked in horizontal mode', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="HORIZONTAL"
      />
    )

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[3]).getAllByRole('cell')[0]

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')

    userEvent.click(screen.getByText('Record Date'))

    expect(getTopLeftDataCell()).toHaveTextContent('01-Jan-2022 16:02')
  })

  it('Does not try to sort the table when a header grouping is clicked', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="HORIZONTAL"
      />
    )

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[3]).getAllByRole('cell')[0]

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')

    userEvent.click(screen.getByText('RR (breaths/min)'))

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')
  })

  it('Expands collapsed rows when parent row is clicked', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="VERTICAL"
      />
    )

    const getChevronCell = () => within(screen.getAllByRole('row')[4]).getAllByRole('cell')[0]

    expect(getChevronCell()).toHaveTextContent('►')
    expect(screen.getAllByRole('row').length).toBe(5)

    userEvent.click(screen.getAllByText('►')[1])

    expect(getChevronCell()).toHaveTextContent('▲')
    expect(screen.getAllByRole('row').length).toBeGreaterThan(5)
    expect(screen.getAllByRole('row')[5]).toBeVisible()
  })

  it('Toggles all expandable rows when chevron is clicked', () => {
    render(
      <QuestionnaireTable
        definitionItems={summaryDefinitionItems}
        records={summaryRecordsList}
        orientation="VERTICAL"
      />
    )

    const getChevronCell = () => within(screen.getAllByRole('row')[0]).getAllByRole('columnheader')[0]

    expect(getChevronCell()).toHaveTextContent('►')
    expect(screen.getAllByRole('row').length).toBe(5)

    userEvent.click(screen.getAllByText('►')[0])

    expect(within(getChevronCell()).getByTitle('Toggle All Rows Expanded')).toHaveTextContent('▲')
    expect(screen.getAllByRole('row').length).toBeGreaterThan(5)
    expect(screen.getAllByRole('row')[5]).toBeVisible()

    expect(within(screen.getAllByRole('row')[6]).getAllByRole('cell')[1]).toHaveTextContent('RR Part 1 (breaths/min)')
    expect(within(screen.getAllByRole('row')[7]).getAllByRole('cell')[1]).toHaveTextContent('RR Part 2 (breaths/min)')
  })
})
