import React from 'react'
import styled from 'styled-components'
import { IoLeafOutline } from 'react-icons/io5'
import Colors from '../commons/Colors'

export default function Logo(): JSX.Element {
    return (
        <Container>
            <LeafIcon size={40} color={Colors.leafyGreen} />
            <Title>Sua Horta</Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 50px;
`

const LeafIcon = styled(IoLeafOutline)`
    position: relative;
    left: 6px;
`

const Title = styled.h1`
    color: ${Colors.leafyGreen};
    margin: 0;
`
