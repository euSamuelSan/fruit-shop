import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineLogin } from 'react-icons/ai'
import { Navigate } from 'react-router-dom'

import ActionButton from '../commons/components/ActionButton'
import Colors from '../commons/Colors'
import * as UserAPI from './UserAPI'
import bInputWithMessage from '../commons/components/InputWithMessage'
import Footer from '../footer/FooterComponent'
import Logo from './Logo'

export default function LoginScreen(): JSX.Element {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isInvalid, setIsInvalid] = useState<boolean>(false)
    const [redirectToHome, setRedirectToHome] = useState<boolean>(false)

    const handleLogin = async () => {
        const token = await UserAPI.login(login, password)
        if (token) {
            localStorage.setItem('userVToken', JSON.stringify(new Date()))
            setRedirectToHome(true)
            return
        }
        setIsInvalid(true)
    }
    const invalidMessage = 'Usuário ou senha inválidos'

    return (
        <Container>
            <Logo />
            <InputsContainer onSubmit={e => e.preventDefault()}>
                <InputWithMessage
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                    placeholder="Usuário"
                    isInvalid={isInvalid}
                    setIsInvalid={setIsInvalid}
                    invalidMessage={invalidMessage}
                    label="Usuário"
                />
                <InputWithMessage
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Senha"
                    type="password"
                    isInvalid={isInvalid}
                    setIsInvalid={setIsInvalid}
                    invalidMessage={invalidMessage}
                    label="Senha"
                />
                <ActionButton
                    primary
                    icon={<AiOutlineLogin size={24} color={Colors.white} />}
                    text="Entrar"
                    onClick={handleLogin}
                />
            </InputsContainer>
            <Footer />
            {redirectToHome ? <Navigate to="/home" /> : null}
        </Container>
    )
}

const Container = styled.div`
    background-color: ${Colors.veryLightPink};
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InputsContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWithMessage = styled(bInputWithMessage)`
    margin: 10px;
`
