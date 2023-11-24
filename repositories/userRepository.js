const { Users, UserDetails, Religions, Genders } = require("../models");
const { Op } = require("sequelize");

class UserRepository {

    /* ------------------- Handle Create Complete Profile ------------------- */

    static async handleCreateCompleteProfile({ userId }) {

        const handleCreatedCompleteProfile = await UserDetails.create({ userId });

        return handleCreatedCompleteProfile;

    };

    /* ------------------- End Handle Create Complete Profile ------------------- */


    /* ------------------- Handle Get Complete Profile ------------------- */

    static async handleGetCompleteProfile(){

        const query = {
            where: {},
            attributes: [
                'id',
                'userId',
                'genderId',
                'religionId',
                'placeOfBirth',
                'address',
                'job',
                'picture'
            ],
            include: [
                {
                    model: Users
                },
                {
                    model: Religions,
                    attributes: [
                        'religionName'
                    ]
                },
                {
                    model: Genders,
                    attributes: [
                        'gender'
                    ]
                }
            ]
        };

        const handleGetedCompleteProfile = await UserDetails.findOne(query);

        return handleGetedCompleteProfile;
        
    };

    /* ------------------- End Handle Get Complete Profile ------------------- */


    /* ------------------- Handle Get User By Id ------------------- */

    static async handleGetUserById({ id }) {

        const handleGetedUserById = await Users.findOne({
            where: { id }
        });

        return handleGetedUserById;

    };

    /* ------------------- End Handle Get User By Id ------------------- */


    /* ------------------- Handle Get Complete Profile By UserId ------------------- */

    static async handleGetCompleteProfileByUserId({ userId }) {

        const handleGetedCompleteProfileByUserId = await UserDetails.findOne({
            where: { userId }
        });

        return handleGetedCompleteProfileByUserId;

    };

    /* ------------------- Handle Get Complete Profile By UserId ------------------- */


    /* ------------------- Handle Update User By Id ------------------- */

    static async handleUpdateUserById({
        id,
        name, 
        email, 
        password, 
        memberNumber, 
        phoneNumber, 
        registrationDate,
    }) {

        const handleUpdatedUserById = await Users.update({
            name, 
            email, 
            password, 
            memberNumber, 
            phoneNumber, 
            registrationDate,
        },
            { 
                where: { id } 
            }
        );

        return handleUpdatedUserById;

    };

    /* ------------------- End Handle Update User By Id ------------------- */


    /* ------------------- Handle Update Complete Profile By UserId ------------------- */

    static async handleUpdateCompleteProfileByUserId({
        userId,
        genderId, 
        religionId, 
        placeOfBirth, 
        address, 
        job, 
        picture
    }) {

        const handleUpdatedCompleteProfileByUserId = await UserDetails.update({
            genderId, 
            religionId, 
            placeOfBirth, 
            address, 
            job, 
            picture
        },
            { 
                where: { userId } 
            }
        );

        return handleUpdatedCompleteProfileByUserId;

    };

    /* ------------------- End Handle Update Complete Profile By UserId ------------------- */


    /* ------------------- Handle Get Complete Profile By Id ------------------- */

    static async handleGetCompleteProfileById({ id }){

        const query = {
            where: {},
            attributes: [
                'id',
                'userId',
                'genderId',
                'religionId',
                'placeOfBirth',
                'address',
                'job',
                'picture'
            ],
            include: [
                {
                    model: Users
                },
                {
                    model: Religions,
                    attributes: [
                        'religionName'
                    ]
                },
                {
                    model: Genders,
                    attributes: [
                        'gender'
                    ]
                }
            ]
        };

        if (id) {
            query.where = { ...query.where, userId: id }
        }

        const handleGetedCompleteProfileById = UserDetails.findOne(query);

        return handleGetedCompleteProfileById;

    };

    /* ------------------- End Handle Get Complete Profile By Id ------------------- */

};

module.exports = UserRepository;