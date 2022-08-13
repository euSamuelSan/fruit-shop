import { render, RenderResult } from '@testing-library/react'

import FooterComponent from '../FooterComponent'

describe('FooterComponent', () => {
    const renderFooterComponent = (): RenderResult => {
        return render(<FooterComponent />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderFooterComponent()

        expect(document.body).toMatchSnapshot()
    })
})
