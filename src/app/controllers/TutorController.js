const Tutor = require('../models/Tutor');

module.exports = {
    async store(req, res) {
        const { name, email, telephone } = req.body;
   
        const tutor = await Tutor.findOrCreate({
            where: { email },
            defaults: {
                name,
                email,
                telephone
            }
        });

        return res.json(tutor);
    }
}
