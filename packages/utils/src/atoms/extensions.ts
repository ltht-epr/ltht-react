import { Extension, Maybe } from '@ltht-react/types'

const getBooleanExtension = (extensions: Maybe<Array<Maybe<Extension>>> | undefined, uri: string): Maybe<boolean> => {
  if (extensions === undefined) return null

  const booleanExtensionValue = extensions?.find((extension) => extension?.url === uri)?.valueBoolean

  if (booleanExtensionValue === undefined) return null

  return booleanExtensionValue
}

export default getBooleanExtension
