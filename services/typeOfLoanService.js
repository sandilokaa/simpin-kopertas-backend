const typeOfLoanRepository = require("../repositories/typeOfLoanRepository");

class TypeOfLoanService {

    /* ------------------- Handle Create Type Of Loan Data ------------------- */

    static async handleCreateTypeOfLoanData({ type }) {

        try {
            
            const getTypeOfLoanData = await typeOfLoanRepository.handleCreateTypeOfLoanDataByType({ type });

            if (getTypeOfLoanData?.type) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Type already available!",
                    data: {
                        handleCreatedTypeOfLoanData: null,
                    },
                };

            } else {

                const handleCreatedTypeOfLoanData = await typeOfLoanRepository.handleCreateTypeOfLoanData({ type });

                return {
                    status: true,
                    status_code: 201,
                    message: "New type data created successfully (:",
                    data: {
                        handleCreatedTypeOfLoanData: handleCreatedTypeOfLoanData,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedTypeOfLoanData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Type Of Loan Data ------------------- */


    /* ------------------- Handle Get All Type Of Loan Data ------------------- */

    static async handleGetAllTypeOfLoanData(){

        try {
            
            const handleGetedAllTypeOfLoanData = await typeOfLoanRepository.handleGetAllTypeOfLoanData();

            return {
                status: true,
                status_code: 201,
                message: "Type data displayed successfully (:",
                data: {
                    handleGetedAllTypeOfLoanData: handleGetedAllTypeOfLoanData,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllTypeOfLoanData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Type Of Voluntary Data ------------------- */

};

module.exports = TypeOfLoanService;