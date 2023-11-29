const { Loans, LoanTypes, Users } = require("../models");
const { Op, Sequelize, literal } = require("sequelize");

class LoanRepository{

    /* ------------------- Handle Create Loan ------------------- */

    static async handleCreateLoan({
        userId,
        typeId,
        name,
        loanDate,
        nominal,
        installmentAmount
    }) {

        const handleCreatedLoan = await Loans.create({
            userId,
            typeId,
            name,
            loanDate,
            nominal,
            installmentAmount
        });

        return handleCreatedLoan;
    
    };

    /* ------------------- End Handle Create Loan ------------------- */


    /* ------------------- Handle Get All Loan ------------------- */

    static async handleGetAllLoan() {

        const query = {
            where: {},
            attributes: [
                'id',
                'userId',
                'typeId',
                'name',
                'loanDate',
                'nominal',
                'installmentAmount'
            ],
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                },
                {
                    model: LoanTypes,
                }
            ]
        };
    
        const handleGetedAllLoan = await Loans.findAll(query);

        return handleGetedAllLoan;
        
    };

    /* ------------------- End Handle Get All Loan ------------------- */


    /* ------------------- Handle Get Loan By Id ------------------- */

    static async handleGetLoanById({ id }) {

        const query = {
            where: { id },
            attributes: [
                'id',
                'userId',
                'typeId',
                'name',
                'loanDate',
                'nominal',
                'installmentAmount'
            ],
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                },
                {
                    model: LoanTypes,
                }
            ]
        };
    
        const handleGetedAllLoan = await Loans.findOne(query);

        return handleGetedAllLoan;
        
    };

    /* ------------------- End Handle Get Loan By Id ------------------- */


    /* ------------------- Handle Get Loan By User Id ------------------- */

    static async handleGetLoanByUserId({ userId, loanDate }) {

        const query = {
            where: { userId },
            attributes: [
                'id',
                'userId',
                'typeId',
                'name',
                'loanDate',
                'nominal',
                'installmentAmount'
            ],
            include: [
                {
                    model: Users,
                    attributes: ['email', 'memberNumber', 'phoneNumber']
                },
                {
                    model: LoanTypes,
                }
            ]
        };

        if (loanDate) {
            const searchMandatorySaving = await Loans.findAll({
                where: {
                    userId,
                    [Op.or]: [
                        { loanDate: { [Op.like]: '%' + loanDate + '%' } },
                    ]
                },
                include: [
                    {
                        model: Users,
                        attributes: ['email', 'memberNumber', 'phoneNumber']
                    },
                    {
                        model: LoanTypes,
                    }
                ],
                limit: 10
            });

            return searchMandatorySaving;
        }
    
        const handleGetedAllLoan = await Loans.findAll(query);

        return handleGetedAllLoan;
        
    };

    /* ------------------- End Handle Get Loan By User Id ------------------- */


    /* ------------------- Handle Update Loan By Id ------------------- */

    static async handleUpdateLoanById({ id, name, loanDate, nominal, installmentAmount, typeId }) {

        const handleUpdatedLoanById = await Loans.update({
            name,
            typeId,
            loanDate,
            installmentAmount,
            nominal
        }, {
            where: { id }
        });

        return handleUpdatedLoanById;

    };

    /* ------------------- End Handle Update Loan By Id ------------------- */


    /* ------------------- Handle Delete Loan By Id ------------------- */

    static async handleDeleteLoanById({ id }) {

        const handleDeletedLoanById = await Loans.destroy({ where: { id } });

        return handleDeletedLoanById;

    };

    /* ------------------- End Handle Delete Loan By Id ------------------- */

};

module.exports = LoanRepository;