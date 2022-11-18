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
      name: {
        text: 'Lindsey Spencer Jr.',
      },
      question1: {
        text: 'Hanford',
      },
      question2: {
        text: 'Thu Aug 07 1980',
      },
      question3: {
        text: 'salmon',
      },
      question4: {
        text: '(713) 772-6339 x83597',
      },
    },
    {
      name: {
        text: 'Marc Berge',
      },
      question1: {
        text: 'San Antonio',
      },
      question2: {
        text: 'Fri Oct 03 1969',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '1-288-606-1658 x1732',
      },
    },
    {
      name: {
        text: 'Darlene Cormier III',
      },
      question1: {
        text: 'Waco',
      },
      question2: {
        text: 'Sun Jul 20 1980',
      },
      question3: {
        text: 'grey',
      },
      question4: {
        text: '(850) 236-1279 x25342',
      },
    },
    {
      name: {
        text: 'Christopher Bayer',
      },
      question1: {
        text: 'Fairfield',
      },
      question2: {
        text: 'Sun Apr 29 1979',
      },
      question3: {
        text: 'lime',
      },
      question4: {
        text: '741-643-5904',
      },
    },
    {
      name: {
        text: 'Darrel Bashirian',
      },
      question1: {
        text: 'Victoria',
      },
      question2: {
        text: 'Thu Feb 13 1992',
      },
      question3: {
        text: 'ivory',
      },
      question4: {
        text: '1-212-690-1648',
      },
    },
    {
      name: {
        text: 'Dr. Janis Beahan',
      },
      question1: {
        text: 'North Little Rock',
      },
      question2: {
        text: 'Mon Nov 28 1994',
      },
      question3: {
        text: 'indigo',
      },
      question4: {
        text: '951.501.6972 x2441',
      },
    },
    {
      name: {
        text: 'Lynda Gleason',
      },
      question1: {
        text: 'Boise City',
      },
      question2: {
        text: 'Thu Dec 10 1942',
      },
      question3: {
        text: 'pink',
      },
      question4: {
        text: '269.477.6054 x0321',
      },
    },
    {
      name: {
        text: 'Johnnie Schaefer',
      },
      question1: {
        text: 'Wichita Falls',
      },
      question2: {
        text: 'Wed Sep 07 1949',
      },
      question3: {
        text: 'turquoise',
      },
      question4: {
        text: '(904) 690-5129 x68441',
      },
    },
    {
      name: {
        text: 'George Beatty',
      },
      question1: {
        text: 'Amarillo',
      },
      question2: {
        text: 'Sat Mar 08 1975',
      },
      question3: {
        text: 'azure',
      },
      question4: {
        text: '(261) 748-3368 x72263',
      },
    },
    {
      name: {
        text: 'Billie Roberts',
      },
      question1: {
        text: 'Bentonville',
      },
      question2: {
        text: 'Fri Apr 24 1942',
      },
      question3: {
        text: 'lime',
      },
      question4: {
        text: '1-203-310-4269 x92824',
      },
    },
    {
      name: {
        text: 'Thelma Willms',
      },
      question1: {
        text: 'Grand Prairie',
      },
      question2: {
        text: 'Mon Jul 15 1985',
      },
      question3: {
        text: 'ivory',
      },
      question4: {
        text: '591.462.0352 x964',
      },
    },
    {
      name: {
        text: 'Grady Wilkinson',
      },
      question1: {
        text: 'Farmington',
      },
      question2: {
        text: 'Sun Aug 15 1943',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '(618) 277-0093 x5403',
      },
    },
    {
      name: {
        text: 'Doug Lubowitz III',
      },
      question1: {
        text: 'Tampa',
      },
      question2: {
        text: 'Thu Oct 06 1983',
      },
      question3: {
        text: 'pink',
      },
      question4: {
        text: '(787) 596-3079 x1673',
      },
    },
    {
      name: {
        text: 'Leticia Bosco',
      },
      question1: {
        text: 'Sierra Vista',
      },
      question2: {
        text: 'Wed Nov 19 1969',
      },
      question3: {
        text: 'plum',
      },
      question4: {
        text: '969-844-6769 x89176',
      },
    },
    {
      name: {
        text: 'Olivia Mosciski',
      },
      question1: {
        text: 'Richmond',
      },
      question2: {
        text: 'Mon Aug 10 1964',
      },
      question3: {
        text: 'teal',
      },
      question4: {
        text: '842-403-2920 x95459',
      },
    },
    {
      name: {
        text: 'Aubrey Pouros V',
      },
      question1: {
        text: 'Oceanside',
      },
      question2: {
        text: 'Tue Jun 11 1991',
      },
      question3: {
        text: 'cyan',
      },
      question4: {
        text: '896.230.2867 x581',
      },
    },
    {
      name: {
        text: 'Shawna Kuhn',
      },
      question1: {
        text: 'Antioch',
      },
      question2: {
        text: 'Thu Dec 13 1956',
      },
      question3: {
        text: 'orange',
      },
      question4: {
        text: '465.297.0984 x7286',
      },
    },
    {
      name: {
        text: 'Taylor Hackett Jr.',
      },
      question1: {
        text: 'Chesterfield',
      },
      question2: {
        text: 'Thu Feb 28 1980',
      },
      question3: {
        text: 'purple',
      },
      question4: {
        text: '1-429-884-3046',
      },
    },
    {
      name: {
        text: 'Jeremy Goldner',
      },
      question1: {
        text: 'East Providence',
      },
      question2: {
        text: 'Wed Sep 02 1964',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '1-563-656-1309 x91498',
      },
    },
    {
      name: {
        text: 'Mr. Viola Bartoletti',
      },
      question1: {
        text: 'Newark',
      },
      question2: {
        text: 'Sat Jan 27 1979',
      },
      question3: {
        text: 'purple',
      },
      question4: {
        text: '443-330-9373 x860',
      },
    },
    {
      name: {
        text: 'Katherine Aufderhar',
      },
      question1: {
        text: 'Scranton',
      },
      question2: {
        text: 'Thu Mar 01 2001',
      },
      question3: {
        text: 'ivory',
      },
      question4: {
        text: '(879) 676-9173',
      },
    },
    {
      name: {
        text: 'Kristina Adams',
      },
      question1: {
        text: 'Maricopa',
      },
      question2: {
        text: 'Thu Jan 18 1945',
      },
      question3: {
        text: 'silver',
      },
      question4: {
        text: '352-690-2633 x914',
      },
    },
    {
      name: {
        text: 'Dominic Gottlieb',
      },
      question1: {
        text: 'Iowa City',
      },
      question2: {
        text: 'Sat Sep 15 1962',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '1-694-418-1470 x6893',
      },
    },
    {
      name: {
        text: 'Herman McKenzie',
      },
      question1: {
        text: 'Lincoln',
      },
      question2: {
        text: 'Sun Nov 18 1979',
      },
      question3: {
        text: 'yellow',
      },
      question4: {
        text: '1-967-502-4880 x8344',
      },
    },
    {
      name: {
        text: 'Dr. Benjamin Renner DVM',
      },
      question1: {
        text: 'Baytown',
      },
      question2: {
        text: 'Sun Feb 02 2003',
      },
      question3: {
        text: 'olive',
      },
      question4: {
        text: '1-893-758-6193 x9669',
      },
    },
    {
      name: {
        text: 'Bernadette Davis I',
      },
      question1: {
        text: 'Norfolk',
      },
      question2: {
        text: 'Fri Oct 10 1952',
      },
      question3: {
        text: 'violet',
      },
      question4: {
        text: '(468) 593-6863 x930',
      },
    },
    {
      name: {
        text: 'Darnell Smitham I',
      },
      question1: {
        text: 'El Centro',
      },
      question2: {
        text: 'Sat Feb 23 2002',
      },
      question3: {
        text: 'green',
      },
      question4: {
        text: '(395) 566-7147 x774',
      },
    },
    {
      name: {
        text: 'Iris Wolf DDS',
      },
      question1: {
        text: 'Cranston',
      },
      question2: {
        text: 'Fri Jun 03 1955',
      },
      question3: {
        text: 'lime',
      },
      question4: {
        text: '529-584-7844 x5735',
      },
    },
    {
      name: {
        text: 'Yvette Hoeger',
      },
      question1: {
        text: 'Fort Myers',
      },
      question2: {
        text: 'Mon Aug 16 1971',
      },
      question3: {
        text: 'green',
      },
      question4: {
        text: '1-276-786-8378 x5496',
      },
    },
    {
      name: {
        text: 'Kristy Stanton',
      },
      question1: {
        text: 'Long Beach',
      },
      question2: {
        text: 'Wed May 22 1957',
      },
      question3: {
        text: 'turquoise',
      },
      question4: {
        text: '413-874-6354 x218',
      },
    },
    {
      name: {
        text: 'Allen MacGyver',
      },
      question1: {
        text: 'Kent',
      },
      question2: {
        text: 'Fri Mar 06 1992',
      },
      question3: {
        text: 'sky blue',
      },
      question4: {
        text: '1-835-415-2404 x910',
      },
    },
    {
      name: {
        text: 'Marcus Gislason',
      },
      question1: {
        text: 'San Antonio',
      },
      question2: {
        text: 'Fri Nov 20 1981',
      },
      question3: {
        text: 'teal',
      },
      question4: {
        text: '693-769-7904 x0570',
      },
    },
    {
      name: {
        text: 'Bridget Sipes III',
      },
      question1: {
        text: 'Coral Springs',
      },
      question2: {
        text: 'Fri Jun 11 1943',
      },
      question3: {
        text: 'green',
      },
      question4: {
        text: '484-876-8261 x27076',
      },
    },
    {
      name: {
        text: 'Tomas Rau',
      },
      question1: {
        text: 'Lakeland',
      },
      question2: {
        text: 'Mon May 01 1972',
      },
      question3: {
        text: 'grey',
      },
      question4: {
        text: '795-492-8741 x304',
      },
    },
    {
      name: {
        text: 'Lucy Gutmann',
      },
      question1: {
        text: 'Palatine',
      },
      question2: {
        text: 'Sat May 06 1944',
      },
      question3: {
        text: 'sky blue',
      },
      question4: {
        text: '364-409-5163 x650',
      },
    },
    {
      name: {
        text: 'Rufus Reilly',
      },
      question1: {
        text: 'Fresno',
      },
      question2: {
        text: 'Sun May 06 1945',
      },
      question3: {
        text: 'blue',
      },
      question4: {
        text: '1-910-524-6545 x473',
      },
    },
    {
      name: {
        text: 'Rex Sanford',
      },
      question1: {
        text: 'Johns Creek',
      },
      question2: {
        text: 'Sun Aug 15 1965',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '247-378-4668 x708',
      },
    },
    {
      name: {
        text: 'Gustavo Ondricka PhD',
      },
      question1: {
        text: 'Sioux Falls',
      },
      question2: {
        text: 'Tue Oct 17 1950',
      },
      question3: {
        text: 'grey',
      },
      question4: {
        text: '1-625-413-1576 x92844',
      },
    },
    {
      name: {
        text: 'Jackie Keebler',
      },
      question1: {
        text: 'Midland',
      },
      question2: {
        text: 'Wed Jan 06 1943',
      },
      question3: {
        text: 'salmon',
      },
      question4: {
        text: '907.743.1667 x85385',
      },
    },
    {
      name: {
        text: 'Mindy McDermott I',
      },
      question1: {
        text: 'Westfield',
      },
      question2: {
        text: 'Sat Jul 15 1944',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '1-557-890-1780',
      },
    },
    {
      name: {
        text: 'Ivan Bauch Jr.',
      },
      question1: {
        text: 'Kansas City',
      },
      question2: {
        text: 'Thu Jun 19 1958',
      },
      question3: {
        text: 'gold',
      },
      question4: {
        text: '291.511.1507 x2371',
      },
    },
    {
      name: {
        text: 'Carmen Osinski',
      },
      question1: {
        text: 'Pleasanton',
      },
      question2: {
        text: 'Mon Oct 22 1979',
      },
      question3: {
        text: 'orchid',
      },
      question4: {
        text: '(297) 881-1311 x51359',
      },
    },
    {
      name: {
        text: 'Dr. Herman Boyer',
      },
      question1: {
        text: 'Fountain Valley',
      },
      question2: {
        text: 'Sat May 23 1959',
      },
      question3: {
        text: 'mint green',
      },
      question4: {
        text: '(458) 253-6041',
      },
    },
    {
      name: {
        text: 'Blake Gulgowski',
      },
      question1: {
        text: 'Huntington Park',
      },
      question2: {
        text: 'Mon Jul 08 1991',
      },
      question3: {
        text: 'maroon',
      },
      question4: {
        text: '588-487-1779',
      },
    },
    {
      name: {
        text: 'Ken Wiza MD',
      },
      question1: {
        text: 'Oshkosh',
      },
      question2: {
        text: 'Fri Apr 06 1990',
      },
      question3: {
        text: 'red',
      },
      question4: {
        text: '(504) 931-0398 x8120',
      },
    },
    {
      name: {
        text: 'Aaron Lehner',
      },
      question1: {
        text: 'Grand Prairie',
      },
      question2: {
        text: 'Wed Sep 11 1974',
      },
      question3: {
        text: 'orange',
      },
      question4: {
        text: '1-983-449-9833 x526',
      },
    },
    {
      name: {
        text: 'Sadie Wuckert',
      },
      question1: {
        text: 'Missoula',
      },
      question2: {
        text: 'Mon May 04 1970',
      },
      question3: {
        text: 'olive',
      },
      question4: {
        text: '573-220-5661',
      },
    },
    {
      name: {
        text: 'Tracey Barton',
      },
      question1: {
        text: 'Rohnert Park',
      },
      question2: {
        text: 'Sun Sep 19 1999',
      },
      question3: {
        text: 'azure',
      },
      question4: {
        text: '(696) 871-6085 x665',
      },
    },
    {
      name: {
        text: 'Lucas Gutkowski',
      },
      question1: {
        text: 'Victorville',
      },
      question2: {
        text: 'Thu May 21 1987',
      },
      question3: {
        text: 'plum',
      },
      question4: {
        text: '257.822.8073 x29686',
      },
    },
    {
      name: {
        text: 'Ralph King',
      },
      question1: {
        text: 'Youngstown',
      },
      question2: {
        text: 'Wed Nov 17 1999',
      },
      question3: {
        text: 'white',
      },
      question4: {
        text: '(680) 543-7658 x9788',
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
        text: 'Willa',
      },
    },
    {
      type: 'accessor',
      id: '2',
      cellProps: {
        text: 'Reva',
      },
    },
    {
      type: 'accessor',
      id: '3',
      cellProps: {
        text: 'Vance',
      },
    },
    {
      type: 'accessor',
      id: '4',
      cellProps: {
        text: 'Gilberto',
      },
    },
    {
      type: 'accessor',
      id: '5',
      cellProps: {
        text: 'Nathaniel',
      },
    },
    {
      type: 'accessor',
      id: '6',
      cellProps: {
        text: 'Martine',
      },
    },
    {
      type: 'accessor',
      id: '7',
      cellProps: {
        text: 'Tanner',
      },
    },
    {
      type: 'accessor',
      id: '8',
      cellProps: {
        text: 'Chet',
      },
    },
    {
      type: 'accessor',
      id: '9',
      cellProps: {
        text: 'Aubrey',
      },
    },
    {
      type: 'accessor',
      id: '10',
      cellProps: {
        text: 'Roxane',
      },
    },
    {
      type: 'accessor',
      id: '11',
      cellProps: {
        text: 'Elyse',
      },
    },
    {
      type: 'accessor',
      id: '12',
      cellProps: {
        text: 'Murray',
      },
    },
    {
      type: 'accessor',
      id: '13',
      cellProps: {
        text: 'Mina',
      },
    },
    {
      type: 'accessor',
      id: '14',
      cellProps: {
        text: 'Meagan',
      },
    },
    {
      type: 'accessor',
      id: '15',
      cellProps: {
        text: 'Isaac',
      },
    },
    {
      type: 'accessor',
      id: '16',
      cellProps: {
        text: 'Theron',
      },
    },
    {
      type: 'accessor',
      id: '17',
      cellProps: {
        text: 'Keenan',
      },
    },
    {
      type: 'accessor',
      id: '18',
      cellProps: {
        text: 'Verda',
      },
    },
    {
      type: 'accessor',
      id: '19',
      cellProps: {
        text: 'Garry',
      },
    },
    {
      type: 'accessor',
      id: '20',
      cellProps: {
        text: 'Neha',
      },
    },
    {
      type: 'accessor',
      id: '21',
      cellProps: {
        text: 'Odie',
      },
    },
    {
      type: 'accessor',
      id: '22',
      cellProps: {
        text: 'Alexane',
      },
    },
    {
      type: 'accessor',
      id: '23',
      cellProps: {
        text: 'Cleora',
      },
    },
    {
      type: 'accessor',
      id: '24',
      cellProps: {
        text: 'Lizzie',
      },
    },
    {
      type: 'accessor',
      id: '25',
      cellProps: {
        text: 'Lottie',
      },
    },
    {
      type: 'accessor',
      id: '26',
      cellProps: {
        text: 'Mireille',
      },
    },
    {
      type: 'accessor',
      id: '27',
      cellProps: {
        text: 'Edwina',
      },
    },
    {
      type: 'accessor',
      id: '28',
      cellProps: {
        text: 'Erna',
      },
    },
    {
      type: 'accessor',
      id: '29',
      cellProps: {
        text: 'Cheyanne',
      },
    },
    {
      type: 'accessor',
      id: '30',
      cellProps: {
        text: 'Jarvis',
      },
    },
    {
      type: 'accessor',
      id: '31',
      cellProps: {
        text: 'Alphonso',
      },
    },
    {
      type: 'accessor',
      id: '32',
      cellProps: {
        text: 'Josianne',
      },
    },
    {
      type: 'accessor',
      id: '33',
      cellProps: {
        text: 'Jermaine',
      },
    },
    {
      type: 'accessor',
      id: '34',
      cellProps: {
        text: 'Caitlyn',
      },
    },
    {
      type: 'accessor',
      id: '35',
      cellProps: {
        text: 'Alycia',
      },
    },
    {
      type: 'accessor',
      id: '36',
      cellProps: {
        text: 'Erna',
      },
    },
    {
      type: 'accessor',
      id: '37',
      cellProps: {
        text: 'Shayne',
      },
    },
    {
      type: 'accessor',
      id: '38',
      cellProps: {
        text: 'Jeramy',
      },
    },
    {
      type: 'accessor',
      id: '39',
      cellProps: {
        text: 'Marlen',
      },
    },
    {
      type: 'accessor',
      id: '40',
      cellProps: {
        text: 'Willa',
      },
    },
    {
      type: 'accessor',
      id: '41',
      cellProps: {
        text: 'Orpha',
      },
    },
    {
      type: 'accessor',
      id: '42',
      cellProps: {
        text: 'Dasia',
      },
    },
    {
      type: 'accessor',
      id: '43',
      cellProps: {
        text: 'Grover',
      },
    },
    {
      type: 'accessor',
      id: '44',
      cellProps: {
        text: 'Darrion',
      },
    },
    {
      type: 'accessor',
      id: '45',
      cellProps: {
        text: 'Erik',
      },
    },
    {
      type: 'accessor',
      id: '46',
      cellProps: {
        text: 'Emerson',
      },
    },
    {
      type: 'accessor',
      id: '47',
      cellProps: {
        text: 'Elvis',
      },
    },
    {
      type: 'accessor',
      id: '48',
      cellProps: {
        text: 'Loyce',
      },
    },
    {
      type: 'accessor',
      id: '49',
      cellProps: {
        text: 'Delilah',
      },
    },
    {
      type: 'accessor',
      id: '50',
      cellProps: {
        text: 'Solon',
      },
    },
  ],
  rows: [
    {
      '1': {
        text: 'fuchsia',
      },
      '2': {
        text: 'pink',
      },
      '3': {
        text: 'red',
      },
      '4': {
        text: 'magenta',
      },
      '5': {
        text: 'red',
      },
      '6': {
        text: 'cyan',
      },
      '7': {
        text: 'black',
      },
      '8': {
        text: 'azure',
      },
      '9': {
        text: 'turquoise',
      },
      '10': {
        text: 'turquoise',
      },
      '11': {
        text: 'fuchsia',
      },
      '12': {
        text: 'red',
      },
      '13': {
        text: 'lime',
      },
      '14': {
        text: 'green',
      },
      '15': {
        text: 'mint green',
      },
      '16': {
        text: 'olive',
      },
      '17': {
        text: 'fuchsia',
      },
      '18': {
        text: 'white',
      },
      '19': {
        text: 'grey',
      },
      '20': {
        text: 'indigo',
      },
      '21': {
        text: 'grey',
      },
      '22': {
        text: 'yellow',
      },
      '23': {
        text: 'cyan',
      },
      '24': {
        text: 'azure',
      },
      '25': {
        text: 'mint green',
      },
      '26': {
        text: 'tan',
      },
      '27': {
        text: 'sky blue',
      },
      '28': {
        text: 'olive',
      },
      '29': {
        text: 'yellow',
      },
      '30': {
        text: 'lime',
      },
      '31': {
        text: 'pink',
      },
      '32': {
        text: 'lime',
      },
      '33': {
        text: 'olive',
      },
      '34': {
        text: 'grey',
      },
      '35': {
        text: 'turquoise',
      },
      '36': {
        text: 'teal',
      },
      '37': {
        text: 'lime',
      },
      '38': {
        text: 'turquoise',
      },
      '39': {
        text: 'blue',
      },
      '40': {
        text: 'white',
      },
      '41': {
        text: 'lime',
      },
      '42': {
        text: 'pink',
      },
      '43': {
        text: 'pink',
      },
      '44': {
        text: 'blue',
      },
      '45': {
        text: 'lavender',
      },
      '46': {
        text: 'olive',
      },
      '47': {
        text: 'silver',
      },
      '48': {
        text: 'olive',
      },
      '49': {
        text: 'teal',
      },
      '50': {
        text: 'teal',
      },
      property: {
        text: 'Favourite Colour?',
      },
    },
    {
      '1': {
        text: 'Volvo',
      },
      '2': {
        text: 'Bentley',
      },
      '3': {
        text: 'Bentley',
      },
      '4': {
        text: 'Toyota',
      },
      '5': {
        text: 'Ferrari',
      },
      '6': {
        text: 'Tesla',
      },
      '7': {
        text: 'Bentley',
      },
      '8': {
        text: 'Mercedes Benz',
      },
      '9': {
        text: 'Audi',
      },
      '10': {
        text: 'Porsche',
      },
      '11': {
        text: 'Aston Martin',
      },
      '12': {
        text: 'Bugatti',
      },
      '13': {
        text: 'Ford',
      },
      '14': {
        text: 'Rolls Royce',
      },
      '15': {
        text: 'Kia',
      },
      '16': {
        text: 'Maserati',
      },
      '17': {
        text: 'Polestar',
      },
      '18': {
        text: 'Hyundai',
      },
      '19': {
        text: 'Bugatti',
      },
      '20': {
        text: 'Mercedes Benz',
      },
      '21': {
        text: 'Aston Martin',
      },
      '22': {
        text: 'Volkswagen',
      },
      '23': {
        text: 'Toyota',
      },
      '24': {
        text: 'BMW',
      },
      '25': {
        text: 'Mercedes Benz',
      },
      '26': {
        text: 'Honda',
      },
      '27': {
        text: 'Volkswagen',
      },
      '28': {
        text: 'Tesla',
      },
      '29': {
        text: 'Bentley',
      },
      '30': {
        text: 'Ford',
      },
      '31': {
        text: 'Hyundai',
      },
      '32': {
        text: 'Rolls Royce',
      },
      '33': {
        text: 'Tesla',
      },
      '34': {
        text: 'Audi',
      },
      '35': {
        text: 'Smart',
      },
      '36': {
        text: 'Mazda',
      },
      '37': {
        text: 'Smart',
      },
      '38': {
        text: 'Audi',
      },
      '39': {
        text: 'Nissan',
      },
      '40': {
        text: 'Mercedes Benz',
      },
      '41': {
        text: 'Ford',
      },
      '42': {
        text: 'Porsche',
      },
      '43': {
        text: 'Land Rover',
      },
      '44': {
        text: 'Mercedes Benz',
      },
      '45': {
        text: 'Maserati',
      },
      '46': {
        text: 'Bentley',
      },
      '47': {
        text: 'Honda',
      },
      '48': {
        text: 'Polestar',
      },
      '49': {
        text: 'Tesla',
      },
      '50': {
        text: 'Tesla',
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
        text: 'bear',
      },
      '3': {
        text: 'bird',
      },
      '4': {
        text: 'rabbit',
      },
      '5': {
        text: 'bear',
      },
      '6': {
        text: 'bird',
      },
      '7': {
        text: 'cetacean',
      },
      '8': {
        text: 'horse',
      },
      '9': {
        text: 'bear',
      },
      '10': {
        text: 'insect',
      },
      '11': {
        text: 'cow',
      },
      '12': {
        text: 'bird',
      },
      '13': {
        text: 'fish',
      },
      '14': {
        text: 'lion',
      },
      '15': {
        text: 'horse',
      },
      '16': {
        text: 'rabbit',
      },
      '17': {
        text: 'rabbit',
      },
      '18': {
        text: 'insect',
      },
      '19': {
        text: 'snake',
      },
      '20': {
        text: 'cetacean',
      },
      '21': {
        text: 'fish',
      },
      '22': {
        text: 'bear',
      },
      '23': {
        text: 'fish',
      },
      '24': {
        text: 'cat',
      },
      '25': {
        text: 'bird',
      },
      '26': {
        text: 'insect',
      },
      '27': {
        text: 'horse',
      },
      '28': {
        text: 'rabbit',
      },
      '29': {
        text: 'cetacean',
      },
      '30': {
        text: 'cat',
      },
      '31': {
        text: 'bear',
      },
      '32': {
        text: 'rabbit',
      },
      '33': {
        text: 'lion',
      },
      '34': {
        text: 'dog',
      },
      '35': {
        text: 'cow',
      },
      '36': {
        text: 'cat',
      },
      '37': {
        text: 'fish',
      },
      '38': {
        text: 'fish',
      },
      '39': {
        text: 'cat',
      },
      '40': {
        text: 'fish',
      },
      '41': {
        text: 'insect',
      },
      '42': {
        text: 'crocodilia',
      },
      '43': {
        text: 'rabbit',
      },
      '44': {
        text: 'bird',
      },
      '45': {
        text: 'lion',
      },
      '46': {
        text: 'snake',
      },
      '47': {
        text: 'dog',
      },
      '48': {
        text: 'cat',
      },
      '49': {
        text: 'cat',
      },
      '50': {
        text: 'fish',
      },
      property: {
        text: 'Favourite Animal?',
      },
    },
    {
      '1': {
        text: 'Chile',
      },
      '2': {
        text: 'Luxembourg',
      },
      '3': {
        text: 'Greece',
      },
      '4': {
        text: 'Guyana',
      },
      '5': {
        text: 'Colombia',
      },
      '6': {
        text: 'Turkmenistan',
      },
      '7': {
        text: 'Nepal',
      },
      '8': {
        text: 'Saint Martin',
      },
      '9': {
        text: 'Armenia',
      },
      '10': {
        text: 'Lebanon',
      },
      '11': {
        text: 'French Guiana',
      },
      '12': {
        text: 'Malaysia',
      },
      '13': {
        text: 'Guernsey',
      },
      '14': {
        text: 'Sao Tome and ...',
      },
      '15': {
        text: 'Bhutan',
      },
      '16': {
        text: 'Sweden',
      },
      '17': {
        text: 'Argentina',
      },
      '18': {
        text: 'Peru',
      },
      '19': {
        text: 'Mozambique',
      },
      '20': {
        text: 'French Polyne...',
      },
      '21': {
        text: 'American Samo...',
      },
      '22': {
        text: 'Cook Islands',
      },
      '23': {
        text: 'French Guiana',
      },
      '24': {
        text: 'Ireland',
      },
      '25': {
        text: 'Gambia',
      },
      '26': {
        text: 'Somalia',
      },
      '27': {
        text: 'Moldova',
      },
      '28': {
        text: 'Burundi',
      },
      '29': {
        text: 'Congo',
      },
      '30': {
        text: 'Tunisia',
      },
      '31': {
        text: 'Paraguay',
      },
      '32': {
        text: 'Cameroon',
      },
      '33': {
        text: 'Nigeria',
      },
      '34': {
        text: 'Macedonia',
      },
      '35': {
        text: 'Saint Helena',
      },
      '36': {
        text: 'Russian Feder...',
      },
      '37': {
        text: 'Paraguay',
      },
      '38': {
        text: 'Lebanon',
      },
      '39': {
        text: 'Belgium',
      },
      '40': {
        text: 'Guatemala',
      },
      '41': {
        text: 'Guinea-Bissau',
      },
      '42': {
        text: 'Bermuda',
      },
      '43': {
        text: 'Egypt',
      },
      '44': {
        text: 'Zambia',
      },
      '45': {
        text: 'Northern Mari...',
      },
      '46': {
        text: 'Guatemala',
      },
      '47': {
        text: 'Yemen',
      },
      '48': {
        text: 'Afghanistan',
      },
      '49': {
        text: 'Haiti',
      },
      '50': {
        text: 'Cocos (Keelin...',
      },
      property: {
        text: 'Favourite Country Visited?',
      },
    },
    {
      '1': {
        text: 'Sammamish',
      },
      '2': {
        text: 'Rochester',
      },
      '3': {
        text: 'Hattiesburg',
      },
      '4': {
        text: 'West Des Moin...',
      },
      '5': {
        text: 'Altadena',
      },
      '6': {
        text: 'Oakland',
      },
      '7': {
        text: 'Harrisonburg',
      },
      '8': {
        text: 'White Plains',
      },
      '9': {
        text: 'Louisville/Je...',
      },
      '10': {
        text: 'Taylorsville',
      },
      '11': {
        text: 'Schaumburg',
      },
      '12': {
        text: 'Bellingham',
      },
      '13': {
        text: 'Palmdale',
      },
      '14': {
        text: 'Rancho Palos ...',
      },
      '15': {
        text: 'Hendersonvill...',
      },
      '16': {
        text: 'Durham',
      },
      '17': {
        text: 'Wilson',
      },
      '18': {
        text: 'Sacramento',
      },
      '19': {
        text: 'Elmhurst',
      },
      '20': {
        text: 'Westminster',
      },
      '21': {
        text: 'Antelope',
      },
      '22': {
        text: 'Brownsville',
      },
      '23': {
        text: 'Kansas City',
      },
      '24': {
        text: 'Casa Grande',
      },
      '25': {
        text: 'Henderson',
      },
      '26': {
        text: 'Buena Park',
      },
      '27': {
        text: 'Bartlett',
      },
      '28': {
        text: 'Mayaguez',
      },
      '29': {
        text: 'Logan',
      },
      '30': {
        text: 'Joplin',
      },
      '31': {
        text: "Town 'n' Coun...",
      },
      '32': {
        text: 'Hillsboro',
      },
      '33': {
        text: 'Pittsfield',
      },
      '34': {
        text: 'San Jacinto',
      },
      '35': {
        text: 'Portsmouth',
      },
      '36': {
        text: 'Gary',
      },
      '37': {
        text: 'Joplin',
      },
      '38': {
        text: 'Norfolk',
      },
      '39': {
        text: 'Severn',
      },
      '40': {
        text: 'Dayton',
      },
      '41': {
        text: 'Yuba City',
      },
      '42': {
        text: 'Bloomington',
      },
      '43': {
        text: 'Kettering',
      },
      '44': {
        text: 'Pontiac',
      },
      '45': {
        text: 'Pocatello',
      },
      '46': {
        text: 'Vineland',
      },
      '47': {
        text: 'Normal',
      },
      '48': {
        text: 'Stockton',
      },
      '49': {
        text: 'Waukesha',
      },
      '50': {
        text: 'Fresno',
      },
      property: {
        text: 'Favourite City?',
      },
    },
  ],
}
