const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        
        const user = await User.create({ name, email, password });

        return res.json(user);
    }
}