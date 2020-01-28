import { Metadata } from '@ltht-react/types'

const metadataSourceSummaryText = (metadata: Metadata): string => {
  if (!metadata || !metadata.dataSources || metadata.dataSources.length === 0) {
    return ''
  }
  const result = metadata.dataSources
    .map(dataSource => {
      return dataSource?.display
    })
    .join(', ')
  return result
}

export default metadataSourceSummaryText
