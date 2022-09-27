import { Extension, Maybe } from '@ltht-react/types'

const getBooleanExtension = (extensions: Maybe<Array<Maybe<Extension>>>, uri: string): Maybe<boolean> => {
  const booleanExtensionValue = extensions?.find((extension) => extension?.url === uri)?.valueBoolean

  if (booleanExtensionValue === undefined) return null

  return booleanExtensionValue
}

export default getBooleanExtension
