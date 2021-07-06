"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUsers = exports.postUser = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(Number(id));
    if (user) {
        res.json({
            user
        });
    }
    else {
        res.status(400).json({ msg: 'no existe el usuario' });
    }
});
exports.getUser = getUser;
const postUser = (req, res) => {
    const { body } = req;
    console.log(req);
    res.json({
        msg: 'post ususarios',
        body
    });
};
exports.postUser = postUser;
const putUsers = (req, res) => {
    const { id } = req.params;
    console.log(id);
    const { body } = req;
    console.log(body);
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