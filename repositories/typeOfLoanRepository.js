const { TypeOfLoans } = require("../models");

class TypeOfLoanRepository {

    /* ------------------- Handle Get Type Of Loan Data By Type ------------------- */

    static async handleGetTypeOfLoanByType({ type }) {
    
        const handleGetTypeOfLoan = await TypeOfLoans.findOne({
            where: { type }
        });

        return handleGetTypeOfLoan;
        
    };
    
    /* ------------------- End Handle Get Type Of Loan Data By Name ------------------- */


    /* ------------------- Handle Create Type Of Loan Data ------------------- */

    static async handleCreateTypeOfLoanData({ type }) {

        const handleCreatedTypeOfLoanData = TypeOfLoans.create({ type });

        return handleCreatedTypeOfLoanData;

    };

    /* ------------------- End Handle Create Type Of Loan Data ------------------- */


    /* ------------------- Handle Get All Type Of Loan Data ------------------- */

    static async handleGetAllTypeOfLoanData() {
    
        const handleGetedAllTypeOfLoan = await TypeOfLoans.findAll();

        return handleGetedAllTypeOfLoan;
        
    };

    /* ------------------- End Handle Get All Type Of Voluntary Data ------------------- */

};

module.exports = TypeOfLoanRepository;