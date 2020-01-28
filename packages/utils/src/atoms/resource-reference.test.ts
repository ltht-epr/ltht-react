import { ResourceReference } from '@ltht-react/types'
import resourceReferenceDisplaySummary from './resource-reference'

describe('ResourceReferenceText', () => {
  describe('resourceReferenceDisplaySummary', () => {
    it('empty resource reference collection display formats correctly', () => {
      const resourceReference: ResourceReference[] = []
      expect(resourceReferenceDisplaySummary(resourceReference)).toEqual('')
    })
    it('single item in resource reference display formats correctly', () => {
      const resourceReference: ResourceReference[] = [
        {
          display: 'test one',
          typeName: 'test',
        },
      ]

      expect(resourceReferenceDisplaySummary(resourceReference)).toEqual('test one')
    })
    it('multiple items in resource reference formats correctly', () => {
      const resourceReference: ResourceReference[] = [
        { display: 'test one', typeName: 'test' },
        { display: 'test two', typeName: 'test' },
      ]

      expect(resourceReferenceDisplaySummary(resourceReference)).toEqual('test one, test two')
    })
  })
})
