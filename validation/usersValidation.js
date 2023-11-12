const validator = require('validator');

const validateRegisterInput = ({body: userRegistry}, res, next) => {
    const registryErrors = [];
    console.log(userRegistry)

    if (validator.isEmpty(userRegistry.email)){
        registryErrors.push("Email is required.");
    };
    if (!validator.isEmail(userRegistry.email)) {
        registryErrors.push("Email is invalid.")
    };
    if (validator.isEmpty(userRegistry.password)) {
        registryErrors.push("Password is required.")
    };
    if (!validator.isLength(userRegistry.password, {min: 6, max: 30})) {
        registryErrors.push('Password must be at least 6 characters.')
    };
    if (validator.isEmpty(userRegistry.firstName)) {
        registryErrors.push("First name field is required.")
    };
    if (!validator.isLength(userRegistry.firstName, {min: 2, max: 30})) {
        registryErrors.push("First name must be at least 2 characters.")
    };
    if (validator.isEmpty(userRegistry.lastName)) {
        registryErrors.push("Last name field is required.")
    };
    if (!validator.isLength(userRegistry.lastName, {min: 2, max: 30})) {
        registryErrors.push("Last name must be at least 2 characters.")
    };
    if (validator.isEmpty(userRegistry.passwordConfirmation)) {
        registryErrors.push("Confirm password field is required.")
    };
    if (!validator.equals(userRegistry.password, userRegistry.passwordConfirmation)) {
        registryErrors.push("Passwords must match.")
    };
    if (!registryErrors.length) {
        next();
    } else {
        res.status(400).json({error: registryErrors})
    }
};

module.exports = {
validateRegisterInput
    
}