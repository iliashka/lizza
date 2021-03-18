const User = require('./../models/userModel');

exports.user = async (req, res, next) => {
    console.log(req.body)
    try {
       const { _name, tel, email, bill } = req.body;
       const newUser = new User({ _name, tel, email, bill });
       await newUser.save();
       res.json({
           newUser,
           message: 'Форма отправлена. Ожидайте звонка специалиста. '
       })
    } catch (error) {
        next(error)
    }
}