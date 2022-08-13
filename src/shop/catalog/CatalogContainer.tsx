import React, { useState } from 'react'

import CatalogView from './CatalogView'

export default function CatalogContainer(): JSX.Element {
    const [search, setSearch] = useState<string>('')

    const handleOnChangeSearch = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearch(e.target.value)
    }

    return (
        <CatalogView
            search={search}
            handleOnChangeSearch={handleOnChangeSearch}
        />
    )
}
