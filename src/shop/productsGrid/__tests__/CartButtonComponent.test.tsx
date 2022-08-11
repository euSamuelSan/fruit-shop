import { render, RenderResult } from '@testing-library/react'

import CartButtonComponent from '../CartButtonComponent'

describe('CartButtonComponent', () => {
    const renderCartButton = (): RenderResult => {
        return render(<CartButtonComponent />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderCartButton()

        expect(document.body).toMatchSnapshot()
    })
})
