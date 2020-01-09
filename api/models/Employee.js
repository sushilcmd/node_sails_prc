const uuidv4 = require('uuid/v4');

module.exports = {

    attributes: {
        empId: {
            type: 'string',
            // default: function() {
            //     return uuidv4()
            // }
        },
        empName: { type: 'string' },
        dptNo: { type: 'string' },
        job: { type: 'string' },
        salary: { type: 'number' }
    },
};