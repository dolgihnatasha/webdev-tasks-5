'use strict';


exports.index = (req, res) => {
    res.render('authorization/authorization', {});
};
exports.list = (req, res) => {
    res.render('authorization/authorization', {});
};
exports.reg = (req, res) => {
    res.render('registration/registration', {});
};

exports.error404 = (req, res) => {
    res.sendStatus(404);
};
