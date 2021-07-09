const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        
        const user = await User.create({ name, email, password });

        return res.json(user);
    },

    async getById(req, res) {
        const { user_id } = req.params;
        
        const user = await User.findByPk(user_id, {
            include: { association: 'addresses' }
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        return res.json({ user });
    }
}