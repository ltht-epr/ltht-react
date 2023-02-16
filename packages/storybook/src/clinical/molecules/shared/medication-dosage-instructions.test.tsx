import { MedicationDosageInstructions } from '@ltht-react/medication'
import { DosageType, Maybe } from '@ltht-react/types'
import { DosageRelationshipType } from '@ltht-react/types/src'
import { render, screen } from '@testing-library/react'
import {
  thenDosageInstruction1,
  thenDosageInstruction2,
  thenDosageInstruction3,
} from './medication-dosage-instructions.fixture'

const instructionsUndefined = undefined
const instructionsEmpty: Maybe<Maybe<DosageType>[]> = []
const instructionsSingle = [thenDosageInstruction1]
const instructionsMultiple = [thenDosageInstruction1, thenDosageInstruction2, thenDosageInstruction3]

describe('MedicationDosageInstructions', () => {
  it.each([
    [instructionsUndefined, undefined],
    [instructionsEmpty, undefined],
    [instructionsSingle, DosageRelationshipType.Singleline],
    [instructionsSingle, undefined],
    [instructionsMultiple, DosageRelationshipType.And],
    [instructionsMultiple, DosageRelationshipType.Then],
    [instructionsMultiple, DosageRelationshipType.Or],
  ])('Expected errors due to instruction and type mismatch', (instructions, instructionType) => {
    expect(() => {
      render(
        <MedicationDosageInstructions
          dosageInstructions={instructions}
          reasons={undefined}
          dosageRelationshipType={instructionType}
        />
      )
    }).not.toThrowError()
  })

  it.each([
    [
      instructionsUndefined,
      DosageRelationshipType.And,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsUndefined,
      DosageRelationshipType.Then,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsUndefined,
      DosageRelationshipType.Or,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsUndefined,
      DosageRelationshipType.Singleline,
      'Expecting exactly one instruction if relationship type is SingleLine',
    ],
    [
      instructionsEmpty,
      DosageRelationshipType.And,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsEmpty,
      DosageRelationshipType.Then,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsEmpty,
      DosageRelationshipType.Or,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsEmpty,
      DosageRelationshipType.Singleline,
      'Expecting exactly one instruction if relationship type is SingleLine',
    ],
    [
      instructionsSingle,
      DosageRelationshipType.And,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsSingle,
      DosageRelationshipType.Then,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsSingle,
      DosageRelationshipType.Or,
      'Expecting at least two instructions if relationship type defined and not SingleLine',
    ],
    [
      instructionsMultiple,
      DosageRelationshipType.Singleline,
      'Expecting exactly one instruction if relationship type is SingleLine',
    ],
    [
      instructionsMultiple,
      undefined,
      'Expecting one or less instructions if relationship type is undefined or SingleLine',
    ],
  ])(
    'Expected errors due to instruction and type mismatch',
    (instructions: Maybe<Maybe<DosageType>[]> | undefined, instructionType, expectedErrorMessage: string) => {
      render(
        <MedicationDosageInstructions
          dosageInstructions={instructions}
          reasons={undefined}
          dosageRelationshipType={instructionType}
        />
      )

      expect(screen.getByText(expectedErrorMessage)).toBeVisible()
    }
  )
})

// Expecting one or less instructions if relationship type is undefined or SingleLine
// Expecting exactly one instruction if relationship type is SingleLine
// Expecting at least two instructions if relationship type defined and not SingleLine
