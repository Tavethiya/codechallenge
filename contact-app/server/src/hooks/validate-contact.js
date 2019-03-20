const {
  errors
} = require('feathers-errors');

module.exports = function (options = {}) {
  return context => {
    const name = context.data.name;
    const dob = context.data.dob;
    const email = context.data.email;
    const gender = context.data.gender;
    const amount = context.data.amount;

    if (name === undefined || name.trim() === '') {
      throw new errors.BadRequest('Name cannot be empty');
    }
    
    if (dob === undefined || dob.trim() === '') {
        throw new errors.BadRequest('Date Of Birth cannot be empty');
      }
      
    if (email === undefined || email.trim() === '') {
        throw new errors.BadRequest('Email cannot be empty');
      }

      
    if (gender === undefined || gender.trim() === '') {
        throw new errors.BadRequest('Gender cannot be empty');
      }

      
    if (amount === undefined) {
        throw new errors.BadRequest('Amount cannot be empty');
      }
  };
};
