/* eslint no-console: 0 */
import { TableData } from '@ltht-react/table'
import { AdminActionsForQuestionnaire } from '@ltht-react/table/lib/organisms/questionnaire-table-methods'
import QuestionnaireWithdrawnTableCell from '@ltht-react/table/src/atoms/questionnaire-withdrawn-table-cell'

import {
  PartialDateTimeKindCode,
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireItemTypeCode,
  QuestionnairePublicationStatus,
  QuestionnaireResponse,
  QuestionnaireResponseStatus,
} from '@ltht-react/types'
import { CSSProperties } from 'react'

const defaultVerticalHeaderCellStyle: CSSProperties = {
  maxWidth: '10rem',
  textWrap: 'wrap',
  textAlign: 'left',
}

const normalVerticalHeaderCellStyle: CSSProperties = {
  ...defaultVerticalHeaderCellStyle,
  fontWeight: 'normal',
}

const boldVerticalHeaderCellStyle: CSSProperties = {
  ...defaultVerticalHeaderCellStyle,
  fontWeight: 'bold',
}

const withdrawnWrapper = (text: string): JSX.Element => <QuestionnaireWithdrawnTableCell text={text} />

export const expectedResultOfMappingWithHeadersOnXAxis: TableData = {
  headers: [
    { id: 'date', type: 'accessor', cellProps: { text: 'Record Date' } },
    { id: 'adminactions', type: 'accessor', cellProps: { text: 'Actions' } },
    { id: '1', type: 'accessor', cellProps: { text: 'Score' }, subHeaders: [] },
    { id: '2', type: 'accessor', cellProps: { text: 'Intervention' }, subHeaders: [] },
    { id: '3', type: 'accessor', cellProps: { text: 'Partial Indication' }, subHeaders: [] },
    {
      id: '4',
      type: 'group',
      cellProps: { text: 'Standard Observations' },
      subHeaders: [
        {
          id: '4a',
          type: 'group',
          cellProps: { text: 'RR (breaths/min)' },
          subHeaders: [
            { id: '4aa', type: 'accessor', cellProps: { text: 'RR Part 1 (breaths/min)' }, subHeaders: [] },
            { id: '4ab', type: 'accessor', cellProps: { text: 'RR Part 2 (breaths/min)' }, subHeaders: [] },
          ],
        },
        { id: '4b', type: 'accessor', cellProps: { text: 'O2 Sat (%)' }, subHeaders: [] },
        { id: '4c', type: 'accessor', cellProps: { text: 'Supp O2' }, subHeaders: [] },
        { id: '4d', type: 'accessor', cellProps: { text: 'Blood Pressure' }, subHeaders: [] },
        { id: '4e', type: 'accessor', cellProps: { text: 'Standing 1 Minute BP' }, subHeaders: [] },
        { id: '4f', type: 'accessor', cellProps: { text: 'Standing 3 Minute BP' }, subHeaders: [] },
        { id: '4g', type: 'accessor', cellProps: { text: 'HR (BPM)' }, subHeaders: [] },
        { id: '4h', type: 'accessor', cellProps: { text: 'Temp (°C)' }, subHeaders: [] },
        { id: '4i', type: 'accessor', cellProps: { text: 'Consciousness' }, subHeaders: [] },
        { id: '4j', type: 'accessor', cellProps: { text: 'Pain Score' }, subHeaders: [] },
        { id: '4k', type: 'accessor', cellProps: { text: 'Blood Glucose (mmol/L)' }, subHeaders: [] },
        { id: '4l', type: 'accessor', cellProps: { text: 'Spine Pain (VAS)' }, subHeaders: [] },
      ],
    },
    { id: '5', type: 'accessor', cellProps: { text: 'Average BASFI Score' }, subHeaders: [] },
  ],
  rows: [
    {
      date: { text: '17-Feb-2022 17:23' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 1')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { text: '5 NEWS' },
      '2': { text: 'ICON' },
      '3': { text: 'No' },
      '4': { text: 'CHECKBOX' },
      '4a': { text: '25' },
      '4aa': { text: '25(1)' },
      '4ab': { text: '25(2)' },
      '4b': { text: '92 (Target 94-98 %)' },
      '4c': { text: '93' },
      '4d': { text: '144 / 122' },
      '4e': { text: '120' },
      '4f': { text: '143' },
      '4g': { text: '88' },
      '4h': { text: '37' },
      '4i': { text: 'Alert' },
      '4j': { text: '8' },
      '4k': { text: '75' },
      '4l': { text: 'No' },
      '5': { text: '70.5' },
    },
    {
      date: { text: '12-Feb-2022 12:33' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 2')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { text: '40 NEWS' },
      '2': { text: 'ICON' },
      '3': { text: 'Yes' },
      '4': { text: 'CHECKBOX' },
      '4a': { text: '31' },
      '4aa': { text: '31(1)' },
      '4ab': { text: '31(2)' },
      '4b': { text: '81 (Target 94-98 %)' },
      '4c': { text: '95' },
      '4d': { text: '160 / 140' },
      '4e': { text: '140' },
      '4f': { text: '132' },
      '4g': { text: '74' },
      '4h': { text: '64' },
      '4i': { text: 'Alert' },
      '4j': { text: '3' },
      '4k': { text: '65' },
      '4l': { text: '20.5' },
      '5': { text: 'Yes' },
    },
    {
      date: { text: '01-Jan-2022 16:02' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 3')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { text: '17 NEWS' },
      '2': { text: 'ICON' },
      '3': { text: 'No' },
      '4': { text: 'CHECKBOX' },
      '4a': { text: '17' },
      '4aa': { text: '17(1)' },
      '4ab': { text: '17(2)' },
      '4b': { text: '95 (Target 94-98 %)' },
      '4c': { text: '103' },
      '4d': { text: '125 / 115' },
      '4e': { text: '129' },
      '4f': { text: '123' },
      '4g': { text: '120' },
      '4h': { text: '23' },
      '4i': { text: 'Confusion' },
      '4j': { text: '5' },
      '4k': { text: '102' },
      '4l': { text: '45' },
      '5': { text: '12.5' },
    },
  ],
}

export const expectedResultOfMappingWithHeadersOnWithdrawnXAxis: TableData = {
  headers: [
    { id: 'date', type: 'accessor', cellProps: { text: 'Record Date' } },
    { id: 'adminactions', type: 'accessor', cellProps: { text: 'Actions' } },
    { id: '1', type: 'accessor', cellProps: { text: 'Score' }, subHeaders: [] },
    { id: '2', type: 'accessor', cellProps: { text: 'Intervention' }, subHeaders: [] },
    { id: '3', type: 'accessor', cellProps: { text: 'Partial Indication' }, subHeaders: [] },
    {
      id: '4',
      type: 'group',
      cellProps: { text: 'Standard Observations' },
      subHeaders: [
        {
          id: '4a',
          type: 'group',
          cellProps: { text: 'RR (breaths/min)' },
          subHeaders: [
            { id: '4aa', type: 'accessor', cellProps: { text: 'RR Part 1 (breaths/min)' }, subHeaders: [] },
            { id: '4ab', type: 'accessor', cellProps: { text: 'RR Part 2 (breaths/min)' }, subHeaders: [] },
          ],
        },
        { id: '4b', type: 'accessor', cellProps: { text: 'O2 Sat (%)' }, subHeaders: [] },
        { id: '4c', type: 'accessor', cellProps: { text: 'Supp O2' }, subHeaders: [] },
        { id: '4d', type: 'accessor', cellProps: { text: 'Blood Pressure' }, subHeaders: [] },
        { id: '4e', type: 'accessor', cellProps: { text: 'Standing 1 Minute BP' }, subHeaders: [] },
        { id: '4f', type: 'accessor', cellProps: { text: 'Standing 3 Minute BP' }, subHeaders: [] },
        { id: '4g', type: 'accessor', cellProps: { text: 'HR (BPM)' }, subHeaders: [] },
        { id: '4h', type: 'accessor', cellProps: { text: 'Temp (°C)' }, subHeaders: [] },
        { id: '4i', type: 'accessor', cellProps: { text: 'Consciousness' }, subHeaders: [] },
        { id: '4j', type: 'accessor', cellProps: { text: 'Pain Score' }, subHeaders: [] },
        { id: '4k', type: 'accessor', cellProps: { text: 'Blood Glucose (mmol/L)' }, subHeaders: [] },
        { id: '4l', type: 'accessor', cellProps: { text: 'Spine Pain (VAS)' }, subHeaders: [] },
      ],
    },
    { id: '5', type: 'accessor', cellProps: { text: 'Average BASFI Score' }, subHeaders: [] },
  ],
  rows: [
    {
      date: { text: '17-Feb-2022 17:23' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 1')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { text: '5 NEWS' },
      '2': { text: 'ICON' },
      '3': { text: 'No' },
      '4': { text: 'CHECKBOX' },
      '4a': { text: '25' },
      '4aa': { text: '25(1)' },
      '4ab': { text: '25(2)' },
      '4b': { text: '92 (Target 94-98 %)' },
      '4c': { text: '93' },
      '4d': { text: '144 / 122' },
      '4e': { text: '120' },
      '4f': { text: '143' },
      '4g': { text: '88' },
      '4h': { text: '37' },
      '4i': { text: 'Alert' },
      '4j': { text: '8' },
      '4k': { text: '75' },
      '4l': { text: 'No' },
      '5': { text: '70.5' },
    },
    {
      date: { text: '12-Feb-2022 12:33' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 2')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { text: '40 NEWS' },
      '2': { text: 'ICON' },
      '3': { text: 'Yes' },
      '4': { text: 'CHECKBOX' },
      '4a': { text: '31' },
      '4aa': { text: '31(1)' },
      '4ab': { text: '31(2)' },
      '4b': { text: '81 (Target 94-98 %)' },
      '4c': { text: '95' },
      '4d': { text: '160 / 140' },
      '4e': { text: '140' },
      '4f': { text: '132' },
      '4g': { text: '74' },
      '4h': { text: '64' },
      '4i': { text: 'Alert' },
      '4j': { text: '3' },
      '4k': { text: '65' },
      '4l': { text: '20.5' },
      '5': { text: 'Yes' },
    },
    {
      date: { customComponentOverride: withdrawnWrapper('01-Jan-2022 16:02'), text: '01-Jan-2022 16:02' },
      adminactions: {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 3')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '1': { customComponentOverride: withdrawnWrapper('17 NEWS'), text: '17 NEWS' },
      '2': { customComponentOverride: withdrawnWrapper('ICON'), text: 'ICON' },
      '3': { customComponentOverride: withdrawnWrapper('No'), text: 'No' },
      '4': { customComponentOverride: withdrawnWrapper('CHECKBOX'), text: 'CHECKBOX' },
      '4a': { customComponentOverride: withdrawnWrapper('17'), text: '17' },
      '4aa': { customComponentOverride: withdrawnWrapper('17(1)'), text: '17(1)' },
      '4ab': { customComponentOverride: withdrawnWrapper('17(2)'), text: '17(2)' },
      '4b': { customComponentOverride: withdrawnWrapper('95 (Target 94-98 %)'), text: '95 (Target 94-98 %)' },
      '4c': { customComponentOverride: withdrawnWrapper('103'), text: '103' },
      '4d': { customComponentOverride: withdrawnWrapper('125 / 115'), text: '125 / 115' },
      '4e': { customComponentOverride: withdrawnWrapper('129'), text: '129' },
      '4f': { customComponentOverride: withdrawnWrapper('123'), text: '123' },
      '4g': { customComponentOverride: withdrawnWrapper('120'), text: '120' },
      '4h': { customComponentOverride: withdrawnWrapper('23'), text: '23' },
      '4i': { customComponentOverride: withdrawnWrapper('Confusion'), text: 'Confusion' },
      '4j': { customComponentOverride: withdrawnWrapper('5'), text: '5' },
      '4k': { customComponentOverride: withdrawnWrapper('102'), text: '102' },
      '4l': { customComponentOverride: withdrawnWrapper('45'), text: '45' },
      '5': { customComponentOverride: withdrawnWrapper('12.5'), text: '12.5' },
    },
  ],
}

export const expectedResultOfMappingWithHeadersOnYAxis: TableData = {
  headers: [
    { id: 'property', type: 'accessor', cellProps: { text: '' } },
    { id: '1', type: 'accessor', cellProps: { text: '17-Feb-2022 17:23' } },
    { id: '2', type: 'accessor', cellProps: { text: '12-Feb-2022 12:33' } },
    { id: '3', type: 'accessor', cellProps: { text: '01-Jan-2022 16:02' } },
  ],
  rows: [
    {
      property: { text: 'Actions', parentStyle: defaultVerticalHeaderCellStyle },
      '1': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 1')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '2': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 2')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '3': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 3')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
    },
    {
      property: { text: 'Score', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: '5 NEWS' },
      '2': { text: '40 NEWS' },
      '3': { text: '17 NEWS' },
    },
    {
      property: { text: 'Intervention', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: 'ICON' },
      '2': { text: 'ICON' },
      '3': { text: 'ICON' },
    },
    {
      property: {
        text: 'Partial Indication',
        parentStyle: normalVerticalHeaderCellStyle,
      },
      '1': { text: 'No' },
      '2': { text: 'Yes' },
      '3': { text: 'No' },
    },
    {
      property: {
        text: 'Standard Observations',
        parentStyle: boldVerticalHeaderCellStyle,
      },
      '1': { iconProps: { type: 'checkbox', size: 'medium' } },
      '2': { iconProps: { type: 'checkbox', size: 'medium' } },
      '3': { iconProps: { type: 'checkbox', size: 'medium' } },
      subRows: [
        {
          property: {
            text: 'RR (breaths/min)',
            parentStyle: boldVerticalHeaderCellStyle,
          },
          '1': { text: '25' },
          '2': { text: '31' },
          '3': { text: '17' },
          subRows: [
            {
              property: { text: 'RR Part 1 (breaths/min)', parentStyle: normalVerticalHeaderCellStyle },
              '1': { text: '25(1)' },
              '2': { text: '31(1)' },
              '3': { text: '17(1)' },
            },
            {
              property: { text: 'RR Part 2 (breaths/min)', parentStyle: normalVerticalHeaderCellStyle },
              '1': { text: '25(2)' },
              '2': { text: '31(2)' },
              '3': { text: '17(2)' },
            },
          ],
        },
        {
          property: { text: 'O2 Sat (%)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '92 (Target 94-98 %)' },
          '2': { text: '81 (Target 94-98 %)' },
          '3': { text: '95 (Target 94-98 %)' },
        },
        {
          property: { text: 'Supp O2', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '93' },
          '2': { text: '95' },
          '3': { text: '103' },
        },
        {
          property: { text: 'Blood Pressure', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '144 / 122' },
          '2': { text: '160 / 140' },
          '3': { text: '125 / 115' },
        },
        {
          property: { text: 'Standing 1 Minute BP', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '120' },
          '2': { text: '140' },
          '3': { text: '129' },
        },
        {
          property: { text: 'Standing 3 Minute BP', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '143' },
          '2': { text: '132' },
          '3': { text: '123' },
        },
        {
          property: { text: 'HR (BPM)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '88' },
          '2': { text: '74' },
          '3': { text: '120' },
        },
        {
          property: { text: 'Temp (°C)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '37' },
          '2': { text: '64' },
          '3': { text: '23' },
        },
        {
          property: { text: 'Consciousness', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: 'Alert' },
          '2': { text: 'Alert' },
          '3': { text: 'Confusion' },
        },
        {
          property: { text: 'Pain Score', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '8' },
          '2': { text: '3' },
          '3': { text: '5' },
        },
        {
          property: { text: 'Blood Glucose (mmol/L)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '75' },
          '2': { text: '65' },
          '3': { text: '102' },
        },
        {
          property: { text: 'Spine Pain (VAS)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: 'No' },
          '2': { text: '20.5' },
          '3': { text: '45' },
        },
      ],
    },
    {
      property: { text: 'Average BASFI Score', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: '70.5' },
      '2': { text: 'Yes' },
      '3': { text: '12.5' },
    },
  ],
}

export const expectedResultOfMappingWithHeadersOnWithdrawnYAxis: TableData = {
  headers: [
    { id: 'property', type: 'accessor', cellProps: { text: '' } },
    { id: '1', type: 'accessor', cellProps: { text: '17-Feb-2022 17:23' } },
    { id: '2', type: 'accessor', cellProps: { text: '12-Feb-2022 12:33' } },
    {
      id: '3',
      type: 'accessor',
      cellProps: { customComponentOverride: withdrawnWrapper('01-Jan-2022 16:02'), text: '01-Jan-2022 16:02' },
    },
  ],
  rows: [
    {
      property: { text: 'Actions', parentStyle: defaultVerticalHeaderCellStyle },
      '1': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 1')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '2': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 2')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
      '3': {
        adminActions: [
          {
            text: 'View',
            clickHandler: () => {
              console.log('Viewing submission 3')
            },
            leftIcon: { type: 'info-circle', size: 'medium' },
            rightIcon: { type: 'external-link', size: 'medium' },
          },
        ],
        parentStyle: { zIndex: 200 },
      },
    },
    {
      property: { text: 'Score', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: '5 NEWS' },
      '2': { text: '40 NEWS' },
      '3': { customComponentOverride: withdrawnWrapper('17 NEWS'), text: '17 NEWS' },
    },
    {
      property: { text: 'Intervention', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: 'ICON' },
      '2': { text: 'ICON' },
      '3': { customComponentOverride: withdrawnWrapper('ICON'), text: 'ICON' },
    },
    {
      property: { text: 'Partial Indication', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: 'No' },
      '2': { text: 'Yes' },
      '3': { customComponentOverride: withdrawnWrapper('No'), text: 'No' },
    },
    {
      property: {
        text: 'Standard Observations',
        parentStyle: boldVerticalHeaderCellStyle,
      },
      '1': { iconProps: { type: 'checkbox', size: 'medium' } },
      '2': { iconProps: { type: 'checkbox', size: 'medium' } },
      '3': {
        iconProps: { type: 'checkbox', size: 'medium' },
      },
      subRows: [
        {
          property: { text: 'RR (breaths/min)', parentStyle: boldVerticalHeaderCellStyle },
          '1': { text: '25' },
          '2': { text: '31' },
          '3': { customComponentOverride: withdrawnWrapper('17'), text: '17' },
          subRows: [
            {
              property: { text: 'RR Part 1 (breaths/min)', parentStyle: normalVerticalHeaderCellStyle },
              '1': { text: '25(1)' },
              '2': { text: '31(1)' },
              '3': { customComponentOverride: withdrawnWrapper('17(1)'), text: '17(1)' },
            },
            {
              property: { text: 'RR Part 2 (breaths/min)', parentStyle: normalVerticalHeaderCellStyle },
              '1': { text: '25(2)' },
              '2': { text: '31(2)' },
              '3': { customComponentOverride: withdrawnWrapper('17(2)'), text: '17(2)' },
            },
          ],
        },
        {
          property: { text: 'O2 Sat (%)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '92 (Target 94-98 %)' },
          '2': { text: '81 (Target 94-98 %)' },
          '3': { customComponentOverride: withdrawnWrapper('95 (Target 94-98 %)'), text: '95 (Target 94-98 %)' },
        },
        {
          property: { text: 'Supp O2', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '93' },
          '2': { text: '95' },
          '3': { customComponentOverride: withdrawnWrapper('103'), text: '103' },
        },
        {
          property: { text: 'Blood Pressure', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '144 / 122' },
          '2': { text: '160 / 140' },
          '3': { customComponentOverride: withdrawnWrapper('125 / 115'), text: '125 / 115' },
        },
        {
          property: { text: 'Standing 1 Minute BP', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '120' },
          '2': { text: '140' },
          '3': { customComponentOverride: withdrawnWrapper('129'), text: '129' },
        },
        {
          property: { text: 'Standing 3 Minute BP', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '143' },
          '2': { text: '132' },
          '3': { customComponentOverride: withdrawnWrapper('123'), text: '123' },
        },
        {
          property: { text: 'HR (BPM)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '88' },
          '2': { text: '74' },
          '3': { customComponentOverride: withdrawnWrapper('120'), text: '120' },
        },
        {
          property: { text: 'Temp (°C)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '37' },
          '2': { text: '64' },
          '3': { customComponentOverride: withdrawnWrapper('23'), text: '23' },
        },
        {
          property: { text: 'Consciousness', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: 'Alert' },
          '2': { text: 'Alert' },
          '3': { customComponentOverride: withdrawnWrapper('Confusion'), text: 'Confusion' },
        },
        {
          property: { text: 'Pain Score', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '8' },
          '2': { text: '3' },
          '3': { customComponentOverride: withdrawnWrapper('5'), text: '5' },
        },
        {
          property: { text: 'Blood Glucose (mmol/L)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: '75' },
          '2': { text: '65' },
          '3': { customComponentOverride: withdrawnWrapper('102'), text: '102' },
        },
        {
          property: { text: 'Spine Pain (VAS)', parentStyle: normalVerticalHeaderCellStyle },
          '1': { text: 'No' },
          '2': { text: '20.5' },
          '3': { customComponentOverride: withdrawnWrapper('45'), text: '45' },
        },
      ],
    },
    {
      property: { text: 'Average BASFI Score', parentStyle: normalVerticalHeaderCellStyle },
      '1': { text: '70.5' },
      '2': { text: 'Yes' },
      '3': { customComponentOverride: withdrawnWrapper('12.5'), text: '12.5' },
    },
  ],
}

export const mockAdminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: '1',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 1')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '2',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 2')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '3',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
    ],
  },
]

export const summaryDefinitionItems: QuestionnaireItem[] = [
  {
    text: 'Score',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '1',
    item: null,
  },
  {
    text: 'Intervention',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '2',
    item: null,
  },
  {
    text: 'Partial Indication',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '3',
    item: null,
  },
  {
    text: 'Standard Observations',
    type: QuestionnaireItemTypeCode.Group,
    linkId: '4',
    item: [
      {
        text: 'RR (breaths/min)',
        type: QuestionnaireItemTypeCode.Group,
        linkId: '4a',
        item: [
          {
            text: 'RR Part 1 (breaths/min)',
            type: QuestionnaireItemTypeCode.QuestionString,
            linkId: '4aa',
          },
          {
            text: 'RR Part 2 (breaths/min)',
            type: QuestionnaireItemTypeCode.QuestionString,
            linkId: '4ab',
          },
        ],
      },
      {
        text: 'O2 Sat (%)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4b',
      },
      {
        text: 'Supp O2',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4c',
      },
      {
        text: 'Blood Pressure',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4d',
      },
      {
        text: 'Standing 1 Minute BP',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4e',
      },
      {
        text: 'Standing 3 Minute BP',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4f',
      },
      {
        text: 'HR (BPM)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4g',
      },
      {
        text: 'Temp (°C)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4h',
      },
      {
        text: 'Consciousness',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4i',
      },
      {
        text: 'Pain Score',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4j',
      },
      {
        text: 'Blood Glucose (mmol/L)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4k',
      },
      {
        text: 'Spine Pain (VAS)',
        type: QuestionnaireItemTypeCode.QuestionString,
        linkId: '4l',
      },
    ],
  },
  {
    text: 'Average BASFI Score',
    type: QuestionnaireItemTypeCode.QuestionString,
    linkId: '5',
    item: null,
  },
]

export const summaryDefinition: Questionnaire = {
  extension: [
    {
      url: 'https://leedsth.nhs.uk/cds/template',
    },
  ],
  useContext: [
    {
      valueCodeableConcept: {
        coding: [
          {
            code: 'Daily',
            system: 'https://leedsth.nhs.uk/summary-definition/date-grouping-strategy',
          },
        ],
      },
    },
  ],
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5561803+01:00',
    isRedacted: false,
    dataSources: [],
  },
  identifier: [
    {
      system: 'TestSystem',
      value: 'TestValue',
    },
  ],
  status: QuestionnairePublicationStatus.Active,
  id: '1',
  title: 'Observations',
  item: summaryDefinitionItems,
}

const summaryRecordOne: QuestionnaireResponse = {
  authored: {
    value: '2022-02-17T17:23:56+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '1',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '5 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'No',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '25',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '25(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '25(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '92 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '93',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '144 / 122',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '120',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '143',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '88',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '37',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Alert',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '8',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '75',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4l',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: false,
                  valueString: null,
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '5',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: null,
          valueInteger: null,
          valueDecimal: 70.5,
          item: null,
        },
      ],
    },
  ],
}

const summaryRecordTwo = {
  authored: {
    value: '2022-02-12T12:33:00+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '2',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '40 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'Yes',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '31',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '31(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '31(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '81 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '95',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '160 / 140',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '140',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '132',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '74',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '64',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Alert',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '3',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '65',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4l',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: null,
                  valueInteger: null,
                  valueDecimal: 20.5,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '5',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: true,
          valueString: null,
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
  ],
}

const summaryRecordThree = {
  authored: {
    value: '2022-01-01T16:02:00+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-14T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.Completed,
  id: '3',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '17 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'No',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '17',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '95 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '103',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '125 / 115',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '129',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '123',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '120',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '23',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Confusion',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '5',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '102',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4l',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: null,
                  valueInteger: 45,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '5',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: null,
          valueInteger: null,
          valueDecimal: 12.5,
          item: null,
        },
      ],
    },
  ],
}

const summaryRecordWithdrawn = {
  authored: {
    value: '2022-01-01T16:02:00+00:00',
    kind: PartialDateTimeKindCode.DateTime,
  },
  metadata: {
    requestedWhen: '2022-04-15T14:07:12.5779177+01:00',
    isRedacted: false,
    dataSources: [],
  },
  status: QuestionnaireResponseStatus.EnteredInError,
  id: '3',
  item: [
    {
      linkId: '1',
      extension: [
        // perhaps need to run the types script?
        {
          valueCodeableConcept: {
            coding: [
              {
                code: 'Medium',
                system: 'ScoreStatus',
              },
            ],
          },
          url: 'https://leedsth.nhs.uk/summary-records/score-status',
        },
      ],
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: '17 NEWS',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '2',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'ICON',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '3',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'No',
          valueInteger: null,
          valueDecimal: null,
          item: null,
        },
      ],
    },
    {
      linkId: '4',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: 'CHECKBOX',
          valueInteger: null,
          valueDecimal: null,
          item: [
            {
              linkId: '4a',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '17',
                  valueInteger: null,
                  valueDecimal: null,
                  item: [
                    {
                      linkId: '4aa',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(1)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                    {
                      linkId: '4ab',
                      answer: [
                        {
                          valueDateTime: null,
                          valueBoolean: null,
                          valueString: '17(2)',
                          valueInteger: null,
                          valueDecimal: null,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              linkId: '4b',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '95 (Target 94-98 %)',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4c',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '103',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4d',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '125 / 115',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4e',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '129',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4f',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '123',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4g',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '120',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4h',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '23',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4i',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: 'Confusion',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4j',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '5',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4k',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: '102',
                  valueInteger: null,
                  valueDecimal: null,
                },
              ],
            },
            {
              linkId: '4l',
              answer: [
                {
                  valueDateTime: null,
                  valueBoolean: null,
                  valueString: null,
                  valueInteger: 45,
                  valueDecimal: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      linkId: '5',
      extension: null,
      answer: [
        {
          valueDateTime: null,
          valueBoolean: null,
          valueString: null,
          valueInteger: null,
          valueDecimal: 12.5,
          item: null,
        },
      ],
    },
  ],
}

export const adminActionsForForms: AdminActionsForQuestionnaire[] = [
  {
    questionnaire: '1',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 1')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 1')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 1')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '2',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 2')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 2')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 2')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
  {
    questionnaire: '3',
    adminActions: [
      {
        text: 'View',
        clickHandler: () => {
          console.log('Viewing submission 3')
        },
        leftIcon: { type: 'info-circle', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Edit',
        clickHandler: () => {
          console.log('Editing submission 3')
        },
        leftIcon: { type: 'edit', size: 'medium' },
        rightIcon: { type: 'external-link', size: 'medium' },
      },
      {
        text: 'Delete',
        clickHandler: () => {
          console.log('Deleting submission 3')
        },
        leftIcon: { type: 'exclamation', size: 'medium' },
      },
    ],
  },
]

export const summaryRecordsList: QuestionnaireResponse[] = [summaryRecordOne, summaryRecordTwo, summaryRecordThree]

export const summaryRecordsWithdrawnList: QuestionnaireResponse[] = [
  summaryRecordOne,
  summaryRecordTwo,
  summaryRecordWithdrawn,
]
