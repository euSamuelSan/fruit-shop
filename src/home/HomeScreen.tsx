import React from 'react'
import Shop from '../shop'
import HeaderComponent from '../header/HeaderComponent'
import Footer from '../footer/FooterComponent'

export default function HomeScreen(): JSX.Element {
    return (
        <>
            <HeaderComponent />
            <Shop />
            <Footer />
        </>
    )
}
