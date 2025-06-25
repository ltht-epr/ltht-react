import { QuestionnaireTable } from '@ltht-react/table'
import mapQuestionnaireDefinitionAndResponsesToTableData from '@ltht-react/table/src/organisms/questionnaire-table-methods'
import { QuestionnaireItem } from '@ltht-react/types'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  mockSummaryAdminActionsForForms,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from '../generic-table/generic-table.mockdata'
import {
  expectedResultOfMappingWithHeadersOnWithdrawnXAxis,
  expectedResultOfMappingWithHeadersOnWithdrawnYAxis,
  expectedResultOfMappingWithHeadersOnXAxis,
  expectedResultOfMappingWithHeadersOnYAxis,
  mockAdminActionsForForms,
  summaryDefinition,
  summaryRecordsList,
  summaryRecordsWithdrawnList,
} from './questionnaire-table.mockdata'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

describe('Questionnaire Table (using Fixture data)', () => {
  it('Renders Vertically', () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="y" />)

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    expect(within(screen.getAllByRole('columnheader')[2]).getByText('17-Feb-2022 17:23')).toBeVisible()

    // Assert that subheaders are ignored in Vertical Mode
    expect(screen.queryByRole('columnheader', { name: /Partial Indication/ })).toBeNull()
  })

  it('Renders Horizontally', () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />)

    expect(screen.getByRole('table')).toBeVisible()

    // Assert that dates are in the headers
    const headers = screen.getAllByRole('columnheader')
    expect(headers.some((header) => within(header).queryByText('Record Date') !== null)).toBe(true)

    // Assert that subheaders are visible
    expect(
      screen.getAllByRole('columnheader').some((header) => within(header).queryByText('Partial Indication') !== null)
    ).toBe(true)
  })

  it('Sorts the table when headers are clicked', async () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="y" />)

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[1]).getAllByRole('cell')[1]

    expect(getTopLeftDataCell()).toHaveTextContent('Score')

    await userEvent.click(screen.getByText('17-Feb-2022 17:23'))
    await userEvent.click(screen.getByText('17-Feb-2022 17:23'))

    expect(getTopLeftDataCell()).toHaveTextContent('Average BASFI Score')
  })

  it('Does not sort the table if sorting is disabled', async () => {
    render(
      <QuestionnaireTable
        definition={summaryDefinition}
        records={summaryRecordsList}
        headerAxis="y"
        enableSorting={false}
      />
    )

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[1]).getAllByRole('cell')[1]

    expect(getTopLeftDataCell()).toHaveTextContent('Score')

    await userEvent.click(screen.getByText('17-Feb-2022 17:23'))
    await userEvent.click(screen.getByText('17-Feb-2022 17:23'))

    expect(getTopLeftDataCell()).toHaveTextContent('Score')
  })

  it('Sorts the table if the lowest level of subheaders are clicked in horizontal mode', async () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />)

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[3]).getAllByRole('cell')[0]

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')

    await userEvent.click(screen.getByText('Record Date'))

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')
  })

  it('Does not try to sort the table when a header grouping is clicked', async () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />)

    const getTopLeftDataCell = () => within(screen.getAllByRole('row')[3]).getAllByRole('cell')[0]

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')

    await userEvent.click(screen.getByText('RR (breaths/min)'))

    expect(getTopLeftDataCell()).toHaveTextContent('17-Feb-2022 17:23')
  })

  it('Expands collapsed rows when parent row is clicked', async () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="y" />)

    const getChevronCell = () => within(screen.getAllByRole('row')[4]).getAllByRole('cell')[0]

    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-right')
    expect(screen.getAllByRole('row').length).toBe(6)

    await userEvent.click(screen.getAllByRole('img', { hidden: true })[1])

    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-down')
    expect(screen.getAllByRole('row').length).toBeGreaterThan(6)
    expect(screen.getAllByRole('row')[6]).toBeVisible()

    await userEvent.click(screen.getAllByRole('img', { hidden: true })[1])
    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-right')
    expect(screen.getAllByRole('row').length).toBe(6)
  })

  it('Toggles all expandable rows when chevron is clicked', async () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="y" />)

    const getChevronCell = () => within(screen.getAllByRole('row')[0]).getAllByRole('columnheader')[0]

    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-right')
    expect(screen.getAllByRole('row').length).toBe(6)

    await userEvent.click(screen.getAllByRole('img', { hidden: true })[0])

    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-down')
    expect(screen.getAllByRole('row').length).toBeGreaterThan(6)
    expect(screen.getAllByRole('row')[6]).toBeVisible()

    expect(within(screen.getAllByRole('row')[6]).getAllByRole('cell')[1]).toHaveTextContent('RR Part 1 (breaths/min)')
    expect(within(screen.getAllByRole('row')[7]).getAllByRole('cell')[1]).toHaveTextContent('RR Part 2 (breaths/min)')

    await userEvent.click(within(getChevronCell()).getByRole('img', { hidden: true }))
    expect(within(getChevronCell()).getByRole('img', { hidden: true })).toHaveClass('fa-chevron-right')

    expect(screen.getAllByRole('row').length).toBe(6)
  })
})

