const loanTypeService = require("../services/loanTypeService");

/* ------------------- Handle Create Loan Type Data ------------------- */

const handleCreateLoanTypeData = async (req, res) => {

    const { type } = req.body;

    const { status, status_code, message, data} = await loanTypeService.handleCreateLoanTypeData({
        type
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Create Loan Type Data ------------------- */


/* ------------------- Handle Get All Loan Type Data ------------------- */

const handleGetAllLoanTypeData= async (req, res) => {

    const { status, status_code, message, data} = await loanTypeService.handleGetAllLoanTypeData();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Get All Loan Type Data ------------------- */

module.exports = { handleCreateLoanTypeData, handleGetAllLoanTypeData };