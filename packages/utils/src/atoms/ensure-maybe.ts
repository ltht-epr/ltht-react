import { Maybe } from '@ltht-react/types'

export const EnsureMaybeArray = function <Type>(maybeArray: Maybe<Type>[]): Type[] {
  let definitelyArray: Type[] = []
  if (maybeArray !== undefined) {
    maybeArray.forEach((item) => {
      if (item !== null) {
        definitelyArray.push(item)
      }
    })
  }

  return definitelyArray
}

export const EnsureMaybe = function <Type>(maybe: Maybe<Type>): Type {
  if (maybe !== null) {
    return maybe
  }

  throw new Error(`Value given to ensure non-nullity was null.`)
}
