import { AllergyIntoleranceCategoryCode, Maybe } from '@ltht-react/types'

const allergyIntoleranceCategoryCodeDisplaySummary = (
  categories: Maybe<AllergyIntoleranceCategoryCode>[] = []
): string => {
  return categories.join(', ')
}

export { allergyIntoleranceCategoryCodeDisplaySummary }
