import { Extension, Maybe } from '@ltht-react/types'
import getBooleanExtension from './extensions'

describe('getBooleanExtension', () => {
  it('boolean extension is true', () => {
    // arrange
    const extensions = [
      {
        url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
        valueBoolean: true,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(
      extensions,
      'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
    )

    // assert
    expect(booleanExtension).toEqual(true)
  })

  it('boolean extension is false', () => {
    // arrange
    const extensions = [
      {
        url: 'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1',
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(
      extensions,
      'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
    )

    // assert
    expect(booleanExtension).toEqual(false)
  })

  it('diagnosis onset date estimated extension not found', () => {
    // arrange
    const extensions = [
      {
        url: 'https://fhir.leedsth.nhs.uk/ValueSet/not-diagnosis-onset-date-estimated-1',
        valueBoolean: false,
      },
    ]

    // act
    const booleanExtension = getBooleanExtension(
      extensions,
      'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
    )

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('diagnosis onset date estimated extension when extensions are empty ', () => {
    // arrange
    const extensions: Maybe<Extension>[] = []

    // act
    const booleanExtension = getBooleanExtension(
      extensions,
      'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
    )

    // assert
    expect(booleanExtension).toEqual(null)
  })

  it('diagnosis onset date estimated extension when extensions is null ', () => {
    // arrange
    const extensions = null

    // act
    const booleanExtension = getBooleanExtension(
      extensions,
      'https://fhir.leedsth.nhs.uk/ValueSet/diagnosis-onset-date-estimated-1'
    )

    // assert
    expect(booleanExtension).toEqual(null)
  })
})
