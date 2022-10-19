import { render, screen } from '@testing-library/react'
import Table from '@ltht-react/table'
import { QuestionnaireItem } from '@ltht-react/types'
import { mockCustomRenderCells, mockSummaryDefinition, mockSummaryRecordsList } from './table.mockdata'

describe('Table', () => {
  it('Renders', () => {
    render(
      <Table
        definition={mockSummaryDefinition}
        records={mockSummaryRecordsList}
        customRenderCells={mockCustomRenderCells}
      />
    )

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Presents warning text if definition item array is undefined', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: undefined }

    render(<Table definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Presents warning text if definition item array is empty', () => {
    const summaryDefinitionWithoutItems = { ...mockSummaryDefinition, item: [] }

    render(<Table definition={summaryDefinitionWithoutItems} records={mockSummaryRecordsList} />)

    expect(screen.getByText('Could not render table. Definition items array was empty.')).toBeVisible()
  })

  it('Renders Horizontally', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />)
  })

  it('Renders Horizontally With Custom Cell Rendering', () => {
    render(
      <Table
        definition={mockSummaryDefinition}
        records={mockSummaryRecordsList}
        customRenderCells={mockCustomRenderCells}
        orientation="HORIZONTAL"
      />
    )

    expect(screen.getAllByRole('color-box').length).toBe(2)
  })

  it('Renders horizontal table with multiple row headers. total 13 columns to be visible', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />)

    expect(screen.getAllByRole('columnheader').length).toBe(13)
  })

  it('Renders horizontal table with two data rows', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />)

    expect(screen.getAllByRole('rowgroup')[0].children.length).toBe(2)
  })

  it('Renders horizontal table containing subheaders', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} orientation="HORIZONTAL" />)

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
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)

    expect(screen.getByRole('table')).toBeVisible()
  })

  it('Renders Vertical table with 5 rows in tbody', () => {
    render(<Table definition={mockSummaryDefinition} records={mockSummaryRecordsList} />)

    expect(screen.getByRole('table').children[1].tagName).toBe('TBODY')
    expect(screen.getByRole('table').children[1].children.length).toBe(5)
  })

  it('Renders Vertically With Custom Cell Rendering', () => {
    render(
      <Table
        definition={mockSummaryDefinition}
        records={mockSummaryRecordsList}
        customRenderCells={mockCustomRenderCells}
      />
    )

    expect(screen.getByRole('table')).toBeVisible()
  })
})
