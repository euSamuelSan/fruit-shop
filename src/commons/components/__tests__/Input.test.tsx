import { fireEvent, render, RenderResult, screen } from '@testing-library/react'

import Input, { InputProps } from '../Input'

describe('Input', () => {
    const getProps = (): InputProps => ({
        value: '',
        onChange: jest.fn(),
    })

    const renderInput = (props = getProps()): RenderResult => {
        return render(<Input {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderInput()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve chamar o onChange ao alterar o valor do input', () => {
        const props = {
            ...getProps(),
            placeholder: 'Your Text Here',
        }

        renderInput(props)
        const input = screen.getByPlaceholderText('Your Text Here')

        fireEvent.change(input, {
            target: {
                value: 'new input value',
            },
        })

        expect(props.onChange).toHaveBeenCalled()
    })
})
