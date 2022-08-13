import React from 'react'

import styled from 'styled-components'
import Colors from '../../commons/Colors'
import { Fruit } from '../ProductsAPI'
import CartButtonComponent from './CartButtonComponent'
import { standardizePrice } from '../../commons/StringUtils'

export type ProductsGridViewProps = {
    data: Fruit[]
}

export default function ProductsGridView({
    data,
}: ProductsGridViewProps): JSX.Element {
    const renderProducts = () => {
        return data.map(item => (
            <ProductCardContainer key={item.id}>
                <ProductInfoContainer>
                    <ProductImage src={item.image} alt={item.name} />
                    <ProductInfo>
                        <Text>{item.name}</Text>
                        <Price>
                            {standardizePrice(item.price)} /{' '}
                            <MeasurementUnit>
                                {item.measurementUnit}
                            </MeasurementUnit>
                        </Price>
                    </ProductInfo>
                </ProductInfoContainer>
                <CartButtonComponent productId={item.id} />
            </ProductCardContainer>
        ))
    }

    return <Container>{renderProducts()}</Container>
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 10px;

    width: min-content;
`

const ProductImage = styled.img`
    max-width: 150px;
    max-height: 150px;

    display: block;
    margin: auto;
`

const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 180px;

    border-radius: 4px;
    box-shadow: 0 0 3px 2px rgba(0, 0, 0, 0.1);
    background-color: ${Colors.white};

    &:hover {
        background-color: ${Colors.lightBlueGreyFour};
        transition: background-color 0.2s;
    }
`

const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    padding: 5px 5px 0 5px;
`

const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.p`
    font-weight: bold;
    color: ${Colors.black};
`

const Price = styled(Text)`
    color: ${Colors.leafyGreen};
`

const MeasurementUnit = styled.span`
    font-size: 10px;
`
