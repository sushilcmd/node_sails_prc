/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /**User Routes Start */

    'POST /user': { controller: 'UserController', action: 'newRegister' },

    'GET /user': { controller: 'UserController', action: 'allUsers' },

    'GET /user/:email': { controller: 'UserController', action: 'allUsers' },

    /**Department Routes Start */

    'POST /department': { controller: 'DepartmentController', action: 'createDepartment' },

    /** Employee routes Start */

    'POST /employee': { controller: 'EmployeeController', action: 'newEmployee' },

    'GET /employee': { controller: 'EmployeeController', action: 'getEmp' },

    // 'GET /employee/:empId': { controller: 'EmployeeController', action: 'newEmployee' }


};