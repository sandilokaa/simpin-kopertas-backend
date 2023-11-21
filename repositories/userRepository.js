const { Users, UserDetails } = require("../models");
const { Op } = require("sequelize");

class UserRepository {

    /* ------------------- Handle Create Complete Profile ------------------- */

    static async handleCreateCompleteProfile({ userId }) {

        const handleCreatedCompleteProfile = await UserDetails.create({ userId });

        return handleCreatedCompleteProfile;

    };

    /* ------------------- End Handle Create Complete Profile ------------------- */


    /* ------------------- Handle Get Complete Profile ------------------- */

    static async handleGetCompleteProfile(){

        const query = {
            where: {},
            include: [
                {
                    model: Users
                }
            ]
        }

        const handleGetedCompleteProfile = await UserDetails.findOne(query);

        return handleGetedCompleteProfile;
        
    };

    /* ------------------- End Handle Get Complete Profile ------------------- */

};

module.exports = UserRepository;