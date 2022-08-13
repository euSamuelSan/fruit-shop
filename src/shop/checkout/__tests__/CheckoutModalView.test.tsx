import { fireEvent, render, RenderResult, screen } from '@testing-library/react'

import CheckoutModalView, { CheckoutModalViewProps } from '../CheckoutModalView'
import { fruitsMock } from '../../ProductsAPI'
import { act } from 'react-dom/test-utils'

describe('CheckoutModalView', () => {
    const getProps = (): CheckoutModalViewProps => ({
        isModalVisible: true,
        setIsModalVisible: jest.fn(),
        items: [],
        clearCart: jest.fn(),
        getTotalPrice: jest.fn(() => 1),
    })

    const renderCheckoutModalView = (props = getProps()): RenderResult => {
        return render(<CheckoutModalView {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderCheckoutModalView()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve desenhar o componente com produtos corretamente', () => {
        const props = getProps()
        props.items = [{ ...fruitsMock[0], quantity: 2 }]

        renderCheckoutModalView(props)

        expect(document.body).toMatchSnapshot()
    })

    it('Deve limpar o carrinho ao clicar no botão', () => {
        const props = getProps()
        props.items = [{ ...fruitsMock[0], quantity: 2 }]

        renderCheckoutModalView(props)
        const clearButton = screen.getByText('Limpar Carrinho')

        fireEvent.click(clearButton)
        expect(props.clearCart).toHaveBeenCalled()
    })

    it('Deve fechar a modal ao clicar no botão', () => {
        const props = getProps()
        props.items = [{ ...fruitsMock[0], quantity: 2 }]

        renderCheckoutModalView(props)
        const [closeButton] = screen.getAllByRole('button')

        fireEvent.click(closeButton)
        expect(props.setIsModalVisible).toHaveBeenCalledTimes(1)
        expect(props.setIsModalVisible).toHaveBeenCalledWith(false)
    })
})
