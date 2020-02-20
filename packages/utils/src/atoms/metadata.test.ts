import { Metadata } from '@ltht-react/types'
import metadataSourceSummaryText from './metadata'

describe('metadataSourceSummaryText', () => {
  it('empty dataSource formats correctly', () => {
    const metadata: Metadata = {
      dataSources: [],
      requestedWhen: '',
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
      requestedWhen: '',
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
      requestedWhen: '',
    }
    expect(metadataSourceSummaryText(metadata)).toEqual('Test, Another')
  })
})
