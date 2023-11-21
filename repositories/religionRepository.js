const { Religions } = require("../models");

class ReligionRepository {

    /* ------------------- Handle Get Religion Data By Name ------------------- */

    static async handleGetReligionByReligionName({ religionName }) {
    
        const handleGetReligion = await Religions.findOne({
            where: { religionName }
        });

        return handleGetReligion;
        
    };
    
    /* ------------------- Handle Get Religion Data By Name ------------------- */


    /* ------------------- Handle Create Religion Data ------------------- */

    static async handleCreateReligionData({ religionName }) {

        const handleCreatedReligionData = Religions.create({ religionName });

        return handleCreatedReligionData;

    };

    /* ------------------- End Handle Create Religion Data ------------------- */


    /* ------------------- Handle Get All Religion Data ------------------- */

    static async handleGetAllReligionData() {
    
        const handleGetedAllReligion = await Religions.findAll();

        return handleGetedAllReligion;
        
    };

    /* ------------------- End Handle Get All Religion Data ------------------- */

};

module.exports = ReligionRepository;