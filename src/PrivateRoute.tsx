import React from 'react'
import { Navigate } from 'react-router-dom'
import { validatesToken } from './environment'
import UserContextProvider from './context/UserContext'

type PrivateRouteTypes = {
    element: JSX.Element
}
export default function PrivateRoute({
    element,
}: PrivateRouteTypes): JSX.Element {
    const isValidToken = validatesToken()

    const redirectToLogin = (): JSX.Element => {
        localStorage.clear()
        return <Navigate to="/" replace />
    }

    return isValidToken ? (
        <UserContextProvider>{element}</UserContextProvider>
    ) : (
        redirectToLogin()
    )
}
