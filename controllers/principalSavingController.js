const principalSavingService = require("../services/principalSavingService");

/* ------------------- Handle Create Principal Saving ------------------- */

const handleCreatePrincipalSaving = async(req, res) => {

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await principalSavingService.handleCreatePrincipalSaving({
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

/* ------------------- End Handle Create Principal Saving ------------------- */


/* ------------------- Handle Get All Principal Saving ------------------- */

const handleGetAllPrincipalSaving = async(req, res) => {

    const { depositeDate, name } = req.query;

    const { status, status_code, message, data} = await principalSavingService.handleGetAllPrincipalSaving({
        depositeDate,
        name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Principal Saving ------------------- */


/* ------------------- Handle Get Principal Saving By Id ------------------- */

const handleGetPrincipalSavingById = async(req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await principalSavingService.handleGetPrincipalSavingById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Principal Saving By Id ------------------- */


/* ------------------- Handle Delete Principal Saving By Id ------------------- */

const handleDeletePrincipalSavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { status, status_code, message, data} = await principalSavingService.handleDeletePrincipalSavingById({ id, userId });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Delete Principal Saving By Id ------------------- */


/* ------------------- Handle Update Principal Saving By Id ------------------- */

const handleUpdatePrincipalSavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await principalSavingService.handleUpdatePrincipalSavingById({ 
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

/* ------------------- End Handle Update Principal Saving By Id ------------------- */


module.exports = {
    handleCreatePrincipalSaving,
    handleGetAllPrincipalSaving,
    handleGetPrincipalSavingById,
    handleDeletePrincipalSavingById,
    handleUpdatePrincipalSavingById
};