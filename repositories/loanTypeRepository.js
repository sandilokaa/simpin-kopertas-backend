const { LoanTypes } = require("../models");

class LoanTypeRepository {

    /* ------------------- Handle Get LoanType Data By Name ------------------- */

    static async handleGetLoanTypeByType({ type }) {
    
        const handleGetLoanType = await LoanTypes.findOne({
            where: { type }
        });

        return handleGetLoanType;
        
    };
    
    /* ------------------- Handle Get Loan Type Data By Name ------------------- */


    /* ------------------- Handle Create Loan Type Data ------------------- */

    static async handleCreateLoanTypeData({ type }) {

        const handleCreatedLoanTypeData = LoanTypes.create({ type });

        return handleCreatedLoanTypeData;

    };

    /* ------------------- End Handle Create LoanType Data ------------------- */


    /* ------------------- Handle Get All Loan Type Data ------------------- */

    static async handleGetAllLoanTypeData() {
    
        const handleGetedAllLoanType = await LoanTypes.findAll();

        return handleGetedAllLoanType;
        
    };

    /* ------------------- End Handle Get All Loan Type Data ------------------- */

};

module.exports = LoanTypeRepository;