import React from 'react'
import styled from 'styled-components'
import SearchBar from '../../commons/components/SearchBar'
import ProductsGrid from '../productsGrid'

export type CatalogViewProps = {
    search: string
    handleOnChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CatalogView({
    search,
    handleOnChangeSearch,
}: CatalogViewProps): JSX.Element {
    return (
        <Container>
            <CatalogHeader>
                <SearchBar
                    placeholder="Pesquise por nome do produto"
                    value={search}
                    onChange={handleOnChangeSearch}
                />
            </CatalogHeader>
            <ProductsGrid searchTerm={search} />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const CatalogHeader = styled.div`
    display: flex;
    padding: 10px 0;
`
