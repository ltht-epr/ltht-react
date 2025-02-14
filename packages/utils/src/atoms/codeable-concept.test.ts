import { CodeableConcept } from '@ltht-react/types'
import {
  codeableConceptCodeSummary,
  codeableConceptDisplaySummary,
  codeableConceptTextSummary,
} from './codeable-concept'

describe('CodeableConceptText', () => {
  describe('codeableConceptDisplaySummary', () => {
    it('null coding display formats correctly', () => {
      const codeable: CodeableConcept = {}
      expect(codeableConceptDisplaySummary(codeable)).toEqual('')
    })
    it('null coding, populated text display formats correctly', () => {
      const codeable: CodeableConcept = { text: 'Test Text 1' }
      expect(codeableConceptDisplaySummary(codeable)).toEqual('Test Text 1')
    })
    it('empty coding populated  display formats correctly', () => {
      const codeable: CodeableConcept = { coding: [], text: 'Test Text 2' }
      expect(codeableConceptDisplaySummary(codeable)).toEqual('Test Text 2')
    })
    it('single coding with empty display, populated text display formats correctly', () => {
      const codeable: CodeableConcept = { coding: [{ display: '' }], text: 'Test Text 2' }
      expect(codeableConceptDisplaySummary(codeable)).toEqual('Test Text 2')
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
    it('only displays codings that match the coding system if one is provided', () => {
      const codeable: CodeableConcept = {
        coding: [{ display: 'Test', system: 'http://coding.system' }, { display: 'Another' }],
      }
      expect(codeableConceptDisplaySummary(codeable, 'http://coding.system')).toEqual('Test')
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
      const codeables: CodeableConcept[] = [{ text: 'Text 1', coding: [{ display: '', code: '00000' }] }]
      expect(codeableConceptTextSummary(codeables)).toEqual('Text 1')
    })
    it('multiple codeable concept text summary formats correctly', () => {
      const codeables: CodeableConcept[] = [
        { text: 'Text 1', coding: [{ display: '', code: '00000' }] },
        { text: 'Text 2', coding: [{ display: '', code: '00001' }] },
      ]
      expect(codeableConceptTextSummary(codeables)).toEqual('Text 1, Text 2')
    })
    it('codeable concept text summary formats correctly when text is null but coding property display has value', () => {
      const codeables: CodeableConcept[] = [
        { coding: [{ display: 'Display 1', code: '00000' }] },
        { coding: [{ display: 'Display 2', code: '00001' }] },
      ]
      expect(codeableConceptTextSummary(codeables)).toEqual('Display 1, Display 2')
    })
    it('codeable concept text summary formats correctly when text is null for some items but correponding coding property display has value', () => {
      const codeables: CodeableConcept[] = [
        { text: 'Text 1', coding: [{ display: 'Display 1', code: '00000' }] },
        { coding: [{ display: 'Display 2', code: '00001' }] },
      ]
      expect(codeableConceptTextSummary(codeables)).toEqual('Text 1, Display 2')
    })
  })
})
