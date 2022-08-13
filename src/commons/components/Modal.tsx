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
    z-index: ${props => props.zIndex};
    width: ${props => props.width};
    height: ${props => props.height};

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;

    background-color: ${Colors.white};
    border-radius: 4px;

    animation-name: modal-animation;
    animation-duration: 0.5s;

    @keyframes modal-animation {
        from {
            top: -100px;
            opacity: 0;
        }
        to {
            top: 50%;
            opacity: 1;
        }
    }

    @media (max-width: 570px) {
        width: 95%;
    }
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
