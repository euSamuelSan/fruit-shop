import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import bInput from './Input'

export type InputWithMessageProps = {
    placeholder?: string
    className?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    isInvalid: boolean
    setIsInvalid: (arg: boolean) => void
    invalidMessage: string
    label: string
}

export default function InputWithMessage({
    placeholder,
    className,
    value,
    onChange,
    type = 'text',
    isInvalid,
    setIsInvalid,
    invalidMessage,
    label,
}: InputWithMessageProps): JSX.Element {
    return (
        <Container className={className} onFocus={() => setIsInvalid(false)}>
            <Label>{label}</Label>
            <BasicInput
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                isInvalid={isInvalid}
            />
            {isInvalid && <InvalidMessage>* {invalidMessage}</InvalidMessage>}
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const BasicInput = styled(bInput)<Partial<InputWithMessageProps>>`
    outline: none;
    padding: 10px;
    border: 2px solid;
    border-radius: 5px;
    border-color: ${props =>
        props.isInvalid ? Colors.strawberry : Colors.lightBlueGrey};
    color: ${Colors.black};
`

const InvalidMessage = styled.p`
    font-size: 12px;
    color: ${Colors.strawberry};
    margin: 3px 0 0 5px;
`

const Label = styled.label`
    color: ${Colors.black};
    font-weight: 600;
    padding: 5px;
`
