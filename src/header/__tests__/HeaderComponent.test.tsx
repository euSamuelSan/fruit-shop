import { render, RenderResult } from '@testing-library/react'

import HeaderComponent from '../HeaderComponent'

describe('HeaderComponent', () => {
    const renderHeaderComponent = (): RenderResult => {
        return render(<HeaderComponent />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderHeaderComponent()

        expect(document.body).toMatchSnapshot()
    })
})
