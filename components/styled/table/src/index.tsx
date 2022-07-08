// import React, { FC } from 'react'
// import { Column, useTable } from 'react-table'

import { FC } from 'react'

const Table: FC<IProps> = () => (
  //  const data = React.useMemo(
  //    () => [
  //      {
  //        col1: 'Hello',
  //        col2: 'World',
  //      },
  //      {
  //        col1: 'react-table',
  //        col2: 'rocks',
  //      },
  //      {
  //        col1: 'whatever',
  //        col2: 'you want',
  //      },
  //    ],
  //    []
  //  )

  //  const columns = React.useMemo<Column>(
  //    () => new Column[], null)

  //  const {
  //    getTableProps,
  //    getTableBodyProps,
  //    headerGroups,
  //    rows,
  //    prepareRow,
  //  } = useTable({ columns, data })

  <></>
)

//  return (
//   <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
//     <thead>
//       {headerGroups.map(headerGroup => (
//         <tr {...headerGroup.getHeaderGroupProps()}>
//           {headerGroup.headers.map(column => (
//             <th
//               {...column.getHeaderProps()}
//               style={{
//                 borderBottom: 'solid 3px red',
//                 background: 'aliceblue',
//                 color: 'black',
//                 fontWeight: 'bold',
//               }}
//             >
//               {column.render('Header')}
//             </th>
//           ))}
//         </tr>
//       ))}
//     </thead>
//     <tbody {...getTableBodyProps()}>
//       {rows.map(row => {
//         prepareRow(row)
//         return (
//           <tr {...row.getRowProps()}>
//             {row.cells.map(cell => {
//               return (
//                 <td
//                   {...cell.getCellProps()}
//                   style={{
//                     padding: '10px',
//                     border: 'solid 1px gray',
//                     background: 'papayawhip',
//                   }}
//                 >
//                   {cell.render('Cell')}
//                 </td>
//               )
//             })}
//           </tr>
//         )
//       })}
//     </tbody>
//   </table>
// )

interface IProps {
  options: string
}

export default Table
