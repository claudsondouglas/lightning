import { describe, it, expect } from 'vitest'
import formatUnixToDatetime from './formatUnixToDatetime'

describe('formatUnixToDatetime', () => {
  it('should convert a valid Unix timestamp into a formatted date string', () => {
    const timestamp = 1355321532
    const result = formatUnixToDatetime(timestamp)
    
    expect(result).toMatch("12/12/2012 ás 12:12")
  })

  it('should return "n/a" for invalid Unix timestamps', () => {
    expect(formatUnixToDatetime(NaN)).toBe('n/a')
    expect(formatUnixToDatetime(-Infinity)).toBe('n/a')
  })
})