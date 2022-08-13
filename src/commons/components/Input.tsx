import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

export type InputProps = {
    placeholder?: string
    className?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
}

export default function Input({
    placeholder,
    className,
    value,
    onChange,
    type = 'text',
}: InputProps): JSX.Element {
    return (
        <BasicInput
            type={type}
            placeholder={placeholder}
            className={className}
            value={value}
            onChange={onChange}
        />
    )
}

const BasicInput = styled.input`
    outline: none;
    padding: 10px;
    border: none;

    color: ${Colors.black};
`
