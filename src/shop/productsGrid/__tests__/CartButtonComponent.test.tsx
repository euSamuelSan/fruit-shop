import { render, RenderResult } from '@testing-library/react'

import CartButtonComponent from '../CartButtonComponent'

describe('CartButtonComponent', () => {
    const renderCartButton = (): RenderResult => {
        return render(<CartButtonComponent productId="ANY_PRODUCT_ID" />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderCartButton()

        expect(document.body).toMatchSnapshot()
    })
})
