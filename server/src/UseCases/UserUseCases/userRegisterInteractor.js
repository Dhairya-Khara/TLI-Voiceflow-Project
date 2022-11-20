const User = require('../../Entities/UserSchema')

const createUserInteractor = async (email, password) => {
    if (validateEmail(email)) {
        const user = new User({ email, password })

        try {
            await user.save()
            return user
        }
        catch (e) {
            console.log(e)
        }
    } else {
        throw new Error("Unable to register user.")
    }

}

function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}
module.exports = createUserInteractor

console.log(createUserInteractor('testing@gmail.com', 'solid'))
