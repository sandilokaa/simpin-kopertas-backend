const userService = require("../services/userService");

/* ------------------- Handle Update Complete Profile ------------------- */

const handleUpdateCompleteProfile = async (req, res) => {

    const { id } = req.params;

    const userId = req.user.id;

    const { 
        name, 
        email, 
        password, 
        memberNumber, 
        phoneNumber, 
        registrationDate, 
        genderId, 
        religionId, 
        placeOfBirth, 
        address, 
        job 
    } = req.body;

    let picture = "";

    if (req.file) {
        picture = req.file.path;
    }

    const { status, status_code, message, data} = await userService.handleUpdateCompleteProfile({
        id,
        name, 
        email, 
        password, 
        memberNumber, 
        phoneNumber, 
        registrationDate,
        userId,
        genderId, 
        religionId, 
        placeOfBirth, 
        address, 
        job, 
        picture
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Update Complete Profile ------------------- */


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


/* ------------------- Handle Get Complete Profile By Id ------------------- */

const handleGetCompleteProfileById = async (req, res) => {

    const { id } = req.params;

    const { status, status_code, message, data } = await userService.handleGetCompleteProfileById({
        id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};

/* ------------------- End Handle Get Complete Profile Id ------------------- */


module.exports = { 
    handleUpdateCompleteProfile, 
    handleGetCompleteProfile ,
    handleGetCompleteProfileById
};