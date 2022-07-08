import { AllergyIntoleranceCategoryCode, Maybe } from '@ltht-react/types'
import { titleCase } from './title-case'

const allergyIntoleranceCategoryCodeDisplaySummary = (
  categories: Maybe<AllergyIntoleranceCategoryCode>[] = []
): string => categories.map(category => category && titleCase(category)).join(', ')

export default allergyIntoleranceCategoryCodeDisplaySummary
