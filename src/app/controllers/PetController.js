const Pet = require('../models/Pet');
const User = require('../models/User');
const Personality = require('../models/Personality');

module.exports = {
    async store(req, res) {
        const { user_id, name, age, gender, description, personality_ids } = req.body;

        const user = await User.findByPk(user_id);
        const personalities = await Personality.findAll({ 
            where: {
                id: personality_ids,
            }
        });

        if (!user || !personalities) {
            return res.status(400).json({ error: 'User not found' });
        }
        
        const pet = await Pet.create({
            user_id,
            name,
            age,
            gender,
            description
        });

        await pet.addPersonality(personalities);

        return res.json(pet);
    },

    async getById(req, res) {
        const { pet_id } = req.params;
        
        const pet = await Pet.findByPk(pet_id, {
            include: [
                { association: 'user' },
                { association: 'photos' },
                { association: 'tutor' },
                { association: 'personalities' },
            ]
        });

        if (!pet) {
            return res.status(400).json({ error: 'Pet not found' });
        }

        return res.json({ pet });
    }
}