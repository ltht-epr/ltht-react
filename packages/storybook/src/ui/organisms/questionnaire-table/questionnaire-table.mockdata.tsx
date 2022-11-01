import { CheckboxIcon, SquareIcon } from '@ltht-react/icon'
import { TableData } from '@ltht-react/table'

export const expectedOutputOfVerticalMapping: TableData = {
  headers: [
    {
      accessor: 'property',
      header: '',
    },
    {
      accessor: '1',
      header: '17-Feb-2022 17:23',
    },
    {
      accessor: '2',
      header: '12-Feb-2022 12:33',
    },
    {
      accessor: '3',
      header: '01-Jan-2022 16:02',
    },
  ],
  rows: [
    {
      id: '1',
      cells: [
        {
          key: 'property',
          value: 'Score',
        },
        {
          key: '1',
          value: '5 NEWS',
        },
        {
          key: '2',
          value: '4 NEWS',
        },
        {
          key: '3',
          value: '15 NEWS',
        },
      ],
      subRows: [],
    },
    {
      id: '2',
      cells: [
        {
          key: 'property',
          value: 'Intervention',
        },
        {
          key: '1',
          value: 'ICON',
        },
        {
          key: '2',
          value: '',
        },
        {
          key: '3',
          value: '',
        },
      ],
      subRows: [],
    },
    {
      id: '3',
      cells: [
        {
          key: 'property',
          value: 'Partial Indication',
        },
        {
          key: '1',
          value: '',
        },
        {
          key: '2',
          value: '',
        },
        {
          key: '3',
          value: '',
        },
      ],
      subRows: [],
    },
    {
      id: '4',
      cells: [
        {
          key: 'property',
          value: 'Standard Observations',
        },
        {
          key: '1',
          value: <CheckboxIcon size="medium" />,
        },
        {
          key: '2',
          value: <CheckboxIcon size="medium" />,
        },
        {
          key: '3',
          value: <CheckboxIcon size="medium" />,
        },
      ],
      subRows: [
        {
          id: '4a',
          cells: [
            { key: 'property', value: 'RR (breaths/min)' },
            { key: '1', value: <CheckboxIcon size="medium" /> },
            { key: '2', value: <SquareIcon size="small" /> },
            { key: '3', value: <SquareIcon size="small" /> },
          ],
          subRows: [
            {
              id: '4aa',
              cells: [
                { key: 'property', value: 'RR Part 1 (breaths/min)' },
                { key: '1', value: '25(1)' },
                { key: '2', value: '' },
                { key: '3', value: '' },
              ],
              subRows: [],
            },
            {
              id: '4ab',
              cells: [
                { key: 'property', value: 'RR Part 2 (breaths/min)' },
                { key: '1', value: '25(2)' },
                { key: '2', value: '' },
                { key: '3', value: '' },
              ],
              subRows: [],
            },
          ],
        },
        {
          id: '4b',
          cells: [
            { key: 'property', value: 'O2 Sat (%)' },
            { key: '1', value: '92 (Target 94-98 %)' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4c',
          cells: [
            { key: 'property', value: 'Supp O2' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4d',
          cells: [
            { key: 'property', value: 'Blood Pressure' },
            { key: '1', value: '144 / 122' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4e',
          cells: [
            { key: 'property', value: 'Standing 1 Minute BP' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4f',
          cells: [
            { key: 'property', value: 'Standing 3 Minute BP' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4g',
          cells: [
            { key: 'property', value: 'HR (BPM)' },
            { key: '1', value: '88' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4h',
          cells: [
            { key: 'property', value: 'Temp (°C)' },
            { key: '1', value: '37' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4i',
          cells: [
            { key: 'property', value: 'Consciousness' },
            { key: '1', value: 'Alert' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4j',
          cells: [
            { key: 'property', value: 'Pain Score' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
        {
          id: '4k',
          cells: [
            { key: 'property', value: 'Blood Glucose (mmol/L)' },
            { key: '1', value: '' },
            { key: '2', value: '' },
            { key: '3', value: '' },
          ],
          subRows: [],
        },
      ],
    },
  ],
}

export const expectedOutputOfHorizontalMapping: TableData = {
  headers: [
    {
      accessor: 'date',
      header: 'Record Date',
    },
    {
      accessor: '1',
      header: 'Score',
      subheaders: undefined,
    },
    {
      accessor: '2',
      header: 'Intervention',
      subheaders: undefined,
    },
    {
      accessor: '3',
      header: 'Partial Indication',
      subheaders: undefined,
    },
    {
      accessor: '',
      header: 'Standard Observations',
      subheaders: [
        {
          accessor: '',
          header: 'RR (breaths/min)',
          subheaders: [
            {
              accessor: '4aa',
              header: 'RR Part 1 (breaths/min)',
              subheaders: undefined,
            },
            {
              accessor: '4ab',
              header: 'RR Part 2 (breaths/min)',
              subheaders: undefined,
            },
          ],
        },
        {
          accessor: '4b',
          header: 'O2 Sat (%)',
          subheaders: undefined,
        },
        {
          accessor: '4c',
          header: 'Supp O2',
          subheaders: undefined,
        },
        {
          accessor: '4d',
          header: 'Blood Pressure',
          subheaders: undefined,
        },
        {
          accessor: '4e',
          header: 'Standing 1 Minute BP',
          subheaders: undefined,
        },
        {
          accessor: '4f',
          header: 'Standing 3 Minute BP',
          subheaders: undefined,
        },
        {
          accessor: '4g',
          header: 'HR (BPM)',
          subheaders: undefined,
        },
        {
          accessor: '4h',
          header: 'Temp (°C)',
          subheaders: undefined,
        },
        {
          accessor: '4i',
          header: 'Consciousness',
          subheaders: undefined,
        },
        {
          accessor: '4j',
          header: 'Pain Score',
          subheaders: undefined,
        },
        {
          accessor: '4k',
          header: 'Blood Glucose (mmol/L)',
          subheaders: undefined,
        },
      ],
    },
  ],
  rows: [
    {
      cells: [
        { key: 'date', value: '17-Feb-2022 17:23' },
        { key: '1', value: '5 NEWS' },
        { key: '2', value: 'ICON' },
        { key: '3', value: '' },
        { key: '4a', value: '25' },
        { key: '4aa', value: '25(1)' },
        { key: '4ab', value: '25(2)' },
        { key: '4b', value: '92 (Target 94-98 %)' },
        { key: '4c', value: '' },
        { key: '4d', value: '144 / 122' },
        { key: '4e', value: '' },
        { key: '4f', value: '' },
        { key: '4g', value: '88' },
        { key: '4h', value: '37' },
        { key: '4i', value: 'Alert' },
        { key: '4j', value: '' },
        { key: '4k', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
    {
      cells: [
        { key: 'date', value: '12-Feb-2022 12:33' },
        { key: '1', value: '4 NEWS' },
        { key: '2', value: '' },
        { key: '3', value: '' },
        { key: '4.1', value: '12' },
        { key: '4.2', value: '94 (Target 94-98 %)' },
        { key: '4.3', value: '' },
        { key: '4.4', value: '122 / 88' },
        { key: '4.5', value: '' },
        { key: '4.6', value: '' },
        { key: '4.7', value: '188' },
        { key: '4.8', value: '37' },
        { key: '4.9', value: 'Alert' },
        { key: '4.10', value: '' },
        { key: '4.11', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
    {
      cells: [
        { key: 'date', value: '01-Jan-2022 16:02' },
        { key: '1', value: '15 NEWS' },
        { key: '2', value: '' },
        { key: '3', value: '' },
        { key: '4.1', value: '65' },
        { key: '4.2', value: '65 (Target 94-98 %)' },
        { key: '4.3', value: '' },
        { key: '4.4', value: '65 / 6' },
        { key: '4.5', value: '' },
        { key: '4.6', value: '' },
        { key: '4.7', value: '64' },
        { key: '4.8', value: '35' },
        { key: '4.9', value: 'New Confusion' },
        { key: '4.10', value: '1 - Mild Pain' },
        { key: '4.11', value: '' },
        { key: '4', value: 'CHECKBOX' },
      ],
    },
  ],
}
