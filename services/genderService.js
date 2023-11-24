const genderRepository = require("../repositories/genderRepository");

class GenderService {

    /* ------------------- Handle Create Gender Data ------------------- */

    static async handleCreateGenderData({ gender }) {

        try {
            
            const getGenderData = await genderRepository.handleGetGenderByGender({ gender });

            if (getGenderData?.gender) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Gender already available!",
                    data: {
                        handleCreatedGenderData: null,
                    },
                };

            } else {

                const handleCreatedGenderData = await genderRepository.handleCreateGenderData({ gender });

                return {
                    status: true,
                    status_code: 201,
                    message: "New gender data created successfully (:",
                    data: {
                        handleCreatedGenderData: handleCreatedGenderData,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedGenderData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Gender Data ------------------- */


    /* ------------------- Handle Get All Gender Data ------------------- */

    static async handleGetAllGenderData(){

        try {
            
            const handleGetedAllGenderData = await genderRepository.handleGetAllGenderData();

            return {
                status: true,
                status_code: 201,
                message: "Gender data displayed successfully (:",
                data: {
                    handleGetedAllGenderData: handleGetedAllGenderData,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllGenderData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Gender Data ------------------- */

};

module.exports = GenderService;