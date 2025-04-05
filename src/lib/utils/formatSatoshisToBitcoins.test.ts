import { describe, it, expect } from 'vitest'
import formatSatoshisToBitcoins from './formatSatoshisToBitcoins'

describe('formatSatoshisToBitcoins function', () => {
    it('should format satoshis into correctly formatted bitcoin strings', () => {
        expect(formatSatoshisToBitcoins(0)).toBe('0,00000000')
        expect(formatSatoshisToBitcoins(100000000)).toBe('1,00000000')
        expect(formatSatoshisToBitcoins(50000000)).toBe('0,50000000')
        expect(formatSatoshisToBitcoins(123456789)).toBe('1,23456789')
    })

    it('should return "n/a" for invalid or negative values', () => {
        // @ts-ignore
        expect(formatSatoshisToBitcoins(-1)).toBe('n/a')
        // @ts-ignore
        expect(formatSatoshisToBitcoins(null)).toBe('n/a')
        // @ts-ignore
        expect(formatSatoshisToBitcoins(undefined)).toBe('n/a')
    })
})