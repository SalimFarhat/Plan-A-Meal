const jwt = require('jsonwebtoken');
const User = require('./UserModel');

const authUser = async (req, res, next) => {
    try {
        const userToken = req.header('Authorization').replace('Bearer ', "");
        const decodedToken = jwt.verify(userToken, 'mealsSecret')
        const user = await User.findOne({_id: decodedToken._id});
        if(!user){
            return res.status(404).json("Please authenticate");
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).send();
        console.log(error);
    } finally {

    }
}

module.exports = authUser;