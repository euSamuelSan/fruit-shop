import React from 'react'
import styled from 'styled-components'
import Colors from '../Colors'
import { AiOutlineClose } from 'react-icons/ai'

export type ModalProps = {
    zIndex?: number
    width?: string
    height?: string
    className?: string
    title: string
    children: JSX.Element
    isVisible: boolean
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({
    zIndex = 999,
    width = '500px',
    height = '400px',
    className,
    title,
    children,
    isVisible,
    setIsVisible,
}: ModalProps): JSX.Element {
    return isVisible ? (
        <ModalOverlay zIndex={zIndex}>
            <ModalContainer
                zIndex={zIndex}
                width={width}
                height={height}
                className={className}
            >
                <>
                    <ModalHeader>
                        <Title>{title}</Title>
                        <CloseButton onClick={() => setIsVisible(false)}>
                            <AiOutlineClose size={20} />
                        </CloseButton>
                    </ModalHeader>

                    {children}
                </>
            </ModalContainer>
        </ModalOverlay>
    ) : (
        <></>
    )
}

const ModalOverlay = styled.div<Partial<ModalProps>>`
    position: fixed;
    box-sizing: border-box;
    top: 0em;
    left: 0em;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.2);
    z-index: ${props => (props.zIndex ? props.zIndex - 1 : 1)};
`

const ModalContainer = styled.div<Partial<ModalProps>>`
    position: fixed;
    z-index: ${props => props.zIndex};
    width: ${props => props.width};
    height: ${props => props.height};

    border-radius: 4px;
    top: 13vw;
    left: 32vw;

    background-color: ${Colors.white};

    display: flex;
    flex-direction: column;
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const Title = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.black};
    margin: 0;
`

const CloseButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`
