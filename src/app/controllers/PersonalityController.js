const Personality = require('../models/Personality');

module.exports = {
    async store(req, res) {
        const { name } = req.body;
        console.log(name);
        
        const [ personality, created ]  = await Personality.findOrCreate({
            where: { name }
        });

        return res.json(personality);
    }
}