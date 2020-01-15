import { CodeableConcept } from '@ltht-react/types'
import {
  codeableConceptCodeSummary,
  codeableConceptDisplaySummary,
  codeableConceptTextSummary,
} from './codeable-concept'

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

  describe('codeableConceptTextSummary', () => {
    it('empty codeable concept text summary formats correctly', () => {
      const codeables: CodeableConcept[] = []
      expect(codeableConceptTextSummary(codeables)).toEqual('')
    })
    it('single codeable concept text summary formats correctly', () => {
      const codeables: CodeableConcept[] = [{ text: 'Test 1', coding: [{ display: '', code: '00000' }] }]
      expect(codeableConceptTextSummary(codeables)).toEqual('Test 1')
    })
    it('multiple codeable concept text summary formats correctly', () => {
      const codeables: CodeableConcept[] = [
        { text: 'Test 1', coding: [{ display: '', code: '00000' }] },
        { text: 'Test 2', coding: [{ display: '', code: '00001' }] },
      ]
      expect(codeableConceptTextSummary(codeables)).toEqual('Test 1, Test 2')
    })
  })
})
