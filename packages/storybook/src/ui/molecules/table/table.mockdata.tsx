import { TableData } from '@ltht-react/table'

export const mockTableData: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'answerset',
      cellProps: { text: '' },
    },
    {
      type: 'accessor',
      id: 'question1',
      cellProps: { text: 'First Question' },
    },
    {
      type: 'accessor',
      id: 'question2',
      cellProps: { text: 'Second Question' },
    },
  ],
  rows: [
    {
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
    },
    {
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
    },
  ],
}

export const mockTableDataWithSubheaders: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'answerset',
      cellProps: { text: '' },
    },
    {
      type: 'accessor',
      id: 'question1',
      cellProps: { text: 'First Question' },
    },
    {
      type: 'group',
      id: 'questiongroup1',
      cellProps: { text: 'Question Group' },
      subHeaders: [
        {
          type: 'accessor',
          id: 'question2',
          cellProps: { text: 'Second Question' },
        },
        {
          type: 'accessor',
          id: 'question3',
          cellProps: { text: 'Third Question' },
        },
      ],
    },
  ],
  rows: [
    {
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
      question3: { text: 'Answer 3 (set1)' },
    },
    {
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
      question3: { text: 'Answer 3 (set2)' },
    },
  ],
}

export const mockTableDataWithSubrows: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'answerset',
      cellProps: { text: '' },
    },
    {
      type: 'accessor',
      id: 'question1',
      cellProps: { text: 'First Question' },
    },
    {
      type: 'accessor',
      id: 'question2',
      cellProps: { text: 'Second Question' },
    },
  ],
  rows: [
    {
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
    },
    {
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
      subRows: [
        {
          question1: { text: 'Sub answer 1 (set2)' },
          question2: { text: 'Sub answer 2 (set2)' },
        },
      ],
    },
  ],
}

const customComponent = <button role="button">{"Click me I'm custom"}</button>

export const mockTableDataWithCustomComponent: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'answerset',
      cellProps: { text: '' },
    },
    {
      type: 'accessor',
      id: 'question1',
      cellProps: { text: 'First Question' },
    },
    {
      type: 'accessor',
      id: 'question2',
      cellProps: { text: 'Second Question' },
    },
  ],
  rows: [
    {
      answerset: { text: 'First Answer Set' },
      question1: { customComponentOverride: customComponent },
      question2: { text: 'Answer 2 (set1)' },
    },
    {
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
    },
  ],
}
