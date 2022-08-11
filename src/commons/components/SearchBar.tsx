import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

import bInput, { InputProps } from './Input'
import Colors from '../Colors'

export type SearchBarProps = InputProps

export default function SearchBar({
    placeholder,
    value,
    onChange,
}: SearchBarProps): JSX.Element {
    return (
        <Container>
            <SearchIcon size={20} color={Colors.blueGrey} />
            <Input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;

    border: 2px solid ${Colors.lightGrey};
    border-radius: 3px;
    width: fit-content;
`

const SearchIcon = styled(AiOutlineSearch)`
    padding-left: 5px;
`

const Input = styled(bInput)`
    width: 250px;
`
