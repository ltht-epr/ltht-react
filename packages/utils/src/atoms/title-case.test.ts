import titleCase from './title-case'

describe('TitleCaseText', () => {
  describe('titleCase', () => {
    it('empty value formats correctly', () => {
      const value = ''
      expect(titleCase(value)).toEqual('')
    })
    it('string with no delimiter formats correctly', () => {
      const value = 'UNCONFIRMED'
      expect(titleCase(value)).toEqual('Unconfirmed')
    })
    it('string with underscore delimiter formats correctly', () => {
      const value = 'NOT_CONFIRMED'
      expect(titleCase(value)).toEqual('Not Confirmed')
    })
    it('string with multiple delimiters of same type formats correctly', () => {
      const value = 'STATUS UNCONFIRMED'
      expect(titleCase(value)).toEqual('Status Unconfirmed')
    })
    it('string with multiple delimiters of different types formats correctly', () => {
      const value = 'STATUS NOT_CONFIRMED'
      expect(titleCase(value)).toEqual('Status Not Confirmed')
    })
  })
})
