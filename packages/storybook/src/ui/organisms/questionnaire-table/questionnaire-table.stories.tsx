import { Story } from '@storybook/react'
import { QuestionnaireTable } from '@ltht-react/table'
import { useEffect, useState } from 'react'
import { QuestionnaireResponse } from '@ltht-react/types'
import {
  obsDefinition,
  obsRecordsList,
  obsAdminActionsForForms,
  axialRecordsList,
  axialDefinition,
  axialAdminActionsForForms,
  axialPaginatedRecordsList,
} from './questionnaire-table.fixtures'
import {
  mockSummaryAdminActionsForForms,
  mockSummaryDefinition,
  mockSummaryRecordsList,
} from '../generic-table/generic-table.mockdata'

export const MockVerticalTable: Story = () => (
  <QuestionnaireTable
    definition={mockSummaryDefinition}
    records={mockSummaryRecordsList}
    adminActions={mockSummaryAdminActionsForForms}
  />
)

export const ObservationsVerticalTable: Story = () => (
  <QuestionnaireTable id="observation-table" definition={obsDefinition} records={obsRecordsList} staticColumns={2} />
)

export const AxialVerticalTable: Story = () => (
  <QuestionnaireTable definition={axialDefinition} records={axialRecordsList} staticColumns={2} />
)

export const AxialVerticalManualPaginationTable: Story = () => {
  const getPaginatedData = (pageIndex: number, pageSize: number): QuestionnaireResponse[] =>
    axialPaginatedRecordsList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)

  const [pageIndex, setPageIndex] = useState<number>(0)
  const pageSize = 3
  const [data, setData] = useState<QuestionnaireResponse[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const pageCount = Math.ceil(axialPaginatedRecordsList.length / pageSize)

  useEffect(() => {
    // simulate latency
    setTimeout(() => {
      setIsFetching(false)
      setData(getPaginatedData(pageIndex, pageSize))
    }, 500)
  }, [pageIndex, pageSize])

  const nextPage = () => {
    setIsFetching(true)
    setPageIndex((old: number) => old + 1)
  }

  const getCanNextPage = () => pageIndex + 1 < pageCount

  return (
    <QuestionnaireTable
      definition={axialDefinition}
      records={data}
      staticColumns={2}
      keepPreviousData
      manualPagination
      nextPage={nextPage}
      getCanNextPage={getCanNextPage}
      pageSize={pageSize}
      isFetching={isFetching}
    />
  )
}

export const ObservationsVerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={obsDefinition}
    records={obsRecordsList}
    adminActions={obsAdminActionsForForms}
    staticColumns={2}
  />
)

export const AxialVerticalTableWithAdminActions: Story = () => (
  <QuestionnaireTable
    definition={axialDefinition}
    records={axialRecordsList}
    adminActions={axialAdminActionsForForms}
    staticColumns={2}
  />
)

export const ObservationsHorizontalTable: Story = () => (
  <QuestionnaireTable definition={obsDefinition} records={obsRecordsList} headerAxis="x" staticColumns={2} />
)

export const AxialHorizontalTable: Story = () => (
  <QuestionnaireTable definition={axialDefinition} records={axialRecordsList} headerAxis="x" staticColumns={2} />
)

export const ObservationsHorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={obsDefinition}
    records={obsRecordsList}
    headerAxis="x"
    adminActions={obsAdminActionsForForms}
    staticColumns={2}
  />
)

export const AxialHorizontalTableAdminActions: Story = () => (
  <QuestionnaireTable
    definition={axialDefinition}
    records={axialRecordsList}
    headerAxis="x"
    adminActions={axialAdminActionsForForms}
    staticColumns={2}
  />
)

export default { title: 'UI/Organisms/QuestionnaireTable' }
