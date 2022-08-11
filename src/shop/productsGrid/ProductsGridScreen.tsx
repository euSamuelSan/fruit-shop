import React from 'react'
import ProductsGridContainer from './ProductsGridContainer'

type ProductsGridScreenProps = {
    searchTerm: string
}

export default function ProductsGridScreen({
    searchTerm,
}: ProductsGridScreenProps): JSX.Element {
    return <ProductsGridContainer searchTerm={searchTerm} />
}
