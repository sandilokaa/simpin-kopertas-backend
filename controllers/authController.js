const authService = require("../services/authService");

/* ------------------- Handle User Register ------------------- */

const handleUserRegister = async (req, res) => {

    const { name, email, password, memberNumber, phoneNumber, registrationDate } = req.body;

    const { status, status_code, message, data} = await authService.handleUserRegister({
        name,
        email,
        password,
        memberNumber,
        phoneNumber,
        registrationDate
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle User Register ------------------- */


/* ------------------- Handle User Login ------------------- */

const handleUserLogin = async (req, res) => {

    const { email, password } = req.body;

    const { status, status_code, message, data} = await authService.handleUserLogin({
        email,
        password
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle User Login ------------------- */


/* ------------------- Handle Current User ------------------- */

const handleCurrentUser = async (req, res) => {
    
    const currentUser = req.user;

    res.status(200).send({
        status: true,
        message: "Successfully obtained user data that is currently logged in (:",
        data: {
            currentUser: currentUser,
        }
    });
};

/* ------------------- End Handle Current User ------------------- */


module.exports = { handleUserRegister, handleUserLogin, handleCurrentUser };