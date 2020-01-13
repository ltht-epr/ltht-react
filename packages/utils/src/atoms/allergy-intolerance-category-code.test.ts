import { AllergyIntoleranceCategoryCode } from '@ltht-react/types'
import { allergyIntoleranceCategoryCodeDisplaySummary } from './allergy-intolerance-category-code'

describe('allergyIntoleranceCategoryCodeDisplaySummary', () => {
  it('empty category formats correctly', () => {
    const categories: AllergyIntoleranceCategoryCode[] = []
    expect(allergyIntoleranceCategoryCodeDisplaySummary(categories)).toEqual('')
  })
  it('single category formats correctly', () => {
    const categories: AllergyIntoleranceCategoryCode[] = [AllergyIntoleranceCategoryCode.Biologic]
    expect(allergyIntoleranceCategoryCodeDisplaySummary(categories)).toEqual('BIOLOGIC')
  })
  it('multiple categories formats correctly', () => {
    const categories: AllergyIntoleranceCategoryCode[] = [
      AllergyIntoleranceCategoryCode.Biologic,
      AllergyIntoleranceCategoryCode.Environment,
    ]
    expect(allergyIntoleranceCategoryCodeDisplaySummary(categories)).toEqual('BIOLOGIC, ENVIRONMENT')
  })
})
