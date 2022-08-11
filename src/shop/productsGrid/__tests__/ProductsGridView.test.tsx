import { render, RenderResult } from '@testing-library/react'

import ProductsGridView, { ProductsGridViewProps } from '../ProductsGridView'

describe('ProductsGridView', () => {
    const getProps = (): ProductsGridViewProps => ({
        data: [],
    })

    const renderProductsGrid = (props = getProps()): RenderResult => {
        return render(<ProductsGridView {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderProductsGrid()

        expect(document.body).toMatchSnapshot()
    })
})
