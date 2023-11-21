const authRepository = require("../repositories/authRepository");
const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT } = require("../libs/jwtSecurity");

const SALT_ROUND = 10;

class AuthService {

    /* ------------------- Handle User Register ------------------- */

    static async handleUserRegister({
        userId,
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

                const handleCreatedCompleteProfile = await userRepository.handleCreateCompleteProfile({ userId: handleUserRegistered.id });

                return {
                    status: true,
                    status_code: 201,
                    message: "Successfully registered user!",
                    data: {
                        registeredUser: handleUserRegistered,
                        completedProfile: handleCreatedCompleteProfile
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


    /* ------------------- Handle User Login ------------------- */

    static async handleUserLogin({ email, password }) {


        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!email) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Email is required!",
                    data: {
                        userLogin: null,
                    },
                };
            }

            if (!password) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Password is required!",
                    data: {
                        userLogin: null,
                    },
                };
            } else if (password.length < 8) {
                return {
                    status: false,
                    status_code: 400,
                    message: "User password is at least 8 characters long!",
                    data: {
                        userLogin: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //


            const getUserByEmail = await authRepository.handleGetUserByEmail({ email });

            if (!getUserByEmail) {
                return {
                    status: false,
                    status_code: 404,
                    message: "Email not registered ):",
                    data: {
                        userLogin: null,
                    },
                };
            } else {

                const isPasswordMatch = await bcrypt.compare(password, getUserByEmail.password);

                if (isPasswordMatch) {

                    const token = jwt.sign({
                        id: getUserByEmail.id,
                        email: getUserByEmail.email,
                    },
                        JWT.SECRET,
                        {
                            expiresIn: JWT.EXPIRED,
                        });

                    return {
                        status: true,
                        status_code: 201,
                        message: "User login successfully (:",
                        data: {
                            token,
                        },
                    };

                } else {

                    return {
                        status: false,
                        status_code: 400,
                        message: "Your email or password is incorrect!",
                        data: {
                            userLogin: null,
                        },
                    };

                }
            }

        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    userLogin: null,
                },
            };

        }
    };

    /* ------------------- End Handle User Login ------------------- */

};

module.exports = AuthService;