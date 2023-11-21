const userRepository = require("../repositories/userRepository");
const { use } = require("../server");

class UserService {

    /* ------------------- Handle Create Complete Profile ------------------- */

    // static async handleCreateCompleteProfile({
    //     userId,
    //     genderId, 
    //     religionId, 
    //     placeOfBirth, 
    //     address, 
    //     job, 
    //     picture
    // }) {

    //     try {
            
    //         const handleCreatedCompleteProfile = await userRepository.handleCreateCompleteProfile({
    //             userId,
    //             genderId, 
    //             religionId, 
    //             placeOfBirth, 
    //             address, 
    //             job, 
    //             picture
    //         });

    //         return {
    //             status: true,
    //             status_code: 201,
    //             message: "Data completed successfully(:",
    //             data: {
    //                 handleCreatedCompleteProfile: handleCreatedCompleteProfile,
    //             },
    //         };

    //     } catch (err) {
            
    //         return {
    //             status: false,
    //             status_code: 500,
    //             message: err,
    //             data: {
    //                 handleCreatedCompleteProfile: null,
    //             },
    //         };

    //     }

    // };

    /* ------------------- End Handle Create Complete Profile ------------------- */


    /* ------------------- Handle Get Complete Profile ------------------- */

    static async handleGetCompleteProfile(){

        try {

            const handleGetedCompleteProfile = await userRepository.handleGetCompleteProfile();

            return {
                status: true,
                status_code: 200,
                message: "Data displayed successfully!",
                data: {
                    getedCompleteProfile: handleGetedCompleteProfile,
                },
            };

        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    getedCompleteProfile: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get Complete Profile ------------------- */
    
};

module.exports = UserService;