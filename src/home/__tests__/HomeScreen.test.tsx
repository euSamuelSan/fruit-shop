import { render, RenderResult } from '@testing-library/react'

import HomeScreen from '../HomeScreen'

describe('HomeScreen', () => {
    const renderHomeScreen = (): RenderResult => {
        return render(<HomeScreen />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderHomeScreen()

        expect(document.body).toMatchSnapshot()
    })
})
