const voluntarySavingService = require("../services/voluntarySavingService");

/* ------------------- Handle Create Voluntary Saving ------------------- */

const handleCreateVoluntarySaving = async(req, res) => {

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await voluntarySavingService.handleCreateVoluntarySaving({
        userId,
        name,
        depositeDate,
        nominal
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Create Voluntary Saving ------------------- */


/* ------------------- Handle Get All Voluntary Saving ------------------- */

const handleGetAllVoluntarySaving = async(req, res) => {

    const { depositeDate, name } = req.query;

    const { status, status_code, message, data} = await voluntarySavingService.handleGetAllVoluntarySaving({
        depositeDate,
        name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Voluntary Saving ------------------- */


/* ------------------- Handle Get Voluntary Saving By Id ------------------- */

const handleGetVoluntarySavingById = async(req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await voluntarySavingService.handleGetVoluntarySavingById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Voluntary Saving By Id ------------------- */


/* ------------------- Handle Delete Voluntary Saving By Id ------------------- */

const handleDeleteVoluntarySavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { status, status_code, message, data} = await voluntarySavingService.handleDeleteVoluntarySavingById({ id, userId });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Delete Voluntary Saving By Id ------------------- */


/* ------------------- Handle Update Voluntary Saving By Id ------------------- */

const handleUpdateVoluntarySavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await voluntarySavingService.handleUpdateVoluntarySavingById({ 
        id, 
        userId,
        name,
        depositeDate,
        nominal
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Update Voluntary Saving By Id ------------------- */


/* ------------------- Handle Get Voluntary Saving By UserId ------------------- */

const handleGetAllVoluntarySavingByUserId = async(req, res) => {

    const { userId } = req.params;

    const { status, status_code, message, data} = await voluntarySavingService.handleGetAllVoluntarySavingByUserId({ userId });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Voluntary Saving By UserId ------------------- */


module.exports = {
    handleCreateVoluntarySaving,
    handleGetAllVoluntarySaving,
    handleGetVoluntarySavingById,
    handleDeleteVoluntarySavingById,
    handleUpdateVoluntarySavingById,
    handleGetAllVoluntarySavingByUserId
};