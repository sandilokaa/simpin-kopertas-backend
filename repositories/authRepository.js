const { Users } = require("../models");

class AuthRepository {

    /* ------------------- Handle Get User By Email ------------------- */

    static async handleGetUserByEmail({ email }) {
        
        const getUserByEmail = await Users.findOne({
            where : { email }
        });

        return getUserByEmail;

    };

    /* ------------------- End Handle Get User By Email ------------------- */


    /* ------------------- Handle User Register ------------------- */

    static async handleUserRegister({ 
        name,
        email,
        password,
        memberNumber,
        phoneNumber,
        registrationDate
    }) {
    
        const handleUserRegistered = await Users.create({
            name,
            email,
            password,
            memberNumber,
            phoneNumber,
            registrationDate
        });

        return handleUserRegistered;

    };

    /* ------------------- End Handle User Register ------------------- */

};

module.exports = AuthRepository;