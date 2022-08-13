import React, { useState, useEffect, useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
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
    const orderToPrintRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        fetchCartItems()
    }, [cartItems])

    const fetchCartItems = async (): Promise<void> => {
        const itemsIds = Object.keys(cartItems)
        const data = await Promise.all(
            itemsIds.map(id => getFruitById(id))
        ).then(responses =>
            responses.map(response => enrichProduct(response?.data))
        )

        setFetchedItems(data)
    }

    const enrichProduct = (product?: Fruit): ProductWithQuantity => {
        if (!product)
            throw new Error(
                'Um Produto não foi carregado corretamente. Tente novamente mais tarde.'
            )
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

    const handlePrintOrder = useReactToPrint({
        content: () => orderToPrintRef.current,
        onAfterPrint: () => {
            clearCart()
            setIsModalVisible(false)
        },
        documentTitle: 'Resumo do pedido',
    })

    return (
        <CheckoutModalView
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            items={fetchedItems}
            clearCart={clearCart}
            getTotalPrice={getTotalPrice}
            orderToPrintRef={orderToPrintRef}
            handlePrintOrder={handlePrintOrder}
        />
    )
}
