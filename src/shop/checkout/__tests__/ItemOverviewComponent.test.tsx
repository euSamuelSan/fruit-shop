import { render, RenderResult } from '@testing-library/react'
import { fruitsMock } from '../../ProductsAPI'

import ItemOverviewComponent, {
    ItemOverviewComponentProps,
} from '../ItemOverviewComponent'

describe('ItemOverviewComponent', () => {
    const getProps = (): ItemOverviewComponentProps => ({
        product: {
            ...fruitsMock[0],
            quantity: 1,
        },
        index: 1,
    })

    const renderItemOverviewComponent = (props = getProps()): RenderResult => {
        return render(<ItemOverviewComponent {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderItemOverviewComponent()

        expect(document.body).toMatchSnapshot()
    })
})
