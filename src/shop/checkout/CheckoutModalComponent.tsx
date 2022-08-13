import React from 'react'
import CheckoutModalContainer from './CheckoutModalContainer'

type CheckoutModalComponentProps = {
    isModalVisible: boolean
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CheckoutModalComponent({
    isModalVisible,
    setIsModalVisible,
}: CheckoutModalComponentProps): JSX.Element {
    return (
        <CheckoutModalContainer
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
        />
    )
}
