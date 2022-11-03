
const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

exports.login = async (email, password) => {
    const user = await userModel.findOne({ email }, 'id email password');
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) return null;
    return user;
}

exports.register = async (email, password, confirmPassword) => {
    if(password != confirmPassword) return null;
    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const user = new userModel({
        email: email,
        password: hash,
    });
    return await user.save();
}
 
exports.changePassword = async () => {

}

exports.profile = async () => {

}

exports.updateProfile = async () => {
    
}



