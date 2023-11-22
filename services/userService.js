const userRepository = require("../repositories/userRepository");
const fileRemove = require("../utils/fileRemove");

class UserService {

    /* ------------------- Handle Update Complete Profile ------------------- */

    static async handleUpdateCompleteProfile({
        id,
        name, 
        email, 
        password, 
        memberNumber, 
        phoneNumber, 
        registrationDate,
        userId,
        genderId, 
        religionId, 
        placeOfBirth, 
        address, 
        job, 
        picture
    }) {

        try {

            const handleGetedUserById = await userRepository.handleGetUserById({ id });
            const handleGetedCompleteProfileByUserId = await userRepository.handleGetCompleteProfileByUserId({ userId });

            if (handleGetedUserById.id == id) {

                if (!name){
                    name = handleGetedUserById.name;
                }

                if (!email){
                    email = handleGetedUserById.email;
                }

                if (!password){
                    password = handleGetedUserById.password;
                }

                if (!memberNumber){
                    memberNumber = handleGetedUserById.memberNumber;
                }

                if (!phoneNumber){
                    phoneNumber = handleGetedUserById.phoneNumber;
                }

                if (!registrationDate){
                    registrationDate = handleGetedUserById.registrationDate;
                }

                if (!userId){
                    userId = handleGetedCompleteProfileByUserId.userId;
                }

                if (!genderId){
                    genderId = handleGetedCompleteProfileByUserId.genderId;
                }

                if (!religionId){
                    religionId = handleGetedCompleteProfileByUserId.religionId;
                }

                if (!placeOfBirth){
                    placeOfBirth = handleGetedCompleteProfileByUserId.placeOfBirth;
                }

                if (!address){
                    address = handleGetedCompleteProfileByUserId.address;
                }

                if (!job){
                    job = handleGetedCompleteProfileByUserId.job;
                }

                if (!picture){
                    picture = handleGetedCompleteProfileByUserId.picture;
                } else {
                    fileRemove(handleGetedCompleteProfileByUserId.picture)
                }

            }
            
            const handleUpdatedCompleteProfileByUserId = await userRepository.handleUpdateCompleteProfileByUserId({
                userId: handleGetedUserById.id,
                genderId, 
                religionId, 
                placeOfBirth, 
                address, 
                job, 
                picture
            });

            const handleUpdatedUserById = await userRepository.handleUpdateUserById({
                id,
                name, 
                email, 
                password, 
                memberNumber, 
                phoneNumber, 
                registrationDate,
            });

            return {
                status: true,
                status_code: 201,
                message: "Data completed successfully(:",
                data: {
                    handleUpdatedUser: handleUpdatedUserById,
                    handleUpdatedCompleteProfile: handleUpdatedCompleteProfileByUserId,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err,
                data: {
                    handleCreatedCompleteProfile: null,
                },
            };

        }

    };

    /* ------------------- End Handle Update Complete Profile ------------------- */


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