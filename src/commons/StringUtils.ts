export const removeAccents = (str?: string): string => {
    if (!str) return ''

    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export const normalize = (str: string) => removeAccents(str).toLowerCase()

export const standardizePrice = (price: number): string =>
    `R$ ${price.toFixed(2).replace('.', ',')}`
