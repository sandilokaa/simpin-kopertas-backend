const { VoluntarySavings, Users } = require("../models");
const { Op, Sequelize, literal } = require("sequelize");

class VoluntarySavingRepository {

    /* ------------------- Handle Create Voluntary Saving ------------------- */

    static async handleCreateVoluntarySaving({ userId, name, depositeDate, nominal }){

        const handleCreatedVoluntarySaving = await VoluntarySavings.create({ userId, name, depositeDate, nominal });

        return handleCreatedVoluntarySaving;

    };

    /* ------------------- End Handle Create Voluntary Saving ------------------- */


    /* ------------------- Handle Get One Voluntary Saving ------------------- */

    static async handleGetVoluntarySavingByUserId({ userId }) {
        
        const handleGetedVoluntarySaving = VoluntarySavings.findOne({
            where: { userId }
        });

        return handleGetedVoluntarySaving;

    }

    /* ------------------- Handle Get One Voluntary Saving ------------------- */


    /* ------------------- Handle Get All Voluntary Saving ------------------- */

    static async handleGetAllVoluntarySaving({ depositeDate, name }){

        const query = {
            where: {},
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                }
                
            ]
        };

        if (name) {
            const searchVoluntarySavingByName = await VoluntarySavings.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: '%' + name + '%' } },
                    ]
                },
                include: [
                    {
                        model: Users,
                        attributes: ['email', 'memberNumber', 'phoneNumber']
                    }
                ],
                limit: 10
            });

            return searchVoluntarySavingByName;
        }

        const handleGetedAllVoluntarySaving = VoluntarySavings.findAll(query);

        return handleGetedAllVoluntarySaving;

    };

    /* ------------------- End Handle Get All Voluntary Saving ------------------- */


    /* ------------------- Handle Get Voluntary Saving By Id ------------------- */

    static async handleGetVoluntarySavingById({ id }){

        const query = {
            where: {},
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                }
            ]
        }

        if (id) {
            query.where = { ...query.where, id: id }
        }

        const handleGetedVoluntarySavingById = await VoluntarySavings.findOne(query);

        return handleGetedVoluntarySavingById;

    };

    /* ------------------- End Handle Get Voluntary Saving By Id ------------------- */


    /* ------------------- Handle Delete Voluntary Saving By Id ------------------- */

    static async handleDeleteVoluntarySavingById({ id }) {

        const handleDeletedVoluntarySavingById = await VoluntarySavings.destroy({ where: { id } });

        return handleDeletedVoluntarySavingById;

    };

    /* ------------------- End Handle Delete Voluntary Saving By Id ------------------- */


    /* ------------------- Handle Update Voluntary Saving By Id ------------------- */

    static async handleUpdateVoluntarySavingById({ id, name, depositeDate, nominal }) {

        const handleUpdatedVoluntarySavingById = await VoluntarySavings.update({
            name,
            depositeDate,
            nominal
        }, {
            where: { id }
        });

        return handleUpdatedVoluntarySavingById;

    };

    /* ------------------- End Handle Update Voluntary Saving By Id ------------------- */


     /* ------------------- Handle Get Voluntary Saving By UserId ------------------- */

    static async handleGetAllVoluntarySavingByUserId({ userId, depositeDate }) {

        const query = {
            where: { userId },
            attributes: [
                'id',
                'name',
                'depositeDate',
                'nominal'
            ],
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                }
            ]
        };

        if (depositeDate) {
            const searchVoluntarySaving = await VoluntarySavings.findAll({
                where: {
                    userId,
                    [Op.or]: [
                        { depositeDate: { [Op.like]: '%' + depositeDate + '%' } },
                    ]
                },
                include: [
                    {
                        model: Users,
                        attributes: ['email', 'memberNumber', 'phoneNumber']
                    }
                ],
                limit: 10
            });

            return searchVoluntarySaving;
        }

        const handleGetedVoluntarySavingByUserId = await VoluntarySavings.findAll(query);

        return handleGetedVoluntarySavingByUserId;

    };


    /* ------------------- End Handle Get Voluntary Saving By UserId ------------------- */

};

module.exports = VoluntarySavingRepository;