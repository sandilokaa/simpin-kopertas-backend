const { PrincipalSavings, Users } = require("../models");
const { Op } = require("sequelize");

class PrincipalSavingRepository {

    /* ------------------- Handle Create Principal Saving ------------------- */

    static async handleCreatePrincipalSaving({ userId, depositeDate, nominal }){

        const handleCreatedPrincipalSaving = await PrincipalSavings.create({ userId, depositeDate, nominal });

        return handleCreatedPrincipalSaving;

    };

    /* ------------------- End Handle Create Principal Saving ------------------- */


    /* ------------------- Handle Get All Principal Saving ------------------- */

    static async handleGetAllPrincipalSaving({ depositeDate, name }){

        const query = {
            where: {},
            include: [
                {
                    model: Users
                }
                
            ]
        };

        if (name) {
            const searchPrincipalSavingByName = await Users.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: '%' + name + '%' } },
                    ]
                },
                include: [
                    {
                        model: PrincipalSavings
                    }
                ],
                limit: 10
            });

            return searchPrincipalSavingByName;
        }

        const handleGetedAllPrincipalSaving = PrincipalSavings.findAll(query);

        return handleGetedAllPrincipalSaving;

    };

    /* ------------------- End Handle Get All Principal Saving ------------------- */


    /* ------------------- Handle Get Principal Saving By Id ------------------- */

    static async handleGetPrincipalSavingById({ id }){

        const query = {
            where: {},
            include: [
                {
                    model: Users
                }
            ]
        }

        if (id) {
            query.where = { ...query.where, id: id }
        }

        const handleGetedPrincipalSavingById = await PrincipalSavings.findOne(query);

        return handleGetedPrincipalSavingById;

    };

    /* ------------------- End Handle Get Principal Saving By Id ------------------- */


    /* ------------------- Handle Delete Principal Saving By Id ------------------- */

    static async handleDeletePrincipalSavingById({ id }) {

        const handleDeletedPrincipalSavingById = await PrincipalSavings.destroy({ where: { id } });

        return handleDeletedPrincipalSavingById;

    };

    /* ------------------- End Handle Delete Principal Saving By Id ------------------- */


    /* ------------------- Handle Update Principal Saving By Id ------------------- */

    static async handleUpdatePrincipalSavingById({ id, depositeDate, nominal }) {

        const handleUpdatedPrincipalSavingById = await PrincipalSavings.update({
            depositeDate,
            nominal
        }, {
            where: { id }
        });

        return handleUpdatedPrincipalSavingById;

    };

    /* ------------------- End Handle Update Principal Saving By Id ------------------- */

};

module.exports = PrincipalSavingRepository;