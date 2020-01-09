/**
 * DepartmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { saveDepartment, getDepartment } = require('../service/DepartmentService');

const createDepartment = async function(req, res) {
    try {
        const { body } = req;
        const department = await saveDepartment(body);
        res.json({
            msg: 'New department added',
            status: true,
            data: department
        });
    } catch (error) {
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false
        });
    }
}

module.exports = {
    createDepartment
};