const typeOfVoluntaryService = require("../services/typeOfVoluntaryService");

/* ------------------- Handle Create Type Of Voluntary Data ------------------- */

const handleCreateTypeOfVoluntaryData = async (req, res) => {

    const { type } = req.body;

    const { status, status_code, message, data} = await typeOfVoluntaryService.handleCreateTypeOfVoluntaryData({
        type
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Create Type Of Voluntary Data ------------------- */


/* ------------------- Handle Get All Type Of Voluntary Data ------------------- */

const handleGetAllTypeOfVoluntaryData = async (req, res) => {

    const { status, status_code, message, data} = await typeOfVoluntaryService.handleGetAllTypeOfVoluntaryData();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Get All Type Of Voluntary Data ------------------- */

module.exports = { handleCreateTypeOfVoluntaryData, handleGetAllTypeOfVoluntaryData };