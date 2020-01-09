const { saveUser, getUser } = require('../service/UserService');

const newRegister = async function(req, res) {
    try {
        const { body } = req;
        await saveUser(body)
        res.json({
            msg: 'User register successfully',
            status: true,
            data: body
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false,
            data: {}
        })
    }
}

const allUsers = async function(req, res) {
    try {
        const { email } = req["params"]
        const user = await getUser({ userEmailId: email });
        console.log(user);
        res.json({
            msg: 'User details',
            status: true,
            data: user
        })
    } catch (error) {
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false,
            data: {}
        })
    }
}

module.exports = {
    newRegister,
    allUsers
};