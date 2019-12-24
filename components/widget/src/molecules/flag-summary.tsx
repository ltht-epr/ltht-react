import React from 'react'

import { Flag, Coding } from '@ltht-react/types'
import { Widget } from '../atoms'

interface MapDataType {
  id: string
  display: string
}

const mapData = (flags: Flag[] = []) => {
  let data: MapDataType[] = []
  flags.forEach(flag => {
    flag &&
      flag.code &&
      flag.code.coding &&
      flag.code.coding.forEach(coding => {
        data.push({ id: flag.id || '', display: coding.display || '' })
      })
  })
  return data
}

const CodingSnippet = ({ codings }: { codings: Coding[] }) => {
  const display = codings.map(x => x.display).join(', ')
  return <>{display}</>
}

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
  return <li>{flag && flag.code && flag.code.coding && <CodingSnippet codings={flag.code.coding} />}</li>
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title, flags }) => {
  return (
    <Widget>
      <h3>
        {title || 'Flag Summary'} - {flags?.length}
      </h3>
      <ul>{flags && flags.map((flag, index) => <FlagSummaryItem key={index} flag={flag} />)}</ul>
    </Widget>
  )
}

interface FlagSummaryProps {
  title: string
  flags: Flag[]
}

export { FlagSummary }
