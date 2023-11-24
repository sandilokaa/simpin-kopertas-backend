const principalSavingRepository = require("../repositories/principalSavingRepository");

class PrincipalSavingService {

    /* ------------------- Handle Create Principal Saving ------------------- */

    static async handleCreatePrincipalSaving({ userId, depositeDate, nominal }){

        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!depositeDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Deposite date is required!",
                    data: {
                        createdPrincipalSaving: null,
                    },
                };
            }

            if (!nominal) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nominal is required!",
                    data: {
                        createdPrincipalSaving: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //

            const handleCreatedPrincipalSaving = await principalSavingRepository.handleCreatePrincipalSaving({ userId, depositeDate, nominal });

            return {
                status: true,
                status_code: 201,
                message: "Successfully created principal saving (:",
                data: {
                    handleCreatedPrincipalSaving: handleCreatedPrincipalSaving
                },
            };


        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedPrincipalSaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Principal Saving ------------------- */


    /* ------------------- Handle Get All Principal Saving ------------------- */

    static async handleGetAllPrincipalSaving({ depositeDate, name }){

        try {
            
            const handleGetedAllPrincipalSaving = await principalSavingRepository.handleGetAllPrincipalSaving({ depositeDate, name });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed principal saving (:",
                data: {
                    handleGetedAllPrincipalSaving: handleGetedAllPrincipalSaving
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllPrincipalSaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Principal Saving ------------------- */


    /* ------------------- Handle Get Principal Saving By Id ------------------- */

    static async handleGetPrincipalSavingById({ id }){

        try {

            const handleGetedPrincipalSavingById = await principalSavingRepository.handleGetPrincipalSavingById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed principal saving (:",
                data: {
                    handleGetedPrincipalSavingById: handleGetedPrincipalSavingById
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedPrincipalSavingById: null,
                },
            };


        }

    };

    /* ------------------- End Handle Get Principal Saving By Id ------------------- */


    /* ------------------- Handle Delete Principal Saving By Id ------------------- */

    static async handleDeletePrincipalSavingById({ id, userId }){

        try {

            const handleGetedPrincipalSavingById = await principalSavingRepository.handleGetPrincipalSavingById({ id });

            if (handleGetedPrincipalSavingById.userId == userId) {

                const handleDeletedPrincipalSavingById = await principalSavingRepository.handleDeletePrincipalSavingById({ id });

                return {
                    status: true,
                    status_code: 200,
                    message: "Product deleted successfully (:",
                    data: {
                        deletedPrincipalSaving: handleDeletedPrincipalSavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        deletedPrincipalSaving: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deletedPrincipalSaving: null,
                },
            };


        }

    };

    /* ------------------- End Handle Delete Principal Saving By Id ------------------- */


    /* ------------------- Handle Update Principal Saving By Id ------------------- */

    static async handleUpdatePrincipalSavingById({ id, userId, depositeDate, nominal }){

        try {

            const handleGetedPrincipalSavingById = await principalSavingRepository.handleGetPrincipalSavingById({ id });

            if (handleGetedPrincipalSavingById.userId == userId) {

                if (!userId) {
                    userId = handleGetedPrincipalSavingById.userId;
                }

                if (!depositeDate) {
                    depositeDate = handleGetedPrincipalSavingById.depositeDate;
                }

                if (!nominal) {
                    nominal = handleGetedPrincipalSavingById.nominal;
                }

                const handleUpdatedPrincipalSavingById = await principalSavingRepository.handleUpdatePrincipalSavingById({ id, depositeDate, nominal });

                return {
                    status: true,
                    status_code: 200,
                    message: "Product updated successfully (:",
                    data: {
                        updatedPrincipalSaving: handleUpdatedPrincipalSavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        updatedPrincipalSaving: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedPrincipalSaving: null,
                },
            };


        }

    };

    /* ------------------- End Handle Delete Principal Saving By Id ------------------- */

};

module.exports = PrincipalSavingService;