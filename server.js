const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const fileUpload = require("./utils/fileUpload");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// ------------------------- Public File Access ------------------------- //

app.use("/storages", express.static(path.join(__dirname, "storages")));

// ------------------------- End Public File Access ------------------------- //


// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");
const religionController = require("./controllers/religionController");
const genderController = require("./controllers/genderController");
const userController = require("./controllers/userController");
const principalSavingController = require("./controllers/principalSavingController");
const mandatorySavingController = require("./controllers/mandatorySavingController");
const voluntarySavingController = require("./controllers/voluntarySavingController");
const loanTypeController = require("./controllers/loanTypeController");
const loanController = require("./controllers/loanController");

// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //

const middleware = require("./middlewares/auth");

// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //


/* -------------- Auth Endpoint -------------- */

app.post('/api/v1/auth/register', authController.handleUserRegister);
app.post('/api/v1/auth/login', authController.handleUserLogin);
app.get('/api/v1/auth/me', middleware.authenticate, authController.handleCurrentUser);

/* -------------- End Auth Endpoint -------------- */


/* -------------- Religion Endpoint -------------- */

app.post('/api/v1/religion', religionController.handleCreateReligionData);
app.get('/api/v1/religion', religionController.handleGetAllReligionData);

/* -------------- End Religion Endpoint -------------- */


/* -------------- Gender Endpoint -------------- */

app.post('/api/v1/gender', genderController.handleCreateGenderData);
app.get('/api/v1/gender', genderController.handleGetAllGenderData);

/* -------------- End Gender Endpoint -------------- */


/* -------------- Loan Type Endpoint -------------- */

app.post('/api/v1/loan-type', loanTypeController.handleCreateLoanTypeData);
app.get('/api/v1/loan-type', loanTypeController.handleGetAllLoanTypeData);

/* -------------- End Loan Type Endpoint -------------- */


/* -------------- User Endpoint -------------- */

app.put('/api/v1/complete-profile/:id', middleware.authenticate, fileUpload.single('picture'), userController.handleUpdateCompleteProfile);
app.get('/api/v1/complete-profile', middleware.authenticate, userController.handleGetCompleteProfile);
app.get('/api/v1/complete-profile/:id', middleware.authenticate, userController.handleGetCompleteProfileById);

/* -------------- End User Endpoint -------------- */


/* -------------- Principal Saving Endpoint -------------- */

app.post('/api/v1/principal-saving', middleware.authenticate, principalSavingController.handleCreatePrincipalSaving);
app.get('/api/v1/principal-saving', middleware.authenticate, principalSavingController.handleGetAllPrincipalSaving);
app.get('/api/v1/:userId/principal-saving', middleware.authenticate, principalSavingController.handleGetAllPrincipalSavingByUserId);
app.get('/api/v1/principal-saving/:id', middleware.authenticate, principalSavingController.handleGetPrincipalSavingById);
app.delete('/api/v1/principal-saving/:id', middleware.authenticate, principalSavingController.handleDeletePrincipalSavingById);
app.put('/api/v1/principal-saving/:id', middleware.authenticate, principalSavingController.handleUpdatePrincipalSavingById);

/* -------------- End Principal Saving Endpoint -------------- */


/* -------------- Mandatory Saving Endpoint -------------- */

app.post('/api/v1/mandatory-saving', middleware.authenticate, mandatorySavingController.handleCreateMandatorySaving);
app.get('/api/v1/mandatory-saving', middleware.authenticate, mandatorySavingController.handleGetAllMandatorySaving);
app.get('/api/v1/mandatory-saving/:id', middleware.authenticate, mandatorySavingController.handleGetMandatorySavingById);
app.get('/api/v1/:userId/mandatory-saving', middleware.authenticate, mandatorySavingController.handleGetAllMandatorySavingByUserId);
app.delete('/api/v1/mandatory-saving/:id', middleware.authenticate, mandatorySavingController.handleDeleteMandatorySavingById);
app.put('/api/v1/mandatory-saving/:id', middleware.authenticate, mandatorySavingController.handleUpdateMandatorySavingById);

/* -------------- End Mandatory Saving Endpoint -------------- */


/* -------------- Voluntary Saving Endpoint -------------- */

app.post('/api/v1/voluntary-saving', middleware.authenticate, voluntarySavingController.handleCreateVoluntarySaving);
app.get('/api/v1/voluntary-saving', middleware.authenticate, voluntarySavingController.handleGetAllVoluntarySaving);
app.get('/api/v1/voluntary-saving/:id', middleware.authenticate, voluntarySavingController.handleGetVoluntarySavingById);
app.get('/api/v1/:userId/voluntary-saving', middleware.authenticate, voluntarySavingController.handleGetAllVoluntarySavingByUserId);
app.delete('/api/v1/voluntary-saving/:id', middleware.authenticate, voluntarySavingController.handleDeleteVoluntarySavingById);
app.put('/api/v1/voluntary-saving/:id', middleware.authenticate, voluntarySavingController.handleUpdateVoluntarySavingById);

/* -------------- End Voluntary Saving Endpoint -------------- */


/* -------------- Loan Endpoint -------------- */

app.post('/api/v1/loan', middleware.authenticate, loanController.handleCreateLoan);
app.get('/api/v1/loan', middleware.authenticate, loanController.handleGetAllLoan);
app.get('/api/v1/loan/:id', middleware.authenticate, loanController.handleGetLoanById);
app.get('/api/v1/:userId/loan', middleware.authenticate, loanController.handleGetLoanByUserId);
app.put('/api/v1/loan/:id', middleware.authenticate, loanController.handleUpdateLoanById);
app.delete('/api/v1/loan/:id', middleware.authenticate, loanController.handleDeleteLoanById);

/* -------------- End Loan Endpoint -------------- */


// ------------------------- End Define Routes ------------------------- //


// ------------------------- Server Listen ------------------------- //

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT http://localhost:${PORT}`);
});

// ------------------------- End Server Listen ------------------------- //

module.exports = app;