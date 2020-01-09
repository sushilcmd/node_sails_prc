const saveEmployee = async function(empMeta) {
    try {
        return await Employee.create(empMeta);
    } catch (error) {
        throw new Error(error);
    }
}

const empWithDpt = async function() {
    try {
        return await Employee.find().populate('Department');
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { saveEmployee, empWithDpt };