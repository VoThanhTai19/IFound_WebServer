
const userModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');

exports.getUsers = async () => {
    const users = await userModel.find();
    return users;
}

exports.login = async (email, password) => {
    const user = await userModel.findOne({ email }, 'id email password');
    const checkPassword = await bcrypt.compare(password, user.password);
    if(!checkPassword) return null;
    return user;
}

exports.register = async (name, email, password, confirmPassword) => {
    if(password != confirmPassword) return null;
    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    const user = new userModel({
        name: name,
        email: email,
        password: hash,
    });
    return await user.save();
}
 
exports.changePassword = async (id, newPassword, confirmNewPassword) => {
    if(newPassword != confirmNewPassword) return null;
    const hash = await bcrypt.hash(newPassword, await bcrypt.genSalt(10));
    await userModel.updateOne(id, {
        password: hash
    })
}

exports.delete = async (id) => {
    await userModel.deleteOne(id);
}

exports.getProfile = async (id) => {
    const profile = await userModel.findById(id);
    return profile;
}

exports.updateProfile = async (id, body) => {

}



