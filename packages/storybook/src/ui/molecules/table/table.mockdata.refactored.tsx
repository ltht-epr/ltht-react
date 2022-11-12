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

// export const mockTableDataWithSubrows: TableDataRefactored = {
//   headers: [
//     {
//       accessor: 'answerset',
//       header: '',
//     },
//     {
//       header: 'First Question',
//       accessor: 'question1',
//     },
//     {
//       header: 'Second Question',
//       accessor: 'question2',
//     },
//   ],
//   rows: [
//     {
//       cells: [
//         { key: 'answerset', value: 'First Answer Set' },
//         { key: 'question1', value: 'Answer 1 (set1)' },
//         { key: 'question2', value: 'Answer 2 (set1)' },
//       ],
//     },
//     {
//       cells: [
//         { key: 'answerset', value: 'Second Answer Set' },
//         { key: 'question1', value: 'Answer 1 (set2)' },
//         { key: 'question2', value: 'Answer 2 (set2)' },
//       ],
//       subRows: [
//         {
//           cells: [
//             { key: 'question1', value: 'Sub answer 1 (set2)' },
//             { key: 'question2', value: 'Sub answer 2 (set2)' },
//           ],
//         },
//       ],
//     },
//   ],
// }
