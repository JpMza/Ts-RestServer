"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUsers = exports.postUser = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'get ususarios'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get ususarios',
        id
    });
};
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'post ususarios',
        body
    });
};
exports.postUser = postUser;
const putUsers = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'put ususarios',
        body,
        id
    });
};
exports.putUsers = putUsers;
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete ususarios',
        id
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controller.js.map