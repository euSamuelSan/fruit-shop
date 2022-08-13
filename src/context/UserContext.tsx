import React, { useState } from 'react'

type UserContextProviderProps = {
    children: JSX.Element
}

type CartItems = {
    [key: string]: number
}

type UserContextProps = {
    cartItems: CartItems
    onChangeCartItems: (
        operation: 'add' | 'subtract' | 'clear',
        productId?: string
    ) => void
    validatesUserToken: () => void
}
export const UserContext = React.createContext<UserContextProps>({
    cartItems: {},
    onChangeCartItems: (operation, productId) => {
        // initializer
    },
    validatesUserToken: () => {
        // initializer
    },
})

export const useUserContext = () => React.useContext(UserContext)

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItems>({})

    const onChangeCartItems = (
        operation: 'add' | 'subtract' | 'clear',
        productId?: string
    ) => {
        switch (operation) {
            case 'add':
                if (productId) {
                    setCartItems(currentItems => ({
                        ...currentItems,
                        [productId]: currentItems[productId]
                            ? currentItems[productId] + 1
                            : 1,
                    }))
                }
                break
            case 'subtract':
                if (productId) {
                    setCartItems(currentItems => {
                        const newCartItems = Object.assign({}, currentItems)
                        if (newCartItems[productId]) {
                            if (newCartItems[productId] - 1 === 0)
                                delete newCartItems[productId]
                            else newCartItems[productId]--
                        }
                        return newCartItems
                    })
                }
                break
            case 'clear':
                setCartItems({})
                break
        }
    }

    const validatesUserToken = () => {
        return true
    }

    return (
        <UserContext.Provider
            value={{ cartItems, onChangeCartItems, validatesUserToken }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
