import { FC } from 'react'
import { Maybe } from '@ltht-react/types'
import Card from '@ltht-react/card'
import { CounterIcon } from '@ltht-react/icon'

const MissingDataSummary: FC<Props> = ({ type, noData, partialData, completeData, missingData }) => {
  const missingDataSection =
    missingData != null && missingData.length > 0 ? (
      <>
        <Card.Banner
          data-testid="missing-data-count"
          status="warning"
          icon={<CounterIcon size="large" status="amber" value={missingData.length} />}
        >
          Missing Data
        </Card.Banner>
        <Card.List data-testid="missing-data-list">
          {missingData.map((data, index) => (
            <Card.ListItem key={`${type}-missing-data-${index}`}>{data}</Card.ListItem>
          ))}
        </Card.List>
      </>
    ) : (
      <></>
    )

  const partialDataSection =
    partialData != null && partialData.length > 0 ? (
      <>
        <Card.Banner
          data-testid="partial-data-count"
          status="warning"
          icon={<CounterIcon size="large" status="amber" value={partialData.length} />}
        >
          Partial Data
        </Card.Banner>
        <Card.List data-testid="partial-data-list">
          {partialData.map((data, index) => (
            <Card.ListItem key={`${type}-partial-data-${index}`}>{data}</Card.ListItem>
          ))}
        </Card.List>
      </>
    ) : (
      <></>
    )

  const completeDataSection =
    completeData != null && completeData.length > 0 ? (
      <>
        <Card.Banner
          data-testid="complete-data-count"
          status="info"
          icon={<CounterIcon size="large" status="info" value={completeData.length} />}
        >
          Complete Data
        </Card.Banner>
        <Card.List data-testid="complete-data-list">
          {completeData.map((data, index) => (
            <Card.ListItem key={`${type}-complete-data-${index}`}>{data}</Card.ListItem>
          ))}
        </Card.List>
      </>
    ) : (
      <></>
    )

  const noDataSection =
    noData != null && noData.length > 0 ? (
      <>
        <Card.Banner
          data-testid="no-data-count"
          status="info"
          icon={<CounterIcon size="large" status="info" value={noData.length} />}
        >
          No Data
        </Card.Banner>
        <Card.List data-testid="no-data-list">
          {noData.map((data, index) => (
            <Card.ListItem key={`${type}-no-data-${index}`}>{data}</Card.ListItem>
          ))}
        </Card.List>
      </>
    ) : (
      <></>
    )

  return (
    <>
      {missingDataSection}
      {partialDataSection}
      {completeDataSection}
      {noDataSection}
    </>
  )
}

interface Props {
  type: string
  missingData?: Maybe<Array<string>>
  partialData?: Maybe<Array<string>>
  completeData?: Maybe<Array<string>>
  noData?: Maybe<Array<string>>
}

export default MissingDataSummary
