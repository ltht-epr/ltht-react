import { CodeableConcept } from '@ltht-react/types'
import { codeableConceptCodeSummary, codeableConceptDisplaySummary } from './codeable-concept'

describe('CodeableConceptText', () => {
  describe('codeableConceptDisplaySummary', () => {
    it('empty coding  display formats correctly', () => {
      const codeable: CodeableConcept = {}
      expect(codeableConceptDisplaySummary(codeable)).toEqual('')
    })
    it('single coding display formats correctly', () => {
      const codeable: CodeableConcept = {
        coding: [{ display: 'Test' }],
      }
      expect(codeableConceptDisplaySummary(codeable)).toEqual('Test')
    })
    it('multiple codings display formats correctly', () => {
      const codeable: CodeableConcept = {
        coding: [{ display: 'Test' }, { display: 'Another' }],
      }
      expect(codeableConceptDisplaySummary(codeable)).toEqual('Test, Another')
    })
  })
  describe('codeableConceptCodeSummary', () => {
    it('empty coding display formats correctly', () => {
      const codeable: CodeableConcept = {}
      expect(codeableConceptCodeSummary(codeable)).toEqual('')
    })
    it('single coding display formats correctly', () => {
      const codeable: CodeableConcept = {
        coding: [{ display: '', code: '00000' }],
      }
      expect(codeableConceptCodeSummary(codeable)).toEqual('00000')
    })
    it('multiple codings display formats correctly', () => {
      const codeable: CodeableConcept = {
        coding: [
          { display: '', code: '00000' },
          { display: '', code: '11111' },
        ],
      }
      expect(codeableConceptCodeSummary(codeable)).toEqual('00000, 11111')
    })
  })
})
