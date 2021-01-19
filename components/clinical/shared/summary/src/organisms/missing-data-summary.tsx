/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { ListItem } from '@ltht-react/list'
import { Maybe } from '@ltht-react/types'
import { WarningBanner, InfoBanner } from '@ltht-react/banner'
import { CounterIcon } from '@ltht-react/icon'

const styles = css`
  padding-left: 0.5rem;
`

const MissingDataSummary: React.FC<Props> = ({ noData, partialData, allData }) => {
  const noDataSection =
    noData != null ? (
      <React.Fragment>
        <WarningBanner>
          <CounterIcon size="large" status="amber" value={noData.length} />
          <div css={styles}>No Data</div>
        </WarningBanner>
        {noData.map(data => (
          <ListItem>{data}</ListItem>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment />
    )

  const partialDataSection =
    partialData != null ? (
      <React.Fragment>
        <WarningBanner>
          <CounterIcon size="large" status="amber" value={partialData.length} />
          <div css={styles}>Partial Data</div>
        </WarningBanner>
        {partialData.map(data => (
          <ListItem>{data}</ListItem>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment />
    )

  const allDataSection =
    allData != null ? (
      <React.Fragment>
        <InfoBanner>
          <CounterIcon size="large" status="info" value={allData.length} />
          <div css={styles}>All Data</div>
        </InfoBanner>
        {allData.map(data => (
          <ListItem>{data}</ListItem>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment />
    )

  return (
    <React.Fragment>
      {noDataSection}
      {partialDataSection}
      {allDataSection}
    </React.Fragment>
  )
}

interface Props {
  noData?: Maybe<Array<string>>
  partialData?: Maybe<Array<string>>
  allData?: Maybe<Array<string>>
}

export default MissingDataSummary
