import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('Deve desenhar a aplicação corretamente', () => {
    render(<App />)

    expect(document.body).toMatchSnapshot()
})

