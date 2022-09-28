import { Extension, Maybe } from '@ltht-react/types'
import getBooleanExtension from './extensions'

describe('getBooleanExtension', () => {
  it('should return true when boolean extension is true', () => {
    // arrange
    const extensions = [
      {
        url: ValueSet.DiagnosisOnsetDateEstimated,
        valueBoolean: true,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ValueSet.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(true)
  })

  it('should return false when boolean extension is false', () => {
    // arrange
    const extensions = [
      {
        url: ValueSet.DiagnosisOnsetDateEstimated,
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ValueSet.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(false)
  })

  it('should return null when boolean extension not found', () => {
    // arrange
    const extensions = [
      {
        url: ValueSet.NotDiagnosisOnsetDateEstimated,
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(extensions, ValueSet.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('should return null when extensions are empty ', () => {
    // arrange
    const extensions: Maybe<Extension>[] = []

    // act
    const booleanExtension = getBooleanExtension(extensions, ValueSet.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('should return null when extensions is null ', () => {
    // arrange
    const extensions = null

    // act
    const booleanExtension = getBooleanExtension(extensions, ValueSet.DiagnosisOnsetDateEstimated)

    // assert
    expect(booleanExtension).toEqual(null)
  })
})

enum ValueSet {
  DiagnosisOnsetDateEstimated = 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
  NotDiagnosisOnsetDateEstimated = 'https://fhir.leedsth.nhs.uk/ValueSet/not-diagnosis-onset-date-estimated-1',
}
