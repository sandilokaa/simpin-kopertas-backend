const { TypeOfVoluntaries } = require("../models");

class TypeOfVoluntaryRepository {

    /* ------------------- Handle Get Type Of Voluntary Data By Type ------------------- */

    static async handleGetTypeOfVoluntaryByType({ type }) {
    
        const handleGetTypeOfVoluntary = await TypeOfVoluntaries.findOne({
            where: { type }
        });

        return handleGetTypeOfVoluntary;
        
    };
    
    /* ------------------- End Handle Get Type Of Voluntary Data By Name ------------------- */


    /* ------------------- Handle Create Type Of Voluntary Data ------------------- */

    static async handleCreateTypeOfVoluntaryData({ type }) {

        const handleCreatedTypeOfVoluntaryData = TypeOfVoluntaries.create({ type });

        return handleCreatedTypeOfVoluntaryData;

    };

    /* ------------------- End Handle Create Type Of Voluntary Data ------------------- */


    /* ------------------- Handle Get All Type Of Voluntary Data ------------------- */

    static async handleGetAllTypeOfVoluntaryData() {
    
        const handleGetedAllTypeOfVoluntary = await TypeOfVoluntaries.findAll();

        return handleGetedAllTypeOfVoluntary;
        
    };

    /* ------------------- End Handle Get All Type Of Voluntary Data ------------------- */

};

module.exports = TypeOfVoluntaryRepository;