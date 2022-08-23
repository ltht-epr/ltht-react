import { MedicationDosageInstructions } from '@ltht-react/medication'
import { DosageType, Maybe } from '@ltht-react/types'
import { DosageRelationshipType } from '@ltht-react/types/src'
import { render } from '@testing-library/react'
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
    [instructionsUndefined, DosageRelationshipType.And],
    [instructionsUndefined, DosageRelationshipType.Then],
    [instructionsUndefined, DosageRelationshipType.Or],
    [instructionsUndefined, DosageRelationshipType.Singleline],
    [instructionsEmpty, DosageRelationshipType.And],
    [instructionsEmpty, DosageRelationshipType.Then],
    [instructionsEmpty, DosageRelationshipType.Or],
    [instructionsEmpty, DosageRelationshipType.Singleline],
    [instructionsSingle, DosageRelationshipType.And],
    [instructionsSingle, DosageRelationshipType.Then],
    [instructionsSingle, DosageRelationshipType.Or],
    [instructionsMultiple, DosageRelationshipType.Singleline],
    [instructionsMultiple, undefined],
  ])(
    'Expected errors due to instruction and type mismatch',
    (instructions: Maybe<Maybe<DosageType>[]> | undefined, instructionType) => {
      expect(() => {
        render(
          <MedicationDosageInstructions
            dosageInstructions={instructions}
            reasons={undefined}
            dosageRelationshipType={instructionType}
          />
        )
      }).toThrowError()
    }
  )
})
