import { Metadata } from '@ltht-react/types'
import metadataSourceSummaryText from './metadata'

describe('metadataSourceSummaryText', () => {
  it('empty dataSource formats correctly', () => {
    const metadata: Metadata = {
      dataSources: [],
      isRedacted: true,
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
      isRedacted: true,
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
      isRedacted: true,
      requestedWhen: '',
    }
    expect(metadataSourceSummaryText(metadata)).toEqual('Test, Another')
  })
})
