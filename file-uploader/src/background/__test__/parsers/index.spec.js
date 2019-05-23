import { CSVtoJSON } from '../../parsers'

describe('parsers', () => {
  describe('csv', () => {
    const output = '[{"a":"d","b":"e","c":"f"},{"a":"g","b":"h","c":"i"}]'
    it('to json', () => {
      const input = 'a,b,c\nd,e,f\ng,h,i'
      expect(CSVtoJSON(input)).toEqual(output)
    })
    it('ignores terminating empty line', () => {
      const input = 'a,b,c\nd,e,f\ng,h,i\n'
      expect(CSVtoJSON(input)).toEqual(output)
    })
    it('handles windows newlines', () => {
      const input = 'a,b,c\r\nd,e,f\r\ng,h,i'
      expect(CSVtoJSON(input)).toEqual(output)
    })
  })
})
