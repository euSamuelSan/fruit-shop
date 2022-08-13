import React from 'react'
import styled from 'styled-components'
import { FiTrash } from 'react-icons/fi'
import { BsBagPlus, BsCreditCard2Back } from 'react-icons/bs'

import Colors from '../../commons/Colors'
import Modal from '../../commons/components/Modal'
import ActionButton from '../../commons/components/ActionButton'
import ItemOverviewComponent from './ItemOverviewComponent'
import { Fruit } from '../ProductsAPI'
import { standardizePrice } from '../../commons/StringUtils'

type ProductWithQuantity = Fruit & {
    quantity: number
}

export type CheckoutModalViewProps = {
    isModalVisible: boolean
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
    items: ProductWithQuantity[]
    clearCart: () => void
    getTotalPrice: () => number
}
export default function CheckoutModalView({
    isModalVisible,
    setIsModalVisible,
    items,
    clearCart,
    getTotalPrice,
}: CheckoutModalViewProps): JSX.Element {
    const renderNoContent = (): JSX.Element => {
        return (
            <NoContentContainer>
                <NoContentIcon size={64} color={Colors.hospitalGreen} />
                <NoContentText>
                    Parece que você não possui produtos no carrinho. <br />
                    Volte para a loja para adicionar mais itens!
                </NoContentText>
            </NoContentContainer>
        )
    }

    const renderItemOverview = (
        item: ProductWithQuantity,
        index: number
    ): JSX.Element => {
        return (
            <ItemOverviewComponent product={item} key={item.id} index={index} />
        )
    }

    const renderItems = (): JSX.Element => {
        return (
            <Container>
                <ItemsGridHeader>
                    <ItemsGridHeaderText></ItemsGridHeaderText>
                    <ItemsGridHeaderText>Produto</ItemsGridHeaderText>
                    <ItemsGridHeaderText>Subtotal</ItemsGridHeaderText>
                    <ItemsGridHeaderText></ItemsGridHeaderText>
                </ItemsGridHeader>
                {items.map((item, index) => renderItemOverview(item, index))}
            </Container>
        )
    }

    return (
        <Modal
            title="Checkout"
            isVisible={isModalVisible}
            setIsVisible={setIsModalVisible}
        >
            <>
                {items.length ? renderItems() : renderNoContent()}
                {items.length ? (
                    <Footer>
                        <TotalPriceText>
                            Total: {standardizePrice(getTotalPrice())}
                        </TotalPriceText>
                        <ActionButton
                            text="Limpar Carrinho"
                            onClick={() => clearCart()}
                            color={Colors.strawberry}
                            icon={
                                <FiTrash size={16} color={Colors.strawberry} />
                            }
                        />
                        <ActionButton
                            text="Finalizar Pedido"
                            onClick={() => {
                                //TODO
                            }}
                            icon={
                                <BsCreditCard2Back
                                    size={16}
                                    color={Colors.white}
                                />
                            }
                            primary
                        />
                    </Footer>
                ) : null}
            </>
        </Modal>
    )
}

const NoContentContainer = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NoContentText = styled.p`
    font-size: 12;
    color: ${Colors.lightBlueGreyTwo};
    text-align: center;
`
const NoContentIcon = styled(BsBagPlus)``

const ItemsGridHeader = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 0.7fr 1.9fr 1fr;
    padding: 0 10px;
    height: 40px;
`

const ItemsGridHeaderText = styled.p`
    color: ${Colors.black};
    font-weight: bold;
    margin: 0;
`

const Container = styled.div`
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    height: max-content;
`

const Footer = styled.div`
    width: 480px;
    margin-top: auto;
    align-self: flex-end;
    flex-direction: flex-end;
    display: flex;
    gap: 5px;
    padding: 10px;
`

const TotalPriceText = styled.p`
    color: ${Colors.black};
    font-weight: 500;
    margin: 0 auto 0 0;
`
