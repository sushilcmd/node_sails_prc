const { getUser } = require('../service/UserService')

module.exports = async function(req, res, next) {
    try {
        const { userEmailId } = req["body"];
        const user = await getUser({ userEmailId })
        if (user) {
            res.json({
                msg: 'User already exist',
                status: false
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false
        });
    }
}