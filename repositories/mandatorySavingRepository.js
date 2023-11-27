const { MandatorySavings, Users } = require("../models");
const { Op, Sequelize, literal } = require("sequelize");

class MandatorySavingRepository {

    /* ------------------- Handle Create Mandatory Saving ------------------- */

    static async handleCreateMandatorySaving({ userId, name, depositeDate, nominal }){

        const handleCreatedMandatorySaving = await MandatorySavings.create({ userId, name, depositeDate, nominal });

        return handleCreatedMandatorySaving;

    };

    /* ------------------- End Handle Create Mandatory Saving ------------------- */


    /* ------------------- Handle Get One Mandatory Saving ------------------- */

    static async handleGetMandatorySavingByUserId({ userId }) {
        
        const handleGetedMandatorySaving = MandatorySavings.findOne({
            where: { userId }
        });

        return handleGetedMandatorySaving;

    }

    /* ------------------- Handle Get One Mandatory Saving ------------------- */


    /* ------------------- Handle Get All Mandatory Saving ------------------- */

    static async handleGetAllMandatorySaving({ depositeDate, name }){

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
            const searchMandatorySavingByName = await MandatorySavings.findAll({
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

            return searchMandatorySavingByName;
        }

        const handleGetedAllMandatorySaving = MandatorySavings.findAll(query);

        return handleGetedAllMandatorySaving;

    };

    /* ------------------- End Handle Get All Mandatory Saving ------------------- */


    /* ------------------- Handle Get Mandatory Saving By Id ------------------- */

    static async handleGetMandatorySavingById({ id }){

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

        const handleGetedMandatorySavingById = await MandatorySavings.findOne(query);

        return handleGetedMandatorySavingById;

    };

    /* ------------------- End Handle Get Mandatory Saving By Id ------------------- */


    /* ------------------- Handle Delete Mandatory Saving By Id ------------------- */

    static async handleDeleteMandatorySavingById({ id }) {

        const handleDeletedMandatorySavingById = await MandatorySavings.destroy({ where: { id } });

        return handleDeletedMandatorySavingById;

    };

    /* ------------------- End Handle Delete Mandatory Saving By Id ------------------- */


    /* ------------------- Handle Update Mandatory Saving By Id ------------------- */

    static async handleUpdateMandatorySavingById({ id, name, depositeDate, nominal }) {

        const handleUpdatedMandatorySavingById = await MandatorySavings.update({
            name,
            depositeDate,
            nominal
        }, {
            where: { id }
        });

        return handleUpdatedMandatorySavingById;

    };

    /* ------------------- End Handle Update Mandatory Saving By Id ------------------- */


     /* ------------------- Handle Get Mandatory Saving By UserId ------------------- */

    static async handleGetAllMandatorySavingByUserId({ userId }) {

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

        const handleGetedMandatorySavingBySaleId = await MandatorySavings.findAll(query);

        return handleGetedMandatorySavingBySaleId;

    };


    /* ------------------- End Handle Get Mandatory Saving By UserId ------------------- */

};

module.exports = MandatorySavingRepository;