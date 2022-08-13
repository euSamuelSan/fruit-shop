export const BASE_URLS = {
    GITHUB: 'https://github.com/euSamuelSan',
    LINKEDIN: 'https://www.linkedin.com/in/samuel-san-juan/',
    INSTAGRAM: 'https://instagram.com/euSamuelSan',
    TWITTER: 'https://twitter.com/euSamuelSan',
}

export const getToken = (): string | null => {
    return localStorage.getItem('userVToken')
}

export const validatesToken = (): boolean => {
    const userToken = getToken()
    if (!userToken) return false

    const MILI_TO_EXPIRE_TOKEN = 4.32e7 //12 Horas

    if (
        new Date().getUTCMilliseconds() -
            new Date(userToken).getUTCMilliseconds() >
        MILI_TO_EXPIRE_TOKEN
    )
        return false

    return true
}