describe('Questionnaire Table (using mock Monty Python data)', () => {
  it('Renders', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} headerAxis="x" />)

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Presents warning text if definition item array is undefined', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: undefined }

    render(<QuestionnaireTable definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('An error occurred whilst loading this table.')).toBeVisible()
  })

  it('Presents warning text if definition item array is empty', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: [] }

    render(<QuestionnaireTable definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('An error occurred whilst loading this table.')).toBeVisible()
  })

  it('Renders Horizontally', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} headerAxis="x" />)
  })

  it('Renders horizontal table with multiple row headers. total 13 columns to be visible', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} headerAxis="x" />)

    expect(screen.getAllByRole('columnheader').length).toBe(13)

    expect(screen.queryAllByTestId('action-menu-button')).toHaveLength(0)
  })

  it('Renders horizontal table with two data rows', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} headerAxis="x" />)

    expect(screen.getAllByRole('rowgroup')[0].children.length).toBe(2)
  })

  it('Renders horizontal table with 2 admin actions buttons', () => {
    render(
      <QuestionnaireTable
        headerAxis="x"
        definition={mockSummaryDefinition}
        records={mockSummaryRecordsList}
        adminActions={mockSummaryAdminActionsForForms}
      />
    )

    mockSummaryAdminActionsForForms.forEach((action) => {
      expect(screen.getByTestId(`${action.questionnaire}-action-menu-button`)).toBeVisible()
    })
  })

  it('Renders horizontal table containing subheaders', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} headerAxis="x" />)

    const columnWithSubheadings = mockSummaryDefinition?.item?.find((x) => x?.item && x?.item.length > 0)
    const column = screen
      .getAllByRole('columnheader')
      .find((x) => x.textContent === (columnWithSubheadings as QuestionnaireItem).text)
    const colSpan = (column as HTMLElement).attributes.getNamedItem('COLSPAN')?.value
    const numberOfHeaderRows = screen.getByRole('table').children[0].childNodes.length

    expect(columnWithSubheadings).toBeDefined()
    expect(column).toBeDefined()
    expect(colSpan).toBe('2')
    expect(numberOfHeaderRows).toBe(2)
  })

  it('Renders Vertically', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Renders Vertical table with 5 rows in tbody', () => {
    render(<QuestionnaireTable definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)

    expect(screen.getByRole('table').children[1].tagName).toBe('TBODY')
    expect(screen.getByRole('table').children[1].children.length).toBe(5)

    expect(screen.queryAllByTestId('action-menu-button')).toHaveLength(0)
  })

  it('Renders Vertical table with 2 admin actions buttons', () => {
    render(
      <QuestionnaireTable
        definition={mockSummaryDefinition}
        records={mockSummaryRecordsList}
        adminActions={mockSummaryAdminActionsForForms}
      />
    )

    mockSummaryAdminActionsForForms.forEach((action) => {
      expect(screen.getByTestId(`${action.questionnaire}-action-menu-button`)).toBeVisible()
    })
  })
})

describe('Questionnaire Table Methods', () => {
  it('Maps questionnaires data with headers along the X axis', () => {
    const result = mapQuestionnaireDefinitionAndResponsesToTableData(
      summaryDefinition,
      summaryRecordsList,
      'x',
      mockAdminActionsForForms
    )

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResultOfMappingWithHeadersOnXAxis))
  })

  it('Maps withdrawn questionnaires data with headers along the X axis', () => {
    const result = mapQuestionnaireDefinitionAndResponsesToTableData(
      summaryDefinition,
      summaryRecordsWithdrawnList,
      'x',
      mockAdminActionsForForms
    )

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResultOfMappingWithHeadersOnWithdrawnXAxis))
  })

  it('Maps questionnaires data with headers along the Y axis', () => {
    const result = mapQuestionnaireDefinitionAndResponsesToTableData(
      summaryDefinition,
      summaryRecordsList,
      'y',
      mockAdminActionsForForms
    )
    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResultOfMappingWithHeadersOnYAxis))
  })

  it('Maps withdrawn questionnaires data with headers along the Y axis', () => {
    const result = mapQuestionnaireDefinitionAndResponsesToTableData(
      summaryDefinition,
      summaryRecordsWithdrawnList,
      'y',
      mockAdminActionsForForms
    )

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedResultOfMappingWithHeadersOnWithdrawnYAxis))
  })
})

describe('Questionnaire Table with id prop', () => {
  it('Renders with id prop', () => {
    render(
      <QuestionnaireTable
        definition={summaryDefinition}
        records={summaryRecordsList}
        headerAxis="x"
        id="questionnaire-table"
      />
    )

    expect(screen.getByRole('table')).toHaveAttribute('id', 'questionnaire-table')
  })

  it('Renders without id prop', () => {
    render(<QuestionnaireTable definition={summaryDefinition} records={summaryRecordsList} headerAxis="x" />)

    expect(screen.getByRole('table')).not.toHaveAttribute('id')
  })
})

describe('Questionnaire Table with expanding rows have id prop', () => {
  it('Renders with id prop', () => {
    render(
      <QuestionnaireTable
        definition={summaryDefinition}
        records={summaryRecordsList}
        headerAxis="y"
        id="questionnaire-table"
      />
    )
    const expanderCells = screen
      .getAllByRole('img', { hidden: true })
      .filter((img) => img.classList.contains('fa-chevron-right'))
      .map((img) => img.parentElement?.parentElement?.id)
      .filter(Boolean)

    expanderCells.forEach((id) => {
      expect(id).toBeDefined()
      expect(id).toContain('expander')
    })
  })
})
