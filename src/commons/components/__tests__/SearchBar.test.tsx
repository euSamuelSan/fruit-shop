import { render, RenderResult } from '@testing-library/react'

import SearchBar, { SearchBarProps } from '../SearchBar'

describe('SearchBar', () => {
    const getProps = (): SearchBarProps => ({
        value: '',
        onChange: jest.fn(),
    })

    const renderSearchBar = (props = getProps()): RenderResult => {
        return render(<SearchBar {...props} />)
    }

    it('Deve desenhar o componente corretamente', () => {
        renderSearchBar()

        expect(document.body).toMatchSnapshot()
    })
})
