const loanRepository = require("../repositories/loanRepository");

class LoanService {

    /* ------------------- Handle Create Loan ------------------- */

    static async handleCreateLoan({
        userId,
        typeId,
        name,
        loanDate,
        nominal,
        installmentAmount
    }) {

        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name is required!",
                    data: {
                        createdLoan: null,
                    },
                };
            }

            if (!typeId) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Type is required!",
                    data: {
                        createdLoan: null,
                    },
                };
            }

            if (!loanDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Date is required!",
                    data: {
                        createdLoan: null,
                    },
                };
            }

            if (!nominal) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nominal is required!",
                    data: {
                        createdLoan: null,
                    },
                };
            }

            if (!installmentAmount) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Installment is required!",
                    data: {
                        createdLoan: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //

            const handleCreatedLoan = await loanRepository.handleCreateLoan({
                userId,
                typeId,
                name,
                loanDate,
                nominal,
                installmentAmount
            });

            return {
                status: true,
                status_code: 201,
                message: "Successfully created loan (:",
                data: {
                    handleCreatedLoan: handleCreatedLoan
                },
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedLoan: null,
                },
            };

        }

    };

    /* ------------------- Handle Create Loan ------------------- */


    /* ------------------- Handle Get All Loan ------------------- */

    static async handleGetAllLoan(){

        try {
            
            const handleGetedAllLoan = await loanRepository.handleGetAllLoan();

            return {
                status: true,
                status_code: 201,
                message: "Loan data displayed successfully (:",
                data: {
                    handleGetedAllLoan: handleGetedAllLoan,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllLoan: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Loan ------------------- */


    /* ------------------- Handle Get Loan By Id ------------------- */

    static async handleGetLoanById({ id }){

        try {
            
            const handleGetedLoanById = await loanRepository.handleGetLoanById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Loan data displayed successfully (:",
                data: {
                    handleGetedLoanById: handleGetedLoanById,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedLoanById: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get Loan By Id ------------------- */


     /* ------------------- Handle Get Loan By User Id ------------------- */

    static async handleGetLoanByUserId({ userId, loanDate }){

        try {
            
            const handleGetedLoanByuserId = await loanRepository.handleGetLoanByUserId({ userId, loanDate });

            return {
                status: true,
                status_code: 201,
                message: "Loan data displayed successfully (:",
                data: {
                    handleGetedLoanByuserId: handleGetedLoanByuserId,
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedLoanByuserId: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get Loan By User Id ------------------- */


    /* ------------------- Handle Update Loan By Id ------------------- */

    static async handleUpdateLoanById({
        id,
        userId,
        typeId,
        name,
        loanDate,
        nominal,
        installmentAmount
    }) {

        try {

            const handleGetedLoanById = await loanRepository.handleGetLoanById({ id });

            if (handleGetedLoanById.userId == userId) {

                if (!userId) {
                    userId = handleGetedLoanById.userId;
                }

                if (!typeId) {
                    typeId = handleGetedLoanById.typeId;
                }

                if (!name) {
                    name = handleGetedLoanById.name;
                }

                if (!loanDate) {
                    loanDate = handleGetedLoanById.loanDate;
                }

                if (!nominal) {
                    nominal = handleGetedLoanById.nominal;
                }

                if (!installmentAmount) {
                    installmentAmount = handleGetedLoanById.installmentAmount;
                }

                const handleUpdatedLoanById = await loanRepository.handleUpdateLoanById({
                    id,
                    userId,
                    typeId,
                    name,
                    loanDate,
                    nominal,
                    installmentAmount
                });

                return {
                    status: true,
                    status_code: 200,
                    message: "Loan updated successfully (:",
                    data: {
                        handleUpdatedLoanById: handleUpdatedLoanById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        handleUpdatedLoanById: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedLoan: null,
                },
            };

        }

    };

    /* ------------------- End Handle Update Loan By Id ------------------- */


    /* ------------------- Handle Delete Loan By Id ------------------- */

    static async handleDeleteLoanById({ id, userId }){

        try {

            const handleGetedLoanById = await loanRepository.handleGetLoanById({ id });

            if (handleGetedLoanById.userId == userId) {

                const handleDeletedLoanById = await loanRepository.handleDeleteLoanById({ id });

                return {
                    status: true,
                    status_code: 200,
                    message: "Loan deleted successfully (:",
                    data: {
                        handleDeletedLoanById: handleDeletedLoanById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        handleDeletedLoanById: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deletedMandatorySaving: null,
                },
            };


        }

    };

    /* ------------------- End Handle Delete Loan By Id ------------------- */

};

module.exports = LoanService;