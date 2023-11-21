const genderService = require("../services/genderService");

/* ------------------- Handle Create Gender Data ------------------- */

const handleCreateGenderData = async (req, res) => {

    const { gender } = req.body;

    const { status, status_code, message, data} = await genderService.handleCreateGenderData({
        gender
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Create Gender Data ------------------- */


/* ------------------- Handle Get All Gender Data ------------------- */

const handleGetAllGenderData = async (req, res) => {

    const { status, status_code, message, data} = await genderService.handleGetAllGenderData();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Get All Gender Data ------------------- */

module.exports = { handleCreateGenderData, handleGetAllGenderData };