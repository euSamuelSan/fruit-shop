import { render, RenderResult } from '@testing-library/react'

import Modal, { ModalProps } from '../Modal'

describe('Modal', () => {
    const getProps = (): ModalProps => ({
        title: 'ANY_MODAL_TITLE',
        isVisible: true,
        setIsVisible: jest.fn(),
        children: <p>ANY_CHILDREN</p>,
    })

    const renderModal = (props = getProps()): RenderResult => {
        return render(<Modal {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderModal()

        expect(document.body).toMatchSnapshot()
    })
})
