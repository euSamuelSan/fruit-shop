import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'

export type ActionButtonProps = {
    className?: string
    primary?: boolean
    color?: string
    disabled?: boolean
    icon?: React.ReactElement
    text: string
    onClick: () => void
}
export default function ActionButton({
    className,
    primary = false,
    color = Colors.leafyGreen,
    disabled = false,
    icon,
    text,
    onClick,
}: ActionButtonProps) {
    return (
        <Button
            className={className}
            primary={primary}
            color={color}
            disabled={disabled}
            onClick={onClick}
        >
            {icon}
            <Text>{text}</Text>
        </Button>
    )
}

const Button = styled.button<Partial<ActionButtonProps>>`
    cursor: pointer;
    border: 2px solid;
    border-radius: 25px;
    border-color: ${props =>
        props.disabled ? Colors.lightBlueGrey : props.color};
    color: ${props => (props.primary ? Colors.white : props.color)};
    background-color: ${props => {
        if (props.disabled) return Colors.lightBlueGrey
        if (props.primary) return props.color
        return 'transparent'
    }};

    width: fit-content;
    height: 35px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 5px;
`
const Text = styled.p`
    font-size: 14px;
    margin: 0;
`
