/** @jsx jsx */
import React, { Fragment } from 'react'
import { css, jsx } from '@emotion/core'

import { Flag, Coding, Period } from '@ltht-react/types'
import { ExclamationIcon } from '@ltht-react/icons'
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
    padding: 0;
  }
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`

const CodingSnippet = ({ codings }: { codings?: Coding[] | null | undefined }) => {
  const styles = css`
    flex-grow: 1;
    padding-left: 0.6rem;
    font-size: 0.8rem;
  `
  const display = codings?.map(x => x.display).join(', ')
  return (
    <div css={styles}>
      <div>{display}</div>
      <div css={{ color: 'grey' }}>109006</div>
    </div>
  )
}

const Icon = () => {
  const styles = css`
    font-size: 1.2rem;
    color: #cd000a;
  `
  return (
    <div css={styles}>
      <ExclamationIcon />
    </div>
  )
}

const PeriodSummary = ({ period }: { period: Period | null | undefined }) => {
  const styles = css`
    text-align: right;
    font-size: 0.8rem;
  `
  return (
    <div css={styles}>
      <div>{period?.start?.toLocaleDateString()}</div>
      <div css={{ color: 'grey' }}>LTHT</div>
    </div>
  )
}

const FlagSummaryItem = ({ flag }: { flag: Flag }) => {
  return (
    <Fragment>
      <Icon />
      <CodingSnippet codings={flag?.code?.coding} />
      <PeriodSummary period={flag.period} />
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
    justify-content: center;
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
        {flags &&
          flags.map((flag, index) => (
            <ListItem>
              <FlagSummaryItem key={index} flag={flag} />
            </ListItem>
          ))}
      </UnorderedList>
    </Widget>
  )
}

interface FlagSummaryProps {
  title: string
  flags: Flag[]
}

export { FlagSummary }
