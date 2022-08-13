import React, { useState, useEffect } from 'react'
import { useUserContext } from '../../context/UserContext'
import { Fruit, getFruitById } from '../ProductsAPI'
import CheckoutModalView from './CheckoutModalView'

type CheckoutModalContainerProps = {
    isModalVisible: boolean
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
type ProductWithQuantity = Fruit & {
    quantity: number
}
export default function CheckoutModalContainer({
    isModalVisible,
    setIsModalVisible,
}: CheckoutModalContainerProps): JSX.Element {
    const [fetchedItems, setFetchedItems] = useState<ProductWithQuantity[]>([])
    const { cartItems, onChangeCartItems } = useUserContext()

    useEffect(() => {
        fetchCartItems()
    }, [cartItems])

    const fetchCartItems = async (): Promise<void> => {
        const itemsIds = Object.keys(cartItems)
        const data = await Promise.all(
            itemsIds.map(id => getFruitById(id))
        ).then(responses =>
            responses.map(response => enrichProduct(response.data))
        )

        setFetchedItems(data)
    }

    const enrichProduct = (product: Fruit): ProductWithQuantity => {
        return {
            ...product,
            quantity: cartItems[product.id],
        }
    }

    const clearCart = (): void => {
        onChangeCartItems('clear')
    }

    const getTotalPrice = (): number => {
        return fetchedItems.reduce<number>(
            (total, product) => total + product.price * product.quantity,
            0
        )
    }

    return (
        <CheckoutModalView
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            items={fetchedItems}
            clearCart={clearCart}
            getTotalPrice={getTotalPrice}
        />
    )
}
