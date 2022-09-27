import { Extension, Maybe } from '@ltht-react/types'

const getBooleanExtension = (extensions: Maybe<Array<Maybe<Extension>>>, uri: string): Maybe<boolean> => {
  let booleanExtensionValue = extensions?.find((extension) => extension?.url === uri)?.valueBoolean

  if (booleanExtensionValue == undefined) return null

  return booleanExtensionValue
}

export { getBooleanExtension }
