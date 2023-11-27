const voluntarySavingRepository = require("../repositories/voluntarySavingRepository");

class VoluntarySavingService {

    /* ------------------- Handle Create Voluntary Saving ------------------- */

    static async handleCreateVoluntarySaving({ userId, name, depositeDate, nominal }){

        try {
            
            // ------------------------- Payload Validation ------------------------- //

            if (!name) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Name date is required!",
                    data: {
                        createdVoluntarySaving: null,
                    },
                };
            }

            if (!depositeDate) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Deposite date is required!",
                    data: {
                        createdVoluntarySaving: null,
                    },
                };
            }

            if (!nominal) {
                return {
                    status: false,
                    status_code: 400,
                    message: "Nominal is required!",
                    data: {
                        createdVoluntarySaving: null,
                    },
                };
            }

            // ------------------------- End Payload Validation ------------------------- //

            const handleCreatedVoluntarySaving = await voluntarySavingRepository.handleCreateVoluntarySaving({ userId, name, depositeDate, nominal });

            return {
                status: true,
                status_code: 201,
                message: "Successfully created voluntary saving (:",
                data: {
                    handleCreatedVoluntarySaving: handleCreatedVoluntarySaving
                },
            }

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleCreatedVoluntarySaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Create Voluntary Saving ------------------- */


    /* ------------------- Handle Get All Voluntary Saving ------------------- */

    static async handleGetAllVoluntarySaving({ depositeDate, name }){

        try {
            
            const handleGetedAllVoluntarySaving = await voluntarySavingRepository.handleGetAllVoluntarySaving({ depositeDate, name });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed voluntary saving (:",
                data: {
                    handleGetedAllVoluntarySaving: handleGetedAllVoluntarySaving
                },
            };

        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedAllVoluntarySaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get All Voluntary Saving ------------------- */


    /* ------------------- Handle Get Voluntary Saving By Id ------------------- */

    static async handleGetVoluntarySavingById({ id }){

        try {

            const handleGetedVoluntarySavingById = await voluntarySavingRepository.handleGetVoluntarySavingById({ id });

            return {
                status: true,
                status_code: 201,
                message: "Successfully displayed voluntary saving (:",
                data: {
                    handleGetedVoluntarySavingById: handleGetedVoluntarySavingById
                },
            };
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedVoluntarySavingById: null,
                },
            };


        }

    };

    /* ------------------- End Handle Get Voluntary Saving By Id ------------------- */


    /* ------------------- Handle Delete Voluntary Saving By Id ------------------- */

    static async handleDeleteVoluntarySavingById({ id, userId }){

        try {

            const handleGetedVoluntarySavingById = await voluntarySavingRepository.handleGetVoluntarySavingById({ id });

            if (handleGetedVoluntarySavingById.userId == userId) {

                const handleDeletedVoluntarySavingById = await voluntarySavingRepository.handleDeleteVoluntarySavingById({ id });

                return {
                    status: true,
                    status_code: 200,
                    message: "Voluntary saving deleted successfully (:",
                    data: {
                        deletedVoluntarySaving: handleDeletedVoluntarySavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        deletedVoluntarySaving: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    deletedVoluntarySaving: null,
                },
            };


        }

    };

    /* ------------------- End Handle Delete Voluntary Saving By Id ------------------- */


    /* ------------------- Handle Update Voluntary Saving By Id ------------------- */

    static async handleUpdateVoluntarySavingById({ id, userId, name, depositeDate, nominal }){

        try {

            const handleGetedVoluntarySavingById = await voluntarySavingRepository.handleGetVoluntarySavingById({ id });

            if (handleGetedVoluntarySavingById.userId == userId) {

                if (!userId) {
                    userId = handleGetedVoluntarySavingById.userId;
                }

                if (!name) {
                    name = handleGetedVoluntarySavingById.name;
                }

                if (!depositeDate) {
                    depositeDate = handleGetedVoluntarySavingById.depositeDate;
                }

                if (!nominal) {
                    nominal = handleGetedVoluntarySavingById.nominal;
                }

                const handleUpdatedVoluntarySavingById = await voluntarySavingRepository.handleUpdateVoluntarySavingById({ id, name, depositeDate, nominal });

                return {
                    status: true,
                    status_code: 200,
                    message: "Voluntary saving updated successfully (:",
                    data: {
                        updatedVoluntarySaving: handleUpdatedVoluntarySavingById,
                    },
                };

            } else {

                return {
                    status: false,
                    status_code: 401,
                    message: "Resource Unauthorized ):",
                    data: {
                        updatedVoluntarySaving: null,
                    },
                }

            }
            
        } catch (err) {
            
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    updatedVoluntarySaving: null,
                },
            };

        }

    };

    /* ------------------- End Handle Delete Voluntary Saving By Id ------------------- */


    /* ------------------- Handle Get Voluntary Saving By UserId ------------------- */

    static async handleGetAllVoluntarySavingByUserId({ userId }) {

        try {

            const handleGetedVoluntarySavingBySaleId = await voluntarySavingRepository.handleGetAllVoluntarySavingByUserId({ userId });

            return {
                status: true,
                status_code: 200,
                message: "Success get voluntary saving (:",
                data: {
                    handleGetedVoluntarySavingBySaleId: handleGetedVoluntarySavingBySaleId,
                },
            };

        } catch (err) {

            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    handleGetedVoluntarySavingBySaleId: null,
                },
            };

        }

    };

    /* ------------------- End Handle Get Voluntary Saving By UserId ------------------- */

};

module.exports = VoluntarySavingService;