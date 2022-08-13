import React from 'react'
import styled from 'styled-components'

import Colors from '../../commons/Colors'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useUserContext } from '../../context/UserContext'

type CartButtonComponentProps = {
    productId: string
}
export default function CartButtonComponent({
    productId,
}: CartButtonComponentProps): JSX.Element {
    const { onChangeCartItems } = useUserContext()

    const handleOnClick = () => {
        onChangeCartItems('add', productId)
    }

    return (
        <Button onClick={handleOnClick}>
            <CartIcon /> <Text>Adicionar ao carrinho</Text>
        </Button>
    )
}

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 0 0 4px 4px;
    padding: 0 5px;

    background-color: ${Colors.leafyGreen};
    &:hover {
        background-color: ${Colors.bluishGreen};
        transition: background-color 0.2s;
    }
`

const Text = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${Colors.white};
`

const CartIcon = styled(AiOutlineShoppingCart)`
    width: 24px;
    color: ${Colors.white};
`
