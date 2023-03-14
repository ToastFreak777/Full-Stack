"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
require("dotenv/config");
require("express-async-errors");
require("colors");
const morgan_1 = __importDefault(require("morgan"));
const PORT = process.env.PORT || 3000;
// Utils
const path_1 = __importDefault(require("path"));
// Routers
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const post_1 = __importDefault(require("./routes/post"));
const connect_1 = __importDefault(require("./db/connect"));
// Middleware
const notFoundHandler_1 = __importDefault(require("./middleware/notFoundHandler"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const authentication_1 = __importDefault(require("./middleware/authentication"));
app.use([(0, morgan_1.default)("tiny")]);
app.use("/static", express_1.default.static(path_1.default.join(__dirname, "../", "public")));
app.use([express_1.default.urlencoded({ extended: true }), express_1.default.json()]);
app.use("/api/v1/auth", auth_1.default);
app.use("/api/v1/user", authentication_1.default, user_1.default);
app.use("/api/v1/post", post_1.default);
app.use([notFoundHandler_1.default, errorHandler_1.default]);
const start = async () => {
    try {
        const db = await (0, connect_1.default)(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${db.connection.host}`.green.underline);
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`.underline.cyan);
        });
    }
    catch (error) {
        console.log(`Error on startup ${error}`.red);
    }
};
start();
