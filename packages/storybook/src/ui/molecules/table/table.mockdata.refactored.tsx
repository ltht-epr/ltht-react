import { TableDataRefactored } from '@ltht-react/table'

export const mockTableDataRefactored: TableDataRefactored = {
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
      key: 'answerset1',
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
    },
    {
      key: 'answerset2',
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
    },
  ],
}

export const mockTableDataWithSubheadersRefactored: TableDataRefactored = {
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
      subheaders: [
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
      key: 'answerset1',
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
      question3: { text: 'Answer 3 (set1)' },
    },
    {
      key: 'answerset2',
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
      question3: { text: 'Answer 3 (set2)' },
    },
  ],
}

export const mockTableDataWithSubrowsRefactored: TableDataRefactored = {
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
      key: 'answerset1',
      answerset: { text: 'First Answer Set' },
      question1: { text: 'Answer 1 (set1)' },
      question2: { text: 'Answer 2 (set1)' },
    },
    {
      key: 'answerset2',
      answerset: { text: 'Second Answer Set' },
      question1: { text: 'Answer 1 (set2)' },
      question2: { text: 'Answer 2 (set2)' },
      subRows: [
        {
          key: 'answerset2-sub',
          question1: { text: 'Sub answer 1 (set2)' },
          question2: { text: 'Sub answer 2 (set2)' },
        },
      ],
    },
  ],
}
