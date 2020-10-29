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

const MissingDataSummary: React.FC<Props> = ({ noData, partialData, completeData, missingData }) => {
  const missingDataSection =
    missingData != null ? (
      <React.Fragment>
        <WarningBanner>
          <CounterIcon size="large" status="amber" value={missingData.length} />
          <div css={styles}>Missing Data</div>
        </WarningBanner>
        {missingData.map(data => (
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

  const completeDataSection =
    completeData != null ? (
      <React.Fragment>
        <InfoBanner>
          <CounterIcon size="large" status="info" value={completeData.length} />
          <div css={styles}>Complete Data</div>
        </InfoBanner>
        {completeData.map(data => (
          <ListItem>{data}</ListItem>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment />
    )

  const noDataSection =
    noData != null ? (
      <React.Fragment>
        <InfoBanner>
          <CounterIcon size="large" status="info" value={noData.length} />
          <div css={styles}>No Data</div>
        </InfoBanner>
        {noData.map(data => (
          <ListItem>{data}</ListItem>
        ))}
      </React.Fragment>
    ) : (
      <React.Fragment />
    )

  return (
    <React.Fragment>
      {missingDataSection}
      {partialDataSection}
      {completeDataSection}
      {noDataSection}
    </React.Fragment>
  )
}

interface Props {
  missingData?: Maybe<Array<string>>
  partialData?: Maybe<Array<string>>
  completeData?: Maybe<Array<string>>
  noData?: Maybe<Array<string>>
}

export default MissingDataSummary
