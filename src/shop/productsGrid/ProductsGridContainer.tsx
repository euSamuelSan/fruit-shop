import React, { useEffect, useState } from 'react'
import ProductsGridView from './ProductsGridView'
import { Fruit, getAllFruits } from '../ProductsAPI'
import * as StringUtils from '../../commons/StringUtils'

type ProductsGridScreenProps = {
    searchTerm: string
}

export default function ProductsGridContainer({
    searchTerm,
}: ProductsGridScreenProps): JSX.Element {
    const [data, setData] = useState<Fruit[]>([])

    useEffect(() => {
        fetchFruits()
    })

    const fetchFruits = async (): Promise<void> => {
        const fetchedData = await getAllFruits()

        setData(fetchedData ? fetchedData.data : [])
    }

    const filterBySearchTerm = (itemName: string): boolean => {
        const normalizedItemName = StringUtils.normalize(itemName)
        const normalizedSearchTerm = StringUtils.normalize(searchTerm)

        return normalizedItemName.includes(normalizedSearchTerm)
    }

    const filteredData = data.filter(item => filterBySearchTerm(item.name))

    return <ProductsGridView data={filteredData} />
}
