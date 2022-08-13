import React from 'react'
import styled from 'styled-components'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

import { standardizePrice } from '../../commons/StringUtils'
import Colors from '../../commons/Colors'
import { useUserContext } from '../../context/UserContext'
import { Fruit } from '../ProductsAPI'

export type ItemOverviewComponentProps = {
    product: Fruit & { quantity: number }
    index: number
}
export default function ItemOverviewComponent({
    product,
    index,
}: ItemOverviewComponentProps): JSX.Element {
    const { onChangeCartItems } = useUserContext()

    const addItem = () => onChangeCartItems('add', product.id)
    const removeItem = () => onChangeCartItems('subtract', product.id)

    const renderActions = () => {
        return (
            <ActionsContainer>
                <Action onClick={() => removeItem()}>
                    <AiFillMinusCircle
                        size={20}
                        title="Remover"
                        color={Colors.blueGrey}
                    />
                </Action>
                <QuantityText>
                    {product.quantity} {product.measurementUnit}
                </QuantityText>
                <Action onClick={() => addItem()}>
                    <AiFillPlusCircle
                        size={20}
                        title="Adicionar"
                        color={Colors.blueGrey}
                    />
                </Action>
            </ActionsContainer>
        )
    }
    return (
        <Container index={index}>
            <Image src={product.image} alt={product.name} />
            <Text>{product.name}</Text>
            <Text>
                <b>{standardizePrice(product.price * product.quantity)}</b>(
                {standardizePrice(product.price)} por {product.measurementUnit})
            </Text>
            {renderActions()}
        </Container>
    )
}

const Container = styled.div<Partial<ItemOverviewComponentProps>>`
    display: grid;
    grid-template-columns: 0.4fr 0.7fr 1.9fr 1fr;
    height: 40px;
    padding: 0 10px;

    @media (max-width: 360px) {
        grid-template-columns: 0.8fr 2fr 1.2fr;
        padding: 0 5px;
    }

    background-color: ${props =>
        typeof props.index === 'number' && props.index % 2 === 0
            ? Colors.lightBlueGreyFour
            : Colors.white};
`

const Image = styled.img`
    max-width: 35px;
    max-height: 35px;

    display: block;
    margin: auto;

    @media (max-width: 500px) {
        max-width: 30px;
        max-height: 30px;
    }

    @media (max-width: 360px) {
        display: none;
    }
`

const Text = styled.p`
    color: ${Colors.black};
    margin: 0;
    line-height: 38px;
    font-size: 14px;

    @media (max-width: 500px) {
        font-size: 12px;
    }
`

const QuantityText = styled(Text)`
    font-size: 12px;
    @media (max-width: 500px) {
        font-size: 10px;
    }
`

const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
`

const Action = styled.button`
    display: flex;
    border: none;
    background: none;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 25px;

    width: 34px;
    height: 34px;

    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }

    @media (max-width: 360px) {
        width: 27px;
        height: 27px;
    }

    &:hover {
        background-color: rgb(0, 0, 0, 0.1);
        transition: background-color 0.2s;
    }
`
