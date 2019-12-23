import { AnnotationAuthor } from './annotation-author'

interface Annotation {
  readonly author?: AnnotationAuthor | null | undefined
  readonly time?: Date | null | undefined
  readonly text?: string | null | undefined
}

export { Annotation }
