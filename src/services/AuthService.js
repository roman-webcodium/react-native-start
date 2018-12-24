
class AuthService {
    static signIn() {
        return new Promise((resolve, reject) => {
            resolve({
                firstName: 'Roman',
                lastName: 'Lisnyi'
            })
        });
    }
}

export {AuthService}