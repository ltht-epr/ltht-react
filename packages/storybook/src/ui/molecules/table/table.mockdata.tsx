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

const customComponent = <button type="button">This cell is customised</button>

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

export const mockTableDataForPagination: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'recordNumber',
      cellProps: {
        text: 'No.',
      },
    },
    {
      type: 'accessor',
      id: 'name',
      cellProps: {
        text: 'Name',
      },
    },
    {
      type: 'accessor',
      id: 'question1',
      cellProps: {
        text: 'Home Town',
      },
    },
    {
      type: 'accessor',
      id: 'question2',
      cellProps: {
        text: 'Date of Birth',
      },
    },
    {
      type: 'accessor',
      id: 'question3',
      cellProps: {
        text: 'Favourite Color',
      },
    },
    {
      type: 'accessor',
      id: 'question4',
      cellProps: {
        text: 'Phone',
      },
    },
  ],
  rows: [
    {
      recordNumber: {
        text: '1',
      },
      name: {
        text: 'Cathy Ortiz',
      },
      question1: {
        text: 'Garland',
      },
      question2: {
        text: 'Sat Nov 19 1949',
      },
      question3: {
        text: 'plum',
      },
      question4: {
        text: '501.991.4018 x126',
      },
    },
    {
      recordNumber: {
        text: '2',
      },
      name: {
        text: 'Kurt Wolff',
      },
      question1: {
        text: 'Mayaguez',
      },
      question2: {
        text: 'Thu Jun 22 1961',
      },
      question3: {
        text: 'pink',
      },
      question4: {
        text: '(836) 936-8132',
      },
    },
    {
      recordNumber: {
        text: '3',
      },
      name: {
        text: 'Johnnie Halvorson',
      },
      question1: {
        text: 'Taylor',
      },
      question2: {
        text: 'Mon Aug 10 1942',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '1-667-309-7982 x11582',
      },
    },
    {
      recordNumber: {
        text: '4',
      },
      name: {
        text: 'Beulah Cormier',
      },
      question1: {
        text: 'Alpharetta',
      },
      question2: {
        text: 'Thu Nov 09 1989',
      },
      question3: {
        text: 'violet',
      },
      question4: {
        text: '(419) 895-1855 x799',
      },
    },
    {
      recordNumber: {
        text: '5',
      },
      name: {
        text: 'Olive Quitzon',
      },
      question1: {
        text: 'Brentwood',
      },
      question2: {
        text: 'Sun Nov 07 1999',
      },
      question3: {
        text: 'orchid',
      },
      question4: {
        text: '906.787.0471',
      },
    },
    {
      recordNumber: {
        text: '6',
      },
      name: {
        text: 'Madeline Stroman',
      },
      question1: {
        text: 'Hoboken',
      },
      question2: {
        text: 'Fri Dec 23 1983',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '795.576.4532 x92997',
      },
    },
    {
      recordNumber: {
        text: '7',
      },
      name: {
        text: 'Tomas Dietrich',
      },
      question1: {
        text: 'Colorado Springs',
      },
      question2: {
        text: 'Mon Aug 27 1979',
      },
      question3: {
        text: 'fuchsia',
      },
      question4: {
        text: '1-808-976-2860 x725',
      },
    },
    {
      recordNumber: {
        text: '8',
      },
      name: {
        text: 'Ernesto Gutkowski',
      },
      question1: {
        text: 'Garland',
      },
      question2: {
        text: 'Sun Jul 09 2000',
      },
      question3: {
        text: 'violet',
      },
      question4: {
        text: '1-619-529-4673 x94946',
      },
    },
    {
      recordNumber: {
        text: '9',
      },
      name: {
        text: 'Loren Altenwerth',
      },
      question1: {
        text: 'Huntington Beach',
      },
      question2: {
        text: 'Tue Mar 19 1968',
      },
      question3: {
        text: 'lime',
      },
      question4: {
        text: '1-880-293-0993 x756',
      },
    },
    {
      recordNumber: {
        text: '10',
      },
      name: {
        text: 'Harold Dicki',
      },
      question1: {
        text: 'Sparks',
      },
      question2: {
        text: 'Tue Jul 18 1967',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '376.705.5420',
      },
    },
    {
      recordNumber: {
        text: '11',
      },
      name: {
        text: 'Shirley Brakus',
      },
      question1: {
        text: 'Milpitas',
      },
      question2: {
        text: 'Mon Oct 18 2004',
      },
      question3: {
        text: 'teal',
      },
      question4: {
        text: '(214) 334-8544',
      },
    },
    {
      recordNumber: {
        text: '12',
      },
      name: {
        text: 'Alan Bruen',
      },
      question1: {
        text: 'Galveston',
      },
      question2: {
        text: 'Fri Aug 12 1983',
      },
      question3: {
        text: 'blue',
      },
      question4: {
        text: '599.740.3779 x12738',
      },
    },
    {
      recordNumber: {
        text: '13',
      },
      name: {
        text: 'Marian Stark',
      },
      question1: {
        text: 'Thousand Oaks',
      },
      question2: {
        text: 'Mon May 13 1957',
      },
      question3: {
        text: 'blue',
      },
      question4: {
        text: '318-531-4241 x972',
      },
    },
    {
      recordNumber: {
        text: '14',
      },
      name: {
        text: 'Mr. Roger Nitzsche',
      },
      question1: {
        text: 'Johns Creek',
      },
      question2: {
        text: 'Sun Oct 01 2000',
      },
      question3: {
        text: 'yellow',
      },
      question4: {
        text: '255.304.7453 x12382',
      },
    },
    {
      recordNumber: {
        text: '15',
      },
      name: {
        text: 'Miss Brandy Treutel',
      },
      question1: {
        text: 'Cranston',
      },
      question2: {
        text: 'Sun Apr 06 1958',
      },
      question3: {
        text: 'pink',
      },
      question4: {
        text: '(881) 521-9407 x161',
      },
    },
    {
      recordNumber: {
        text: '16',
      },
      name: {
        text: 'Tricia Turcotte',
      },
      question1: {
        text: 'Rockville',
      },
      question2: {
        text: 'Mon Dec 31 2001',
      },
      question3: {
        text: 'green',
      },
      question4: {
        text: '432.645.6655 x58963',
      },
    },
    {
      recordNumber: {
        text: '17',
      },
      name: {
        text: 'Jo Lind',
      },
      question1: {
        text: 'Rogers',
      },
      question2: {
        text: 'Sat Sep 12 1981',
      },
      question3: {
        text: 'indigo',
      },
      question4: {
        text: '(837) 742-8406 x419',
      },
    },
    {
      recordNumber: {
        text: '18',
      },
      name: {
        text: 'Sylvester Hintz',
      },
      question1: {
        text: 'Jackson',
      },
      question2: {
        text: 'Fri Sep 19 1997',
      },
      question3: {
        text: 'lavender',
      },
      question4: {
        text: '1-355-326-2978 x4204',
      },
    },
    {
      recordNumber: {
        text: '19',
      },
      name: {
        text: 'Johnnie Ruecker',
      },
      question1: {
        text: 'Muncie',
      },
      question2: {
        text: 'Fri May 01 1992',
      },
      question3: {
        text: 'black',
      },
      question4: {
        text: '(551) 750-4098 x76656',
      },
    },
    {
      recordNumber: {
        text: '20',
      },
      name: {
        text: 'Georgia Gleichner',
      },
      question1: {
        text: 'Oak Park',
      },
      question2: {
        text: 'Thu Nov 05 1942',
      },
      question3: {
        text: 'black',
      },
      question4: {
        text: '478.449.4470 x326',
      },
    },
    {
      recordNumber: {
        text: '21',
      },
      name: {
        text: 'Heather Krajcik',
      },
      question1: {
        text: 'Cerritos',
      },
      question2: {
        text: 'Thu Dec 28 1989',
      },
      question3: {
        text: 'olive',
      },
      question4: {
        text: '(839) 854-0940 x180',
      },
    },
    {
      recordNumber: {
        text: '22',
      },
      name: {
        text: 'Louise Bartell',
      },
      question1: {
        text: 'Reno',
      },
      question2: {
        text: 'Thu Jul 23 1981',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '248.805.6201 x01750',
      },
    },
    {
      recordNumber: {
        text: '23',
      },
      name: {
        text: 'David Mayert',
      },
      question1: {
        text: 'Highland',
      },
      question2: {
        text: 'Wed Mar 04 1964',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '(896) 413-6090',
      },
    },
    {
      recordNumber: {
        text: '24',
      },
      name: {
        text: 'Sabrina Okuneva',
      },
      question1: {
        text: 'Lexington-Fayette',
      },
      question2: {
        text: 'Tue Sep 01 1987',
      },
      question3: {
        text: 'violet',
      },
      question4: {
        text: '508.492.8237 x530',
      },
    },
    {
      recordNumber: {
        text: '25',
      },
      name: {
        text: 'Rhonda Heidenreich',
      },
      question1: {
        text: 'Linden',
      },
      question2: {
        text: 'Wed Aug 03 1949',
      },
      question3: {
        text: 'black',
      },
      question4: {
        text: '482.994.0969 x6644',
      },
    },
    {
      recordNumber: {
        text: '26',
      },
      name: {
        text: 'Irvin Brakus',
      },
      question1: {
        text: 'Maple Grove',
      },
      question2: {
        text: 'Wed Nov 29 1950',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '832.568.5867 x682',
      },
    },
    {
      recordNumber: {
        text: '27',
      },
      name: {
        text: 'Paulette Miller PhD',
      },
      question1: {
        text: 'Miami Beach',
      },
      question2: {
        text: 'Fri Apr 27 1945',
      },
      question3: {
        text: 'lime',
      },
      question4: {
        text: '(372) 401-0718 x2333',
      },
    },
    {
      recordNumber: {
        text: '28',
      },
      name: {
        text: 'Mr. Muriel Bartell PhD',
      },
      question1: {
        text: 'Palm Beach Gardens',
      },
      question2: {
        text: 'Sun Jul 22 1945',
      },
      question3: {
        text: 'yellow',
      },
      question4: {
        text: '1-331-712-6007',
      },
    },
    {
      recordNumber: {
        text: '29',
      },
      name: {
        text: 'Mrs. Vincent Orn',
      },
      question1: {
        text: 'Brentwood',
      },
      question2: {
        text: 'Thu Sep 24 1942',
      },
      question3: {
        text: 'yellow',
      },
      question4: {
        text: '429-673-4047',
      },
    },
    {
      recordNumber: {
        text: '30',
      },
      name: {
        text: 'Mrs. Sheryl Ferry',
      },
      question1: {
        text: 'Palo Alto',
      },
      question2: {
        text: 'Mon Sep 11 1944',
      },
      question3: {
        text: 'red',
      },
      question4: {
        text: '1-803-990-9742 x8368',
      },
    },
    {
      recordNumber: {
        text: '31',
      },
      name: {
        text: 'Nick Howell',
      },
      question1: {
        text: 'Orlando',
      },
      question2: {
        text: 'Wed Mar 16 1960',
      },
      question3: {
        text: 'red',
      },
      question4: {
        text: '(573) 456-6431 x32559',
      },
    },
    {
      recordNumber: {
        text: '32',
      },
      name: {
        text: 'Lucas Schowalter',
      },
      question1: {
        text: 'Miami Gardens',
      },
      question2: {
        text: 'Thu Feb 23 1984',
      },
      question3: {
        text: 'fuchsia',
      },
      question4: {
        text: '1-492-952-5568 x607',
      },
    },
    {
      recordNumber: {
        text: '33',
      },
      name: {
        text: 'Kara Thompson',
      },
      question1: {
        text: 'Marysville',
      },
      question2: {
        text: 'Thu Jan 03 1946',
      },
      question3: {
        text: 'plum',
      },
      question4: {
        text: '1-397-327-5889 x0403',
      },
    },
    {
      recordNumber: {
        text: '34',
      },
      name: {
        text: 'Shawna Batz',
      },
      question1: {
        text: 'Blue Springs',
      },
      question2: {
        text: 'Fri Mar 08 1968',
      },
      question3: {
        text: 'pink',
      },
      question4: {
        text: '414-518-6814 x88825',
      },
    },
    {
      recordNumber: {
        text: '35',
      },
      name: {
        text: 'Robert Gerlach',
      },
      question1: {
        text: 'Plymouth',
      },
      question2: {
        text: 'Thu May 27 2004',
      },
      question3: {
        text: 'turquoise',
      },
      question4: {
        text: '928-890-0877 x54266',
      },
    },
    {
      recordNumber: {
        text: '36',
      },
      name: {
        text: 'Curtis Schultz',
      },
      question1: {
        text: 'Rochester',
      },
      question2: {
        text: 'Mon Aug 09 1971',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '(825) 877-3068 x327',
      },
    },
    {
      recordNumber: {
        text: '37',
      },
      name: {
        text: 'James Bartoletti',
      },
      question1: {
        text: 'Marietta',
      },
      question2: {
        text: 'Fri May 17 1985',
      },
      question3: {
        text: 'green',
      },
      question4: {
        text: '748-368-3318 x6852',
      },
    },
    {
      recordNumber: {
        text: '38',
      },
      name: {
        text: 'Kent Aufderhar',
      },
      question1: {
        text: 'Freeport',
      },
      question2: {
        text: 'Fri Apr 21 1944',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '1-520-235-8653 x234',
      },
    },
    {
      recordNumber: {
        text: '39',
      },
      name: {
        text: 'Maggie Romaguera',
      },
      question1: {
        text: 'Tyler',
      },
      question2: {
        text: 'Sat May 15 1971',
      },
      question3: {
        text: 'purple',
      },
      question4: {
        text: '(535) 999-1488 x512',
      },
    },
    {
      recordNumber: {
        text: '40',
      },
      name: {
        text: 'Cassandra Romaguera',
      },
      question1: {
        text: 'Smyrna',
      },
      question2: {
        text: 'Fri Apr 23 1993',
      },
      question3: {
        text: 'ivory',
      },
      question4: {
        text: '479-800-2643 x510',
      },
    },
    {
      recordNumber: {
        text: '41',
      },
      name: {
        text: 'Mr. Kerry Weimann I',
      },
      question1: {
        text: 'Pontiac',
      },
      question2: {
        text: 'Wed Aug 13 1947',
      },
      question3: {
        text: 'fuchsia',
      },
      question4: {
        text: '(682) 589-1426 x10545',
      },
    },
    {
      recordNumber: {
        text: '42',
      },
      name: {
        text: 'Ian Medhurst',
      },
      question1: {
        text: 'Westfield',
      },
      question2: {
        text: 'Sat Jan 24 1976',
      },
      question3: {
        text: 'orange',
      },
      question4: {
        text: '396-390-6854 x333',
      },
    },
    {
      recordNumber: {
        text: '43',
      },
      name: {
        text: 'Georgia Thompson',
      },
      question1: {
        text: 'Lehi',
      },
      question2: {
        text: 'Wed Oct 20 1954',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '(500) 634-9591 x379',
      },
    },
    {
      recordNumber: {
        text: '44',
      },
      name: {
        text: 'Jean Trantow',
      },
      question1: {
        text: 'Riverview',
      },
      question2: {
        text: 'Mon Oct 10 1977',
      },
      question3: {
        text: 'sky blue',
      },
      question4: {
        text: '267-831-2019 x683',
      },
    },
    {
      recordNumber: {
        text: '45',
      },
      name: {
        text: 'Tracy Ondricka',
      },
      question1: {
        text: 'Buena Park',
      },
      question2: {
        text: 'Wed Nov 13 1996',
      },
      question3: {
        text: 'yellow',
      },
      question4: {
        text: '1-603-467-7442 x07214',
      },
    },
    {
      recordNumber: {
        text: '46',
      },
      name: {
        text: 'Carmen Bartell III',
      },
      question1: {
        text: 'Avondale',
      },
      question2: {
        text: 'Mon Oct 21 1963',
      },
      question3: {
        text: 'blue',
      },
      question4: {
        text: '798.751.1559 x39514',
      },
    },
    {
      recordNumber: {
        text: '47',
      },
      name: {
        text: 'Ray Haag',
      },
      question1: {
        text: 'Galveston',
      },
      question2: {
        text: 'Wed Dec 25 1968',
      },
      question3: {
        text: 'black',
      },
      question4: {
        text: '400.701.6816 x64711',
      },
    },
    {
      recordNumber: {
        text: '48',
      },
      name: {
        text: 'Laverne Grimes',
      },
      question1: {
        text: 'Findlay',
      },
      question2: {
        text: 'Sat Jan 20 1979',
      },
      question3: {
        text: 'sky blue',
      },
      question4: {
        text: '(295) 684-9156 x7528',
      },
    },
    {
      recordNumber: {
        text: '49',
      },
      name: {
        text: 'Andy Goldner',
      },
      question1: {
        text: 'Sierra Vista',
      },
      question2: {
        text: 'Thu Mar 16 1944',
      },
      question3: {
        text: 'salmon',
      },
      question4: {
        text: '(728) 766-7005 x03287',
      },
    },
    {
      recordNumber: {
        text: '50',
      },
      name: {
        text: 'Nettie Swaniawski',
      },
      question1: {
        text: 'Joliet',
      },
      question2: {
        text: 'Sat Feb 20 1999',
      },
      question3: {
        text: 'orange',
      },
      question4: {
        text: '683.462.2163 x790',
      },
    },
  ],
}

