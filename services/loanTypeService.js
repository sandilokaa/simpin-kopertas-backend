const loanTypeRepository = require("../repositories/loanTypeRepository");

class LoanTypeService {

    /* ------------------- Handle Create LoanType Data ------------------- */

    static async handleCreateLoanTypeData({ type }) {

        try {
            
            const getLoanTypeData = await loanTypeRepository.handleGetLoanTypeByType({ type });

            if (getLoanTypeData?.type) {

                return {
                    status: false,
                    status_code: 400,
                    message: "Type already available!",
                    data: {
                        handleCreatedLoanTypeData: null,
                    },
                };

            } else {

                const handleCreatedLoanTypeData = await loanTypeRepository.handleCreateLoanTypeData({ type });

                return {
                    status: true,
                    status_code: 201,
                    message: "New type data created successfully (:",
                    data: {
                        handleCreatedLoanTypeData: handleCreatedLoanTypeData,
                    },
                };
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedLoanTypeData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Loan Type Data ------------------- */


    /* ------------------- Handle Get All Loan Type Data ------------------- */

    static async handleGetAllLoanTypeData(){

        try {
            
            const handleGetedAllLoanTypeData = await loanTypeRepository.handleGetAllLoanTypeData();

            return {
                status: true,
                status_code: 201,
                message: "Loan type data displayed successfully (:",
                data: {
                    handleGetedAllLoanTypeData: handleGetedAllLoanTypeData,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllLoanTypeData: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Loan Type Data ------------------- */

};

module.exports = LoanTypeService;