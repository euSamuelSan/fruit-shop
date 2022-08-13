import React from 'react'
import styled from 'styled-components'
import Colors from '../../commons/Colors'
import { standardizePrice } from '../../commons/StringUtils'
import { Fruit } from '../ProductsAPI'

type ProductWithQuantity = Fruit & {
    quantity: number
}

type OrderToPrintProps = {
    items: ProductWithQuantity[]
    getTotalPrice: () => number
}

export const OrderToPrint = React.forwardRef<
    HTMLDivElement,
    React.PropsWithChildren<OrderToPrintProps>
>(({ items, getTotalPrice }: OrderToPrintProps, ref): JSX.Element => {
    const renderOrderItem = (item: ProductWithQuantity, index: number) => {
        return (
            <OrderItemContainer index={index} key={item.id}>
                <p>{item.name}</p>
                <p>
                    {standardizePrice(item.price)} por {item.measurementUnit}
                </p>
                <p>
                    {item.quantity} {item.measurementUnit}
                </p>
                <p>{standardizePrice(item.price * item.quantity)}</p>
            </OrderItemContainer>
        )
    }

    return (
        <Container ref={ref}>
            <Title>Comprovante de pagamento</Title>
            <OrderItemLabelContainer>
                <Label>Produto</Label>
                <Label>Preço</Label>
                <Label>Qtid.</Label>
                <Label>Total</Label>
            </OrderItemLabelContainer>
            {items.map((item, index) => renderOrderItem(item, index))}
            <OrderItemContainer index={items.length}>
                <p></p>
            </OrderItemContainer>
            <OrderItemContainer index={items.length + 1}>
                <p></p>
                <p></p>
                <p></p>
                <p>{standardizePrice(getTotalPrice())}</p>
            </OrderItemContainer>
        </Container>
    )
})

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h2``

const OrderItemContainer = styled.div<{ index: number }>`
    display: grid;
    grid-template-columns: 1fr 1fr 0.6fr 0.7fr;
    padding: 0 10px;
    width: 80%;

    background-color: ${props =>
        props.index % 2 === 0 ? Colors.lightBlueGreyFour : Colors.white};
`

const OrderItemLabelContainer = styled.div`
    background-color: ${Colors.lightGreen};
    display: grid;
    grid-template-columns: 1fr 1fr 0.6fr 0.7fr;
    padding: 0 10px;
    width: 80%;
`

const Label = styled.p`
    font-weight: 500;
`

OrderToPrint.displayName = 'Resumo do pedido'
export default OrderToPrint
