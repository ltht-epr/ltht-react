import { Extension, Maybe } from '@ltht-react/types'

const getBooleanExtension = (extensions: Maybe<Array<Maybe<Extension>>> | undefined, uri: string): Maybe<boolean> => {
  if (extensions === undefined) return null

  const booleanExtensionValue = extensions?.find((extension) => extension?.url === uri)?.valueBoolean

  if (booleanExtensionValue === undefined) return null

  return booleanExtensionValue
}

const getStringExtension = (extensions: Maybe<Array<Maybe<Extension>>> | undefined, uri: string): Maybe<string> => {
  if (extensions === undefined) return null

  const stringExtensionValue = extensions?.find((extension) => extension?.url === uri)?.valueString

  if (stringExtensionValue === undefined) return null

  return stringExtensionValue
}

export { getBooleanExtension, getStringExtension }
