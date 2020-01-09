const saveDepartment = async function(dptMeta) {
    try {
        return await Department.create(dptMeta);
    } catch (error) {
        throw new Error(error);
    }
}

const getDepartment = async function(dptMeta) {
    try {
        const { dptNo } = dptMeta;
        if (!dptNo) {
            return await Department.find();
        }
        return await Department.findOne({ dptNo });
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { saveDepartment, getDepartment };