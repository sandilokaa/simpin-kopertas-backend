const religionRepository = require("../repositories/religionRepository");

class ReligionService {

    /* ------------------- Handle Create Religion Data ------------------- */

    static async handleCreateReligionData({ religionName }) {

        try {
            
            const getReligionData = await religionRepository.handleGetReligionByReligionName({ religionName });

            if (getReligionData?.religionName) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Religion already available!",
                    data: {
                        handleCreatedReligionData: null,
                    },
                };

            } else {

                const handleCreatedReligionData = await religionRepository.handleCreateReligionData({ religionName });

                return {
                    status: true,
                    status_code: 201,
                    message: "New religion data created successfully (:",
                    data: {
                        handleCreatedReligionData: handleCreatedReligionData,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedReligionData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Religion Data ------------------- */


    /* ------------------- Handle Get All Religion Data ------------------- */

    static async handleGetAllReligionData(){

        try {
            
            const handleGetedAllReligionData = await religionRepository.handleGetAllReligionData();

            return {
                status: true,
                status_code: 201,
                message: "Religion data displayed successfully (:",
                data: {
                    handleGetedAllReligionData: handleGetedAllReligionData,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllReligionData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Religion Data ------------------- */

};

module.exports = ReligionService;