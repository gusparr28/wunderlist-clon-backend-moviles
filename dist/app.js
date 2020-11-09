"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules importation
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const app = express_1.default();
const auth_1 = __importDefault(require("./routes/auth"));
const task_1 = __importDefault(require("./routes/task"));
const user_1 = __importDefault(require("./routes/user"));
// middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// routes
app.use(auth_1.default);
app.use(task_1.default);
app.use(user_1.default);
// settings
app.set('port', process.env.PORT || 3000);
exports.default = app;
