import { render, RenderResult, fireEvent, screen } from '@testing-library/react'

import CatalogView, { CatalogViewProps } from '../CatalogView'

describe('CatalogView', () => {
    const getProps = (): CatalogViewProps => ({
        search: '',
        handleOnChangeSearch: jest.fn(),
    })

    const renderCatalog = (props = getProps()): RenderResult => {
        return render(<CatalogView {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderCatalog()

        expect(document.body).toMatchSnapshot()
    })

    it('Deve chamar o handleOnChangeSearch ao alterar o valor do input', () => {
        const props = getProps()
        renderCatalog(props)

        const input = screen.getByPlaceholderText(
            'Pesquise por nome do produto'
        )
        fireEvent.change(input, { target: { value: 'a' } })

        expect(props.handleOnChangeSearch).toHaveBeenCalled()
    })
})
