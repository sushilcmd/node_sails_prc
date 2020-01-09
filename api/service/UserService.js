const saveUser = async function(userMeta) {
    try {
        return await User.create(userMeta);
    } catch (error) {
        throw new Error(error.message);
    }
}

const getUser = async function(userMeta) {
    try {
        const { userEmailId } = userMeta;
        if (!userEmailId) {
            return await User.find();
        }
        return await User.findOne({ userEmailId });

    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { saveUser, getUser };