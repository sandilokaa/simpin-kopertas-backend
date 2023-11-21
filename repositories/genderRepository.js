const { Genders } = require("../models");

class GenderRepository {

    /* ------------------- Handle Get Gender Data By Name ------------------- */

    static async handleGetGenderByGender({ gender }) {
    
        const handleGetGender = await Genders.findOne({
            where: { gender }
        });

        return handleGetGender;
        
    };
    
    /* ------------------- Handle Get Gender Data By Name ------------------- */


    /* ------------------- Handle Create Gender Data ------------------- */

    static async handleCreateGenderData({ gender }) {

        const handleCreatedGenderData = Genders.create({ gender });

        return handleCreatedGenderData;

    };

    /* ------------------- End Handle Create Gender Data ------------------- */


    /* ------------------- Handle Get All Gender Data ------------------- */

    static async handleGetAllGenderData() {
    
        const handleGetedAllGender = await Genders.findAll();

        return handleGetedAllGender;
        
    };

    /* ------------------- End Handle Get All Gender Data ------------------- */

};

module.exports = GenderRepository;