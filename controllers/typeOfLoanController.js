const typeOfLoanService = require("../services/typeOfLoanService");

/* ------------------- Handle Create Type Of Loan Data ------------------- */

const handleCreateTypeOfLoanData = async (req, res) => {

    const { type } = req.body;

    const { status, status_code, message, data} = await typeOfLoanService.handleCreateTypeOfLoanData({
        type
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Create Type Of Loan Data ------------------- */


/* ------------------- Handle Get All Type Of Loan Data ------------------- */

const handleGetAllTypeOfLoanData = async (req, res) => {

    const { status, status_code, message, data} = await typeOfLoanService.handleGetAllTypeOfLoanData();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Get All Type Of Loan Data ------------------- */

module.exports = { handleCreateTypeOfLoanData, handleGetAllTypeOfLoanData };