import { ResourceReference } from '../molecules/resource-reference'

interface AnnotationAuthor {
  readonly reference?: ResourceReference | null | undefined
  readonly authorString?: string | null | undefined
}

export { AnnotationAuthor }
