const mandatorySavingService = require("../services/mandatorySavingService");

/* ------------------- Handle Create Mandatory Saving ------------------- */

const handleCreateMandatorySaving = async(req, res) => {

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await mandatorySavingService.handleCreateMandatorySaving({
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

/* ------------------- End Handle Create Mandatory Saving ------------------- */


/* ------------------- Handle Get All Mandatory Saving ------------------- */

const handleGetAllMandatorySaving = async(req, res) => {

    const { depositeDate, name } = req.query;

    const { status, status_code, message, data} = await mandatorySavingService.handleGetAllMandatorySaving({
        depositeDate,
        name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Mandatory Saving ------------------- */


/* ------------------- Handle Get Mandatory Saving By Id ------------------- */

const handleGetMandatorySavingById = async(req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await mandatorySavingService.handleGetMandatorySavingById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Mandatory Saving By Id ------------------- */


/* ------------------- Handle Delete Mandatory Saving By Id ------------------- */

const handleDeleteMandatorySavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { status, status_code, message, data} = await mandatorySavingService.handleDeleteMandatorySavingById({ id, userId });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Delete Mandatory Saving By Id ------------------- */


/* ------------------- Handle Update Mandatory Saving By Id ------------------- */

const handleUpdateMandatorySavingById = async(req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { name, depositeDate, nominal } = req.body;

    const { status, status_code, message, data} = await mandatorySavingService.handleUpdateMandatorySavingById({ 
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

/* ------------------- End Handle Update Mandatory Saving By Id ------------------- */


/* ------------------- Handle Get Mandatory Saving By UserId ------------------- */

const handleGetAllMandatorySavingByUserId = async(req, res) => {

    const { userId } = req.params;

    const { depositeDate } = req.query;

    const { status, status_code, message, data} = await mandatorySavingService.handleGetAllMandatorySavingByUserId({ userId, depositeDate });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Mandatory Saving By UserId ------------------- */


module.exports = {
    handleCreateMandatorySaving,
    handleGetAllMandatorySaving,
    handleGetMandatorySavingById,
    handleDeleteMandatorySavingById,
    handleUpdateMandatorySavingById,
    handleGetAllMandatorySavingByUserId
};