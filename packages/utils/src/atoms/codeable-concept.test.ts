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
