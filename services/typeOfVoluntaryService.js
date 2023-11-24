const typeOfVoluntaryRepository = require("../repositories/typeOfVoluntaryRepository");

class TypeOfVoluntaryService {

    /* ------------------- Handle Create Type Of Voluntary Data ------------------- */

    static async handleCreateTypeOfVoluntaryData({ type }) {

        try {
            
            const getTypeOfVoluntaryData = await typeOfVoluntaryRepository.handleGetTypeOfVoluntaryByType({ type });

            if (getTypeOfVoluntaryData?.type) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Type already available!",
                    data: {
                        handleCreatedTypeOfVoluntaryData: null,
                    },
                };

            } else {

                const handleCreatedTypeOfVoluntaryData = await typeOfVoluntaryRepository.handleCreateTypeOfVoluntaryData({ type });

                return {
                    status: true,
                    status_code: 201,
                    message: "New type data created successfully (:",
                    data: {
                        handleCreatedTypeOfVoluntaryData: handleCreatedTypeOfVoluntaryData,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedTypeOfVoluntaryData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Type Of Voluntary Data ------------------- */


    /* ------------------- Handle Get All Type Of Voluntary Data ------------------- */

    static async handleGetAllTypeOfVoluntaryData(){

        try {
            
            const handleGetedAllTypeOfVoluntaryData = await typeOfVoluntaryRepository.handleGetAllTypeOfVoluntaryData();

            return {
                status: true,
                status_code: 201,
                message: "Type data displayed successfully (:",
                data: {
                    handleGetedAllTypeOfVoluntaryData: handleGetedAllTypeOfVoluntaryData,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllTypeOfVoluntaryData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Type Of Voluntary Data ------------------- */

};

module.exports = TypeOfVoluntaryService;