export const mockTableDataForVerticalPagination: TableData = {
  headers: [
    {
      type: 'accessor',
      id: 'property',
      cellProps: {
        text: '',
      },
    },
    {
      type: 'accessor',
      id: '1',
      cellProps: {
        text: '1: Kareem',
      },
    },
    {
      type: 'accessor',
      id: '2',
      cellProps: {
        text: '2: Lavada',
      },
    },
    {
      type: 'accessor',
      id: '3',
      cellProps: {
        text: '3: Clara',
      },
    },
    {
      type: 'accessor',
      id: '4',
      cellProps: {
        text: '4: Antwon',
      },
    },
    {
      type: 'accessor',
      id: '5',
      cellProps: {
        text: '5: Donald',
      },
    },
    {
      type: 'accessor',
      id: '6',
      cellProps: {
        text: '6: Issac',
      },
    },
    {
      type: 'accessor',
      id: '7',
      cellProps: {
        text: '7: Isaiah',
      },
    },
    {
      type: 'accessor',
      id: '8',
      cellProps: {
        text: '8: Alexanne',
      },
    },
    {
      type: 'accessor',
      id: '9',
      cellProps: {
        text: '9: Esperanza',
      },
    },
    {
      type: 'accessor',
      id: '10',
      cellProps: {
        text: '10: Marisa',
      },
    },
    {
      type: 'accessor',
      id: '11',
      cellProps: {
        text: '11: Jessica',
      },
    },
    {
      type: 'accessor',
      id: '12',
      cellProps: {
        text: '12: Milton',
      },
    },
    {
      type: 'accessor',
      id: '13',
      cellProps: {
        text: '13: Tyree',
      },
    },
    {
      type: 'accessor',
      id: '14',
      cellProps: {
        text: '14: Mack',
      },
    },
    {
      type: 'accessor',
      id: '15',
      cellProps: {
        text: '15: Cecile',
      },
    },
    {
      type: 'accessor',
      id: '16',
      cellProps: {
        text: '16: Rashad',
      },
    },
    {
      type: 'accessor',
      id: '17',
      cellProps: {
        text: '17: Vicente',
      },
    },
    {
      type: 'accessor',
      id: '18',
      cellProps: {
        text: '18: Verona',
      },
    },
    {
      type: 'accessor',
      id: '19',
      cellProps: {
        text: '19: Jedidiah',
      },
    },
    {
      type: 'accessor',
      id: '20',
      cellProps: {
        text: '20: Seamus',
      },
    },
    {
      type: 'accessor',
      id: '21',
      cellProps: {
        text: '21: Johan',
      },
    },
    {
      type: 'accessor',
      id: '22',
      cellProps: {
        text: '22: Jasen',
      },
    },
    {
      type: 'accessor',
      id: '23',
      cellProps: {
        text: '23: Francisca',
      },
    },
    {
      type: 'accessor',
      id: '24',
      cellProps: {
        text: '24: Keith',
      },
    },
    {
      type: 'accessor',
      id: '25',
      cellProps: {
        text: '25: Theo',
      },
    },
    {
      type: 'accessor',
      id: '26',
      cellProps: {
        text: '26: Felton',
      },
    },
    {
      type: 'accessor',
      id: '27',
      cellProps: {
        text: '27: Nia',
      },
    },
    {
      type: 'accessor',
      id: '28',
      cellProps: {
        text: '28: Jaunita',
      },
    },
    {
      type: 'accessor',
      id: '29',
      cellProps: {
        text: '29: Dashawn',
      },
    },
    {
      type: 'accessor',
      id: '30',
      cellProps: {
        text: '30: Shyanne',
      },
    },
    {
      type: 'accessor',
      id: '31',
      cellProps: {
        text: '31: Mona',
      },
    },
    {
      type: 'accessor',
      id: '32',
      cellProps: {
        text: '32: Verna',
      },
    },
    {
      type: 'accessor',
      id: '33',
      cellProps: {
        text: '33: Jack',
      },
    },
    {
      type: 'accessor',
      id: '34',
      cellProps: {
        text: '34: Belle',
      },
    },
    {
      type: 'accessor',
      id: '35',
      cellProps: {
        text: '35: Edwardo',
      },
    },
    {
      type: 'accessor',
      id: '36',
      cellProps: {
        text: '36: Maynard',
      },
    },
    {
      type: 'accessor',
      id: '37',
      cellProps: {
        text: '37: Hilton',
      },
    },
    {
      type: 'accessor',
      id: '38',
      cellProps: {
        text: '38: Jett',
      },
    },
    {
      type: 'accessor',
      id: '39',
      cellProps: {
        text: '39: Ayden',
      },
    },
    {
      type: 'accessor',
      id: '40',
      cellProps: {
        text: '40: Claire',
      },
    },
    {
      type: 'accessor',
      id: '41',
      cellProps: {
        text: '41: Jadyn',
      },
    },
    {
      type: 'accessor',
      id: '42',
      cellProps: {
        text: '42: Darrin',
      },
    },
    {
      type: 'accessor',
      id: '43',
      cellProps: {
        text: '43: Missouri',
      },
    },
    {
      type: 'accessor',
      id: '44',
      cellProps: {
        text: '44: Antwan',
      },
    },
    {
      type: 'accessor',
      id: '45',
      cellProps: {
        text: '45: Hertha',
      },
    },
    {
      type: 'accessor',
      id: '46',
      cellProps: {
        text: '46: Carlos',
      },
    },
    {
      type: 'accessor',
      id: '47',
      cellProps: {
        text: '47: Brigitte',
      },
    },
    {
      type: 'accessor',
      id: '48',
      cellProps: {
        text: '48: Rene',
      },
    },
    {
      type: 'accessor',
      id: '49',
      cellProps: {
        text: '49: Tiara',
      },
    },
    {
      type: 'accessor',
      id: '50',
      cellProps: {
        text: '50: Christopher',
      },
    },
  ],
  rows: [
    {
      '1': {
        text: 'violet',
      },
      '2': {
        text: 'orchid',
      },
      '3': {
        text: 'lime',
      },
      '4': {
        text: 'indigo',
      },
      '5': {
        text: 'yellow',
      },
      '6': {
        text: 'mint green',
      },
      '7': {
        text: 'turquoise',
      },
      '8': {
        text: 'teal',
      },
      '9': {
        text: 'ivory',
      },
      '10': {
        text: 'pink',
      },
      '11': {
        text: 'salmon',
      },
      '12': {
        text: 'magenta',
      },
      '13': {
        text: 'grey',
      },
      '14': {
        text: 'lime',
      },
      '15': {
        text: 'mint green',
      },
      '16': {
        text: 'tan',
      },
      '17': {
        text: 'violet',
      },
      '18': {
        text: 'silver',
      },
      '19': {
        text: 'teal',
      },
      '20': {
        text: 'magenta',
      },
      '21': {
        text: 'magenta',
      },
      '22': {
        text: 'purple',
      },
      '23': {
        text: 'green',
      },
      '24': {
        text: 'turquoise',
      },
      '25': {
        text: 'orange',
      },
      '26': {
        text: 'lime',
      },
      '27': {
        text: 'white',
      },
      '28': {
        text: 'silver',
      },
      '29': {
        text: 'fuchsia',
      },
      '30': {
        text: 'turquoise',
      },
      '31': {
        text: 'blue',
      },
      '32': {
        text: 'lavender',
      },
      '33': {
        text: 'lavender',
      },
      '34': {
        text: 'lime',
      },
      '35': {
        text: 'mint green',
      },
      '36': {
        text: 'pink',
      },
      '37': {
        text: 'violet',
      },
      '38': {
        text: 'grey',
      },
      '39': {
        text: 'silver',
      },
      '40': {
        text: 'black',
      },
      '41': {
        text: 'grey',
      },
      '42': {
        text: 'salmon',
      },
      '43': {
        text: 'ivory',
      },
      '44': {
        text: 'mint green',
      },
      '45': {
        text: 'teal',
      },
      '46': {
        text: 'orchid',
      },
      '47': {
        text: 'yellow',
      },
      '48': {
        text: 'turquoise',
      },
      '49': {
        text: 'orange',
      },
      '50': {
        text: 'black',
      },
      property: {
        text: 'Favourite Colour?',
      },
    },
    {
      '1': {
        text: 'Smart',
      },
      '2': {
        text: 'Jeep',
      },
      '3': {
        text: 'Cadillac',
      },
      '4': {
        text: 'Jeep',
      },
      '5': {
        text: 'Audi',
      },
      '6': {
        text: 'Bugatti',
      },
      '7': {
        text: 'Volvo',
      },
      '8': {
        text: 'Fiat',
      },
      '9': {
        text: 'Lamborghini',
      },
      '10': {
        text: 'Smart',
      },
      '11': {
        text: 'Volkswagen',
      },
      '12': {
        text: 'BMW',
      },
      '13': {
        text: 'Bugatti',
      },
      '14': {
        text: 'Toyota',
      },
      '15': {
        text: 'Land Rover',
      },
      '16': {
        text: 'Rolls Royce',
      },
      '17': {
        text: 'Smart',
      },
      '18': {
        text: 'Honda',
      },
      '19': {
        text: 'Bentley',
      },
      '20': {
        text: 'Chrysler',
      },
      '21': {
        text: 'Porsche',
      },
      '22': {
        text: 'Cadillac',
      },
      '23': {
        text: 'Audi',
      },
      '24': {
        text: 'BMW',
      },
      '25': {
        text: 'Mercedes Benz',
      },
      '26': {
        text: 'Nissan',
      },
      '27': {
        text: 'Rolls Royce',
      },
      '28': {
        text: 'Land Rover',
      },
      '29': {
        text: 'Rolls Royce',
      },
      '30': {
        text: 'Nissan',
      },
      '31': {
        text: 'Lamborghini',
      },
      '32': {
        text: 'Lamborghini',
      },
      '33': {
        text: 'Rolls Royce',
      },
      '34': {
        text: 'Volkswagen',
      },
      '35': {
        text: 'Rolls Royce',
      },
      '36': {
        text: 'Smart',
      },
      '37': {
        text: 'Smart',
      },
      '38': {
        text: 'Volvo',
      },
      '39': {
        text: 'Dodge',
      },
      '40': {
        text: 'Volkswagen',
      },
      '41': {
        text: 'Ford',
      },
      '42': {
        text: 'Polestar',
      },
      '43': {
        text: 'Mercedes Benz',
      },
      '44': {
        text: 'Chrysler',
      },
      '45': {
        text: 'Cadillac',
      },
      '46': {
        text: 'Kia',
      },
      '47': {
        text: 'Nissan',
      },
      '48': {
        text: 'Mini',
      },
      '49': {
        text: 'BMW',
      },
      '50': {
        text: 'Toyota',
      },
      property: {
        text: 'Favourite Car Brand?',
      },
    },
    {
      '1': {
        text: 'snake',
      },
      '2': {
        text: 'cow',
      },
      '3': {
        text: 'snake',
      },
      '4': {
        text: 'rabbit',
      },
      '5': {
        text: 'cat',
      },
      '6': {
        text: 'cat',
      },
      '7': {
        text: 'cetacean',
      },
      '8': {
        text: 'insect',
      },
      '9': {
        text: 'cat',
      },
      '10': {
        text: 'horse',
      },
      '11': {
        text: 'rabbit',
      },
      '12': {
        text: 'cetacean',
      },
      '13': {
        text: 'lion',
      },
      '14': {
        text: 'dog',
      },
      '15': {
        text: 'rabbit',
      },
      '16': {
        text: 'fish',
      },
      '17': {
        text: 'cetacean',
      },
      '18': {
        text: 'bird',
      },
      '19': {
        text: 'cow',
      },
      '20': {
        text: 'snake',
      },
      '21': {
        text: 'crocodilia',
      },
      '22': {
        text: 'rabbit',
      },
      '23': {
        text: 'rabbit',
      },
      '24': {
        text: 'bird',
      },
      '25': {
        text: 'crocodilia',
      },
      '26': {
        text: 'bear',
      },
      '27': {
        text: 'bear',
      },
      '28': {
        text: 'fish',
      },
      '29': {
        text: 'cow',
      },
      '30': {
        text: 'cetacean',
      },
      '31': {
        text: 'crocodilia',
      },
      '32': {
        text: 'crocodilia',
      },
      '33': {
        text: 'bird',
      },
      '34': {
        text: 'horse',
      },
      '35': {
        text: 'snake',
      },
      '36': {
        text: 'bird',
      },
      '37': {
        text: 'crocodilia',
      },
      '38': {
        text: 'lion',
      },
      '39': {
        text: 'snake',
      },
      '40': {
        text: 'cetacean',
      },
      '41': {
        text: 'crocodilia',
      },
      '42': {
        text: 'crocodilia',
      },
      '43': {
        text: 'cow',
      },
      '44': {
        text: 'horse',
      },
      '45': {
        text: 'cetacean',
      },
      '46': {
        text: 'snake',
      },
      '47': {
        text: 'crocodilia',
      },
      '48': {
        text: 'snake',
      },
      '49': {
        text: 'lion',
      },
      '50': {
        text: 'lion',
      },
      property: {
        text: 'Favourite Animal?',
      },
    },
    {
      '1': {
        text: 'China',
      },
      '2': {
        text: 'Luxembourg',
      },
      '3': {
        text: 'Virgin Island...',
      },
      '4': {
        text: 'Russian Feder...',
      },
      '5': {
        text: 'Jordan',
      },
      '6': {
        text: 'Swaziland',
      },
      '7': {
        text: 'Wallis and Fu...',
      },
      '8': {
        text: "Cote d'Ivoire",
      },
      '9': {
        text: 'Romania',
      },
      '10': {
        text: 'Greenland',
      },
      '11': {
        text: 'Tunisia',
      },
      '12': {
        text: 'Brunei Daruss...',
      },
      '13': {
        text: 'Cameroon',
      },
      '14': {
        text: 'Togo',
      },
      '15': {
        text: 'Zambia',
      },
      '16': {
        text: 'Antarctica (t...',
      },
      '17': {
        text: 'French Southe...',
      },
      '18': {
        text: 'Vanuatu',
      },
      '19': {
        text: 'Thailand',
      },
      '20': {
        text: 'Northern Mari...',
      },
      '21': {
        text: 'Argentina',
      },
      '22': {
        text: 'Cayman Island...',
      },
      '23': {
        text: 'Angola',
      },
      '24': {
        text: 'Spain',
      },
      '25': {
        text: 'Lesotho',
      },
      '26': {
        text: 'Congo',
      },
      '27': {
        text: 'Macao',
      },
      '28': {
        text: 'Kazakhstan',
      },
      '29': {
        text: 'Uzbekistan',
      },
      '30': {
        text: 'Czech Republi...',
      },
      '31': {
        text: 'Mozambique',
      },
      '32': {
        text: 'Sweden',
      },
      '33': {
        text: 'Japan',
      },
      '34': {
        text: 'Democratic Pe...',
      },
      '35': {
        text: 'Kiribati',
      },
      '36': {
        text: 'Armenia',
      },
      '37': {
        text: 'Malaysia',
      },
      '38': {
        text: 'Puerto Rico',
      },
      '39': {
        text: 'Tonga',
      },
      '40': {
        text: 'Belize',
      },
      '41': {
        text: 'Christmas Isl...',
      },
      '42': {
        text: 'Rwanda',
      },
      '43': {
        text: 'Algeria',
      },
      '44': {
        text: 'Antarctica (t...',
      },
      '45': {
        text: 'Vanuatu',
      },
      '46': {
        text: 'Saint Barthel...',
      },
      '47': {
        text: 'Burkina Faso',
      },
      '48': {
        text: 'Belize',
      },
      '49': {
        text: 'Jordan',
      },
      '50': {
        text: 'Gibraltar',
      },
      property: {
        text: 'Favourite Country Visited?',
      },
    },
    {
      '1': {
        text: 'New York',
      },
      '2': {
        text: 'Joplin',
      },
      '3': {
        text: 'Hartford',
      },
      '4': {
        text: 'West Sacramen...',
      },
      '5': {
        text: 'Deltona',
      },
      '6': {
        text: 'Pinellas Park',
      },
      '7': {
        text: 'Ankeny',
      },
      '8': {
        text: 'Medford',
      },
      '9': {
        text: 'Fountain Vall...',
      },
      '10': {
        text: 'Council Bluff...',
      },
      '11': {
        text: 'Thousand Oaks',
      },
      '12': {
        text: 'Arvada',
      },
      '13': {
        text: 'Bellflower',
      },
      '14': {
        text: 'South Whittie...',
      },
      '15': {
        text: 'Warren',
      },
      '16': {
        text: 'Dallas',
      },
      '17': {
        text: 'Maricopa',
      },
      '18': {
        text: 'Rialto',
      },
      '19': {
        text: 'Duluth',
      },
      '20': {
        text: 'East Lansing',
      },
      '21': {
        text: 'Duluth',
      },
      '22': {
        text: 'Meriden',
      },
      '23': {
        text: 'Berwyn',
      },
      '24': {
        text: 'Weston',
      },
      '25': {
        text: 'Kettering',
      },
      '26': {
        text: 'Pomona',
      },
      '27': {
        text: 'Santee',
      },
      '28': {
        text: 'Midland',
      },
      '29': {
        text: 'Fountain Vall...',
      },
      '30': {
        text: 'Amarillo',
      },
      '31': {
        text: 'Los Angeles',
      },
      '32': {
        text: 'Commerce City',
      },
      '33': {
        text: 'Appleton',
      },
      '34': {
        text: 'Elmhurst',
      },
      '35': {
        text: 'Grapevine',
      },
      '36': {
        text: 'Eagan',
      },
      '37': {
        text: 'Tulsa',
      },
      '38': {
        text: 'Mission',
      },
      '39': {
        text: 'New Orleans',
      },
      '40': {
        text: 'Roswell',
      },
      '41': {
        text: 'New York',
      },
      '42': {
        text: 'Brooklyn Park',
      },
      '43': {
        text: 'Cypress',
      },
      '44': {
        text: 'Goodyear',
      },
      '45': {
        text: 'Fort Smith',
      },
      '46': {
        text: 'Manchester',
      },
      '47': {
        text: 'Chino',
      },
      '48': {
        text: 'Lehi',
      },
      '49': {
        text: 'Pensacola',
      },
      '50': {
        text: 'Manchester',
      },
      property: {
        text: 'Favourite City?',
      },
    },
  ],
}
