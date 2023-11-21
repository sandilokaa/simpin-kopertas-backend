const userService = require("../services/userService");

/* ------------------- Handle Create Complete Profile ------------------- */

// const handleCreateCompleteProfile = async (req, res) => {

//     const userId = req.user.id;

//     const { genderId, religionId, placeOfBirth, address, job } = req.body;

//     let picture = "";

//     if (req.file) {
//         picture = req.file.path;
//     }

//     const { status, status_code, message, data} = await userService.handleCreateCompleteProfile({
//         userId,
//         genderId, 
//         religionId, 
//         placeOfBirth, 
//         address, 
//         job, 
//         picture
//     });

//     res.status(status_code).send({
//         status: status,
//         message: message,
//         data: data,
//     });

// };

/* ------------------- End Handle Create Complete Profile ------------------- */


/* ------------------- Handle Get Complete Profile ------------------- */

const handleGetCompleteProfile = async (req, res) => {

    const { status, status_code, message, data } = await userService.handleGetCompleteProfile();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Complete Profile ------------------- */


module.exports = { 
    // handleCreateCompleteProfile, 
    handleGetCompleteProfile };