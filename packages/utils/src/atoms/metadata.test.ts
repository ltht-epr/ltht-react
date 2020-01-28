import { Metadata } from '@ltht-react/types'
import metadataSourceSummaryText from './metadata'

describe('metadataSourceSummaryText', () => {
  it('empty dataSource formats correctly', () => {
    const metadata: Metadata = {
      dataSources: [],
    }
    expect(metadataSourceSummaryText(metadata)).toEqual('')
  })
  it('single dataSource formats correctly', () => {
    const metadata: Metadata = {
      dataSources: [
        {
          display: 'Test',
        },
      ],
    }
    expect(metadataSourceSummaryText(metadata)).toEqual('Test')
  })
  it('multiple dataSources formats correctly', () => {
    const metadata: Metadata = {
      dataSources: [
        {
          display: 'Test',
        },
        {
          display: 'Another',
        },
      ],
    }
    expect(metadataSourceSummaryText(metadata)).toEqual('Test, Another')
  })
})
