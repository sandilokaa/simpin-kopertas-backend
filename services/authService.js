const authRepository = require("../repositories/authRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT } = require("../libs/jwtSecurity");

const SALT_ROUND = 10;

class AuthService {

    /* ------------------- Handle User Register ------------------- */

    static async handleUserRegister({
        name,
        email,
        password,
        memberNumber,
        phoneNumber,
        registrationDate
    }) {

        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Admin password is at least 8 characters long!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            if (!memberNumber) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Member number is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            if (!phoneNumber) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Phone Number is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            if (!registrationDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Registration date is required!",
                    data: {
                        registeredUser: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //

            const getUserByEmail = await authRepository.handleGetUserByEmail({ email });

            if (getUserByEmail) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Email already in use!",
                    data: {
                        registeredUser: null,
                    },
                };

            } else {

                const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

                const handleUserRegistered = await authRepository.handleUserRegister({
                    name,
                    email,
                    password: hashedPassword,
                    memberNumber,
                    phoneNumber,
                    registrationDate
                });

                return {
                    status: true,
                    status_code: 201,
                    message: "Successfully registered user!",
                    data: {
                        registeredUser: handleUserRegistered,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    registeredUser: null,
                },
            };

        }

    };

    /* ------------------- End Handle User Register ------------------- */

};

module.exports = AuthService;