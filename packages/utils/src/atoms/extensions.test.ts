import { Extension, Maybe } from '@ltht-react/types'
import { getBooleanExtension, getStringExtension } from './extensions'

enum ExtensionKey {
  DiagnosisOnsetDateEstimated = 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
  NotDiagnosisOnsetDateEstimated = 'https://fhir.leedsth.nhs.uk/ValueSet/not-diagnosis-onset-date-estimated-1',
  FlagPriority = 'https://leedsth.nhs.uk/alert/priority',
  NotFlagPriority = 'https://leedsth.nhs.uk/alert/not-priority',
}

enum FlagPriority {
  High = 'High',
  Clinical = 'Clinical',
  Administrative = 'Administrative',
}

describe('getBooleanExtension', () => {
  it('should return true when boolean extension is true', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.DiagnosisOnsetDateEstimated,
        valueBoolean: true,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ExtensionKey.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(true)
  })

  it('should return false when boolean extension is false', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.DiagnosisOnsetDateEstimated,
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ExtensionKey.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(false)
  })

  it('should return null when boolean extension not found', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.NotDiagnosisOnsetDateEstimated,
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ExtensionKey.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('should return null when extensions are empty ', () => {
    // arrange
    const extensions: Maybe<Extension>[] = []

    // act
    const booleanExtension = getBooleanExtension(extensions, ExtensionKey.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('should return null when extensions is null ', () => {
    // arrange
    const extensions = null

    // act
    const booleanExtension = getBooleanExtension(extensions, ExtensionKey.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })
})

describe('getStringExtension', () => {
  it('should return high when string extension is high', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.FlagPriority,
        valueString: FlagPriority.High,
      },
    ]

    // act
    const stringExtension = getStringExtension(extensions, ExtensionKey.FlagPriority)

    // assert
    expect(stringExtension).toEqual(FlagPriority.High)
  })

  it('should return clinical when string extension is clinical', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.FlagPriority,
        valueString: FlagPriority.Clinical,
      },
    ]

    // act
    const stringExtension = getStringExtension(extensions, ExtensionKey.FlagPriority)

    // assert
    expect(stringExtension).toEqual(FlagPriority.Clinical)
  })

  it('should return null when string extension not found', () => {
    // arrange
    const extensions = [
      {
        url: ExtensionKey.NotFlagPriority,
        valueString: FlagPriority.High,
      },
    ]

    // act
    const stringExtension = getStringExtension(extensions, ExtensionKey.FlagPriority)

    // assert
    expect(stringExtension).toEqual(null)
  })

  it('should return null when extensions are empty ', () => {
    // arrange
    const extensions: Maybe<Extension>[] = []

    // act
    const stringExtension = getStringExtension(extensions, ExtensionKey.FlagPriority)

    // assert
    expect(stringExtension).toEqual(null)
  })

  it('should return null when extensions is null ', () => {
    // arrange
    const extensions = null

    // act
    const stringExtension = getStringExtension(extensions, ExtensionKey.FlagPriority)

    // assert
    expect(stringExtension).toEqual(null)
  })
})
