import { CSVtoJSON } from '../../parsers'

describe('parsers', () => {
  describe('csv', () => {
    it('to json', () => {
      const input = 'a,b,c\nd,e,f\ng,h,i'
      const output = '{"a":["d","g"],"b":["e","h"],"c":["f","i"]}'
      expect(CSVtoJSON(input)).toEqual(output)
    })
    it('cleans empty array entries', () => {
      const input = 'a,b,c\nd,e,f\ng,h,i\n'
      const output = '{"a":["d","g"],"b":["e","h"],"c":["f","i"]}'
      expect(CSVtoJSON(input)).toEqual(output)
    })
    it('handles windows newlines', () => {
      const input = 'a,b,c\r\nd,e,f\r\ng,h,i'
      const output = '{"a":["d","g"],"b":["e","h"],"c":["f","i"]}'
      expect(CSVtoJSON(input)).toEqual(output)
    })
  })
})
