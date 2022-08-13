import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart, AiOutlineLogout } from 'react-icons/ai'
import { IoLeafOutline } from 'react-icons/io5'
import { Navigate } from 'react-router-dom'

import Colors from '../commons/Colors'
import { useUserContext } from '../context/UserContext'
import CheckoutModalComponent from '../shop/checkout/CheckoutModalComponent'

export default function HeaderComponent(): JSX.Element {
    const [isCheckoutModalVisible, setIsCheckoutModalVisible] =
        useState<boolean>(false)
    const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false)
    const { cartItems } = useUserContext()

    const handleCartIndicator = () => {
        const itemsInCart = Object.keys(cartItems).length
        return itemsInCart ? (
            <CartCounterIndicator>
                <CartCounterText>{itemsInCart}</CartCounterText>
            </CartCounterIndicator>
        ) : null
    }

    const logout = () => {
        localStorage.clear()
        setRedirectToLogin(true)
    }

    return (
        <Container>
            <LeafIcon color={Colors.white} size={40} />
            <Title>Sua Horta</Title>
            <ActionsContainer>
                <Action onClick={() => setIsCheckoutModalVisible(true)}>
                    <>
                        <AiOutlineShoppingCart
                            color={Colors.white}
                            size={24}
                            title="Carrinho"
                        />
                        {handleCartIndicator()}
                    </>
                </Action>
                <Action onClick={() => logout()}>
                    <>
                        <AiOutlineLogout
                            color={Colors.white}
                            size={24}
                            title="Sair"
                        />
                        {redirectToLogin && <Navigate to="/" />}
                    </>
                </Action>
            </ActionsContainer>
            <CheckoutModalComponent
                isModalVisible={isCheckoutModalVisible}
                setIsModalVisible={setIsCheckoutModalVisible}
            />
        </Container>
    )
}

const Container = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.leafyGreen};
    position: sticky;
    top: 0px;
    box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.1);
`

const LeafIcon = styled(IoLeafOutline)`
    position: relative;
    left: 6px;
    margin-left: auto;
`

const Title = styled.h1`
    color: ${Colors.white};
    margin: 0;
`

const ActionsContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding-right: 20px;

    @media (max-width: 370px) {
        padding-right: 5px;
    }
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

    &:hover {
        background-color: rgb(0, 0, 0, 0.1);
        transition: background-color 0.2s;
    }
`

const CartCounterIndicator = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 25px;
    background-color: ${Colors.strawberry};
    position: absolute;
    top: 8px;
    right: 62px;
`
const CartCounterText = styled.p`
    color: ${Colors.white};
    margin: 0;
    padding-top: 2px;
    font-size: 10px;
`
