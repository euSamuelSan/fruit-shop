export const login = async (
    login: string,
    password: string
): Promise<boolean | void> => {
    try {
        const user = {
            login: 'dev',
            pass: 'DEV#123',
        }

        return Promise.resolve(login === user.login && password === user.pass)
    } catch (err) {
        console.error(err)
    }
}
