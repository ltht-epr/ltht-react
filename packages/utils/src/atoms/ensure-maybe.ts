import { Maybe } from '@ltht-react/types'

export const EnsureMaybeArray = <Type>(maybeArray: Maybe<Type>[] | undefined): Type[] => {
  if (!maybeArray) {
    return []
  }

  const definitelyArray: Type[] = []
  if (maybeArray !== undefined) {
    maybeArray.forEach((item) => {
      if (item !== null) {
        definitelyArray.push(item)
      }
    })
  }

  return definitelyArray
}

export const EnsureMaybe = <Type>(maybe: Maybe<Type> | undefined, defaultValue?: Type): Type => {
  if (maybe !== undefined && maybe !== null) {
    return maybe
  }

  if (defaultValue !== undefined) {
    return defaultValue
  }

  throw new Error('Cannot ensure a Maybe without a default value to fall back to.')
}
