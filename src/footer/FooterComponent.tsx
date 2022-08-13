import React from 'react'
import styled from 'styled-components'
import {
    AiOutlineGithub,
    AiOutlineLinkedin,
    AiOutlineInstagram,
    AiOutlineTwitter,
} from 'react-icons/ai'

import Colors from '../commons/Colors'
import { BASE_URLS } from '../environment'

export default function Footer(): JSX.Element {
    return (
        <Container>
            <Text>© 2022 SAN, Samuel.</Text>
            <SocialMediaContainer>
                <SocialMedia href={BASE_URLS.GITHUB} target="_blank">
                    Github{' '}
                    <AiOutlineGithub
                        color={Colors.white}
                        size={18}
                        className="icon"
                    />
                </SocialMedia>
                <SocialMedia href={BASE_URLS.LINKEDIN} target="_blank">
                    LinkedIn{' '}
                    <AiOutlineLinkedin
                        color={Colors.white}
                        size={18}
                        className="icon"
                    />
                </SocialMedia>
                <SocialMedia href={BASE_URLS.INSTAGRAM} target="_blank">
                    Instagram{' '}
                    <AiOutlineInstagram
                        color={Colors.white}
                        size={18}
                        className="icon"
                    />
                </SocialMedia>
                <SocialMedia href={BASE_URLS.TWITTER} target="_blank">
                    Twitter{' '}
                    <AiOutlineTwitter
                        color={Colors.white}
                        size={18}
                        className="icon"
                    />
                </SocialMedia>
            </SocialMediaContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${Colors.leafyGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    box-shadow: 0 -1px 3px 2px rgba(0, 0, 0, 0.1);
`

const Text = styled.p`
    color: ${Colors.white};
    padding-left: 10px;
`

const SocialMediaContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    padding-right: 10px;
    text-align: end;

    .icon {
        position: relative;
        top: 3px;
    }
`

const SocialMedia = styled.a`
    color: ${Colors.white};
    text-decoration: none;
`
