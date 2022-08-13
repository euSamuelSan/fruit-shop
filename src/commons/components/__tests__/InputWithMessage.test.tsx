import { fireEvent, render, RenderResult, screen } from '@testing-library/react'

import InputWithMessage, { InputWithMessageProps } from '../InputWithMessage'

describe('InputWithMessage', () => {
    const getProps = (): InputWithMessageProps => ({
        value: '',
        onChange: jest.fn(),
        isInvalid: false,
        setIsInvalid: jest.fn(),
        invalidMessage: 'ANY_INVALID_MESSAGE',
        label: 'ANY_LABEL',
    })

    const renderInputWithMessage = (props = getProps()): RenderResult => {
        return render(<InputWithMessage {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderInputWithMessage()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve desenhar o componente com o Input inválido', () => {
        renderInputWithMessage({
            ...getProps(),
            isInvalid: true,
        })

        expect(document.body).toMatchSnapshot()
    })

    it('Deve chamar o onChange ao alterar o valor do input', () => {
        const props = {
            ...getProps(),
            placeholder: 'ANY_PLACEHOLDER',
        }

        renderInputWithMessage(props)
        const input = screen.getByPlaceholderText('ANY_PLACEHOLDER')

        fireEvent.change(input, {
            target: {
                value: 'ANY_PLACEHOLDER',
            },
        })

        expect(props.onChange).toHaveBeenCalled()
    })
})
