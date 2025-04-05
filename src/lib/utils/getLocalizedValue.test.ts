import { describe, it, expect } from 'vitest'
import getLocalizedValue from './getLocalizedValue'

describe('getLocalizedValue', () => {
    it('should return value for pt-BR if available', () => {
        const input = {
            'en': 'United States',
            'pt-BR': 'EUA',
            'fr': 'États Unis'
        }

        const result = getLocalizedValue(input)
        expect(result).toBe('EUA')
    })

    it('should return value for en if pt-BR is not available', () => {
        const input = {
            'en': 'United States',
            'fr': 'États Unis'
        }

        const result = getLocalizedValue(input)
        expect(result).toBe('United States')
    })

    it('should return the first available value if neither pt-BR nor en are available', () => {
        const input = {
            'fr': 'États Unis',
            'es': 'Estados Unidos'
        }

        const result = getLocalizedValue(input)
        expect(result).toBe('États Unis')
    })

    it('should return null if object is null', () => {
        const result = getLocalizedValue(null)
        expect(result).toBeNull()
    })

    it('should return null if object is empty', () => {
        const result = getLocalizedValue({})
        expect(result).toBeNull()
    })
})
