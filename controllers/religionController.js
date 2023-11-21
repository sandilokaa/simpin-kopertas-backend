const religionService = require("../services/religionService");

/* ------------------- Handle Create Religion Data ------------------- */

const handleCreateReligionData = async (req, res) => {

    const { religionName } = req.body;

    const { status, status_code, message, data} = await religionService.handleCreateReligionData({
        religionName
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Create Religion Data ------------------- */


/* ------------------- Handle Get All Religion Data ------------------- */

const handleGetAllReligionData = async (req, res) => {

    const { status, status_code, message, data} = await religionService.handleGetAllReligionData();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Get All Religion Data ------------------- */

module.exports = { handleCreateReligionData, handleGetAllReligionData };