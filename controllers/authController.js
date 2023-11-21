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

/* ------------------- Handle User Register ------------------- */

module.exports = { handleUserRegister };