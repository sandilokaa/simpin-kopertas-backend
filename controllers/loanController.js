const loanService = require("../services/loanService");


/* ------------------- Handle Create Loan ------------------- */

const handleCreateLoan = async (req, res) => {

    const userId = req.user.id;

    const { typeId, name, loanDate, nominal, installmentAmount } = req.body;

    const { status, status_code, message, data} = await loanService.handleCreateLoan({
        userId,
        typeId,
        name,
        loanDate,
        nominal,
        installmentAmount
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- Handle Create Loan ------------------- */


/* ------------------- Handle Get All Loan ------------------- */

const handleGetAllLoan = async (req, res) => {

    const { status, status_code, message, data} = await loanService.handleGetAllLoan();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get All Loan ------------------- */


/* ------------------- Handle Get Loan By Id ------------------- */

const handleGetLoanById = async (req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data} = await loanService.handleGetLoanById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Loan By Id ------------------- */


/* ------------------- Handle Get Loan By Id ------------------- */

const handleGetLoanByUserId = async (req, res) => {

    const { userId } = req.params;

    const { loanDate } = req.query;

    const { status, status_code, message, data} = await loanService.handleGetLoanByUserId({ userId, loanDate });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Loan By Id ------------------- */


/* ------------------- Handle Update Loan By Id ------------------- */

const handleUpdateLoanById = async (req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { typeId, name, loanDate, nominal, installmentAmount } = req.body;

    const { status, status_code, message, data} = await loanService.handleUpdateLoanById({ 
        id,
        userId,
        typeId,
        name,
        loanDate,
        nominal,
        installmentAmount
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Update Loan By Id ------------------- */


/* ------------------- Handle Delete Loan By Id ------------------- */

const handleDeleteLoanById = async (req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { status, status_code, message, data} = await loanService.handleDeleteLoanById({ 
        id,
        userId,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Delete Loan By Id ------------------- */


module.exports = {
    handleCreateLoan,
    handleGetAllLoan,
    handleGetLoanById,
    handleGetLoanByUserId,
    handleUpdateLoanById,
    handleDeleteLoanById
};