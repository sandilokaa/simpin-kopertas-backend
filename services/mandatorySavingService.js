const mandatorySavingRepository = require("../repositories/mandatorySavingRepository");

class MandatorySavingService {

    /* ------------------- Handle Create Mandatory Saving ------------------- */

    static async handleCreateMandatorySaving({ userId, name, depositeDate, nominal }){

        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name date is required!",
                    data: {
                        createdMandatorySaving: null,
                    },
                };
            }

            if (!depositeDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Deposite date is required!",
                    data: {
                        createdMandatorySaving: null,
                    },
                };
            }

            if (!nominal) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nominal is required!",
                    data: {
                        createdMandatorySaving: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //

            const handleCreatedMandatorySaving = await mandatorySavingRepository.handleCreateMandatorySaving({ userId, name, depositeDate, nominal });

            return {
                status: true,
                status_code: 201,
                message: "Successfully created mandatory saving (:",
                data: {
                    handleCreatedMandatorySaving: handleCreatedMandatorySaving
                },
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedMandatorySaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Mandatory Saving ------------------- */


    /* ------------------- Handle Get All Mandatory Saving ------------------- */

    static async handleGetAllMandatorySaving({ depositeDate, name }){

        try {
            
            const handleGetedAllMandatorySaving = await mandatorySavingRepository.handleGetAllMandatorySaving({ depositeDate, name });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed mandatory saving (:",
                data: {
                    handleGetedAllMandatorySaving: handleGetedAllMandatorySaving
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllMandatorySaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Mandatory Saving ------------------- */


    /* ------------------- Handle Get Mandatory Saving By Id ------------------- */

    static async handleGetMandatorySavingById({ id }){

        try {

            const handleGetedMandatorySavingById = await mandatorySavingRepository.handleGetMandatorySavingById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed mandatory saving (:",
                data: {
                    handleGetedMandatorySavingById: handleGetedMandatorySavingById
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedMandatorySavingById: null,
                },
            };


        }

    };

    /* ------------------- End Handle Get Mandatory Saving By Id ------------------- */


    /* ------------------- Handle Delete Mandatory Saving By Id ------------------- */

    static async handleDeleteMandatorySavingById({ id, userId }){

        try {

            const handleGetedMandatorySavingById = await mandatorySavingRepository.handleGetMandatorySavingById({ id });

            if (handleGetedMandatorySavingById.userId == userId) {

                const handleDeletedMandatorySavingById = await mandatorySavingRepository.handleDeleteMandatorySavingById({ id });

                return {
                    status: true,
                    status_code: 200,
                    message: "Mandatory saving deleted successfully (:",
                    data: {
                        deletedMandatorySaving: handleDeletedMandatorySavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        deletedMandatorySaving: null,
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

    /* ------------------- End Handle Delete Mandatory Saving By Id ------------------- */


    /* ------------------- Handle Update Mandatory Saving By Id ------------------- */

    static async handleUpdateMandatorySavingById({ id, userId, name, depositeDate, nominal }){

        try {

            const handleGetedMandatorySavingById = await mandatorySavingRepository.handleGetMandatorySavingById({ id });

            if (handleGetedMandatorySavingById.userId == userId) {

                if (!userId) {
                    userId = handleGetedMandatorySavingById.userId;
                }

                if (!name) {
                    name = handleGetedMandatorySavingById.name;
                }

                if (!depositeDate) {
                    depositeDate = handleGetedMandatorySavingById.depositeDate;
                }

                if (!nominal) {
                    nominal = handleGetedMandatorySavingById.nominal;
                }

                const handleUpdatedMandatorySavingById = await mandatorySavingRepository.handleUpdateMandatorySavingById({ id, name, depositeDate, nominal });

                return {
                    status: true,
                    status_code: 200,
                    message: "Mandatory saving updated successfully (:",
                    data: {
                        updatedMandatorySaving: handleUpdatedMandatorySavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        updatedMandatorySaving: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedMandatorySaving: null,
                },
            };


        }

    };

    /* ------------------- End Handle Delete Mandatory Saving By Id ------------------- */

};

module.exports = MandatorySavingService;