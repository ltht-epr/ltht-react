import { TableData } from '@ltht-react/table'

export const mockTableData: TableData = {
  headers: [
    {
      accessor: 'answerset',
      header: '',
    },
    {
      header: 'First Question',
      accessor: 'question1',
    },
    {
      header: 'Second Question',
      accessor: 'question2',
    },
  ],
  rows: [
    {
      cells: [
        { key: 'answerset', value: 'First Answer Set' },
        { key: 'question1', value: 'Answer 1 (set1)' },
        { key: 'question2', value: 'Answer 2 (set1)' },
      ],
    },
    {
      cells: [
        { key: 'answerset', value: 'Second Answer Set' },
        { key: 'question1', value: 'Answer 1 (set2)' },
        { key: 'question2', value: 'Answer 2 (set2)' },
      ],
    },
  ],
}

export const mockTableDataWithSubheaders: TableData = {
  headers: [
    {
      accessor: 'answerset',
      header: '',
    },
    {
      header: 'First Question',
      accessor: 'question1',
    },
    {
      header: 'Question Group',
      accessor: 'questiongroup1',
      subheaders: [
        {
          header: 'Second Question',
          accessor: 'question2',
        },
        {
          header: 'Third Question',
          accessor: 'question3',
        },
      ],
    },
  ],
  rows: [
    {
      cells: [
        { key: 'answerset', value: 'First Answer Set' },
        { key: 'question1', value: 'Answer 1 (set1)' },
        { key: 'question2', value: 'Answer 2 (set1)' },
        { key: 'question3', value: 'Answer 3 (set1)' },
      ],
    },
    {
      cells: [
        { key: 'answerset', value: 'Second Answer Set' },
        { key: 'question1', value: 'Answer 1 (set2)' },
        { key: 'question2', value: 'Answer 2 (set2)' },
        { key: 'question3', value: 'Answer 3 (set1)' },
      ],
    },
  ],
}

export const mockTableDataWithSubrows: TableData = {
  headers: [
    {
      accessor: 'answerset',
      header: '',
    },
    {
      header: 'First Question',
      accessor: 'question1',
    },
    {
      header: 'Second Question',
      accessor: 'question2',
    },
  ],
  rows: [
    {
      cells: [
        { key: 'answerset', value: 'First Answer Set' },
        { key: 'question1', value: 'Answer 1 (set1)' },
        { key: 'question2', value: 'Answer 2 (set1)' },
      ],
    },
    {
      cells: [
        { key: 'answerset', value: 'Second Answer Set' },
        { key: 'question1', value: 'Answer 1 (set2)' },
        { key: 'question2', value: 'Answer 2 (set2)' },
      ],
      subRows: [
        {
          cells: [
            { key: 'question1', value: 'Sub answer 1 (set2)' },
            { key: 'question2', value: 'Sub answer 2 (set2)' },
          ],
        },
      ],
    },
  ],
}
