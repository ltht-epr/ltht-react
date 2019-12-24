/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Flag, Coding, Period } from '@ltht-react/types'
import { Widget } from '../atoms'

const reset = css`
  & *,
  & ::before,
  & ::after {
    box-sizing: border-box;
  }
  & ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  & * {
    margin: 0;
  }
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

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

const CodingSnippet = ({ codings }: { codings?: Coding[] | null | undefined }) => {
  const display = codings?.map(x => x.display).join(', ')
  return <Fragment>{display}</Fragment>
}

const PeriodSummary = ({ period }: { period: Period | null | undefined }) => {
  const styles = css`
    text-align: right;
  `
  return <div css={styles}>{period?.start?.toLocaleDateString()}</div>
}

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
  const styles = css`
    flex: 1;
    font-size: 0.8rem;
  `
  return (
    <Fragment>
      <div css={styles}>
        <CodingSnippet codings={flag?.code?.coding} />
      </div>
      <div css={styles}>
        <PeriodSummary period={flag.period} />
      </div>
    </Fragment>
  )
}

const Title = ({ padding, children }: { padding?: string; children: React.ReactNode }) => {
  const style = css`
    padding: ${padding ? padding : 0};
    font-size: 1.3rem;
    font-weight: 500;
  `
  return <h3 css={style}>{children}</h3>
}

const UnorderedList: React.FC = ({ children }) => {
  const styles = css`
    list-style-type: none;
  `
  return <ul css={styles}>{children}</ul>
}

const ListItem: React.FC = ({ children }) => {
  const styles = css`
    display: flex;
    border-top: 1px solid #b0b0b0;
    padding: 0.6rem 0;
    ul & :last-child {
      padding: 0.6rem 0 0 0;
    }
  `
  return <li css={styles}>{children}</li>
}

const FlagSummary: React.FC<FlagSummaryProps> = ({ title = 'Flag Summary', flags }) => {
  const style = css`
    ${reset};
    padding: 0.5rem;
  `
  title = `${title} ${flags?.length || 0}`
  return (
    <Widget css={style}>
      <Title padding="0 0 0.6rem 0">{title}</Title>
      <UnorderedList>
        <ListItem>{flags && flags.map((flag, index) => <FlagSummaryItem key={index} flag={flag} />)}</ListItem>
      </UnorderedList>
    </Widget>
  )
}

interface FlagSummaryProps {
  title: string
  flags: Flag[]
}

export { FlagSummary }
