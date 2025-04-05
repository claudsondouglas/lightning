/**
 * 
 * @param satoshis 
 * @returns a string formated
 */
export default function formatSatoshisToBitcoins(satoshis: number): string {
    if (satoshis < 0 || satoshis === null || satoshis === undefined) {
        return 'n/a'
    }

    const bitcoin = satoshis / 100_000_000;

    return bitcoin.toLocaleString('pt-BR', {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
    })
}