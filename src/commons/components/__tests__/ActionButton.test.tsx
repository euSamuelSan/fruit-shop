import { render, RenderResult, screen, fireEvent } from '@testing-library/react'

import ActionButton, { ActionButtonProps } from '../ActionButton'

describe('ActionButton', () => {
    const getProps = (): ActionButtonProps => ({
        text: 'ANY_BUTTON_TEXT',
        onClick: jest.fn(),
    })

    const renderActionButton = (props = getProps()): RenderResult => {
        return render(<ActionButton {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderActionButton()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve chamar o onClick ao clicar no botão', () => {
        const props = getProps()

        renderActionButton(props)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(props.onClick).toHaveBeenCalled()
    })
})
