import { render, RenderResult } from '@testing-library/react'

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
})
