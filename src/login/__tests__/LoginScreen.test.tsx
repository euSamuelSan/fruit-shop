import React from 'react'
import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import LoginScreen from '../LoginScreen'
import * as UserAPI from '../UserAPI'

describe('LoginScreen', () => {
    const renderLoginScreen = (): RenderResult => render(<LoginScreen />)
    const loginSpy = jest.spyOn(UserAPI, 'login')

    it('Deve desenhar o componente corretamente', () => {
        renderLoginScreen()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve chamar a rota de login', () => {
        renderLoginScreen()
        const submitButton = screen.getByRole('button')

        fireEvent.click(submitButton)
        expect(loginSpy).toHaveBeenCalled()
    })
})
