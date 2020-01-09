/**
 * EmployeeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { saveEmployee, empWithDpt } = require('../service/EmployeeService');

const newEmployee = async function(req, res) {
    try {
        const { body } = req;
        await saveEmployee(body);
        res.json({
            msg: 'New employee added',
            status: true,
            data: body
        });
    } catch (error) {
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false
        });
    }
}

const getEmp = async function(req, res) {
    try {
        const emp = await empWithDpt();
        res.json({
            msg: 'Employee details',
            status: true,
            data: emp
        });
    } catch (error) {
        res.json({
            msg: 'Something happen wrong. Please try again',
            status: false
        });
    }
}

module.exports = {
    newEmployee,
    getEmp
};