const User = require('../models/User');
const Address = require('../models/Address');

module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { street, number, district, city, zipcode } = req.body;
        
        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        const address = await Address.create({
            street,
            number,
            district,
            city,
            zipcode,
            user_id
        });

        return res.json(address);
    }
}