const AuthService = require('../services/authService')

const Signup = async (req, res) => {

    const payload = req.body; 

    const signupResponse = await AuthService.Signup({
        username: payload.username,
        email: payload.email,
        password: payload.password,
    })

    res.status(signupResponse.code).json(signupResponse)
}

const Login = async (req, res) => {

    const payload = req.body; 

    const loginResponse = await AuthService.Login({
        email: payload.email,
        password: payload.password,
    })

    res.status(loginResponse.code).json(loginResponse)
}

module.exports = {
    Login,
    Signup
}