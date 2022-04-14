/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/server/src/routes/auth.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.login = exports.register = void 0;
const tslib_1 = __webpack_require__("tslib");
const Boom = __webpack_require__("@hapi/boom");
const bcrypt = __webpack_require__("bcryptjs");
const client_1 = __webpack_require__("@prisma/client");
const jwt_1 = __webpack_require__("./apps/server/src/utils/jwt.ts");
const prisma = new client_1.PrismaClient();
exports.register = {
    method: 'POST',
    path: '/api/register',
    options: {
        cors: {
            origin: ['*'],
            // credentials: true,
            // additionalHeaders: ['cache-control', 'x-requested-with', 'X_AUTH_TOKEN'],
        },
        handler: (request, h) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            console.log(`started at register`);
            const usercred = request.payload;
            const userAlreadyExists = yield prisma.user.findUnique({
                where: {
                    email: usercred.email,
                },
            });
            console.log(`fetched useralready exists ${userAlreadyExists}`);
            if (userAlreadyExists) {
                console.log('inside boom user already');
                return Boom.badRequest('Email is taken.');
            }
            console.log(`password not hashed ${usercred.password}`);
            const password = bcrypt.hashSync(usercred.password, 8);
            console.log(`password hashed ${password}`);
            const user = yield prisma.user.create({
                data: {
                    email: usercred.email,
                    password: password,
                },
            });
            console.log(`user after created ${user}`);
            const accessToken = yield jwt_1.jwtfuncs.signAccessToken(user);
            return h
                .response({
                accessToken,
            })
                .code(200);
        }),
    },
};
exports.login = {
    method: 'POST',
    path: '/api/login',
    options: {
        cors: {
            origin: ['*'],
            credentials: true,
            additionalHeaders: ['cache-control', 'x-requested-with', 'X_AUTH_TOKEN'],
        },
        handler: (request, h) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            const { email, password } = request.payload;
            const user = yield prisma.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                return Boom.notFound('User not registered');
            }
            const checkPassword = bcrypt.compareSync(password, user.password);
            if (!checkPassword) {
                Boom.unauthorized('Email or passsword is invalid');
            }
            delete user.password;
            delete user.id;
            const accessToken = yield jwt_1.jwtfuncs.signAccessToken(user);
            return h.response({ accessToken }).code(200);
        }),
    },
};


/***/ }),

/***/ "./apps/server/src/utils/jwt.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtfuncs = void 0;
const jwt = __webpack_require__("jsonwebtoken");
const createError = __webpack_require__("http-errors");
const dotenv = __webpack_require__("dotenv");
dotenv.config();
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
exports.jwtfuncs = {
    signAccessToken(payload) {
        return new Promise((resolve, reject) => {
            jwt.sign({ payload }, accessTokenSecret, {}, (err, token) => {
                if (err) {
                    reject(createError.InternalServerError());
                }
                resolve(token);
            });
        });
    },
    verifyAccessToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, accessTokenSecret, (err, payload) => {
                if (err) {
                    const message = err.name == 'JsonWebTokenError' ? 'Unauthorized' : err.message;
                    return reject(createError.Unauthorized(message));
                }
                resolve(payload);
            });
        });
    }
};


/***/ }),

/***/ "@hapi/boom":
/***/ ((module) => {

module.exports = require("@hapi/boom");

/***/ }),

/***/ "@hapi/hapi":
/***/ ((module) => {

module.exports = require("@hapi/hapi");

/***/ }),

/***/ "@prisma/client":
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "apollo-server-hapi":
/***/ ((module) => {

module.exports = require("apollo-server-hapi");

/***/ }),

/***/ "bcryptjs":
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "dotenv":
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "http-errors":
/***/ ((module) => {

module.exports = require("http-errors");

/***/ }),

/***/ "jsonwebtoken":
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const apollo_server_hapi_1 = __webpack_require__("apollo-server-hapi");
const Hapi = __webpack_require__("@hapi/hapi");
const auth_1 = __webpack_require__("./apps/server/src/routes/auth.ts");
const typeDefs = (0, apollo_server_hapi_1.gql) `

type Query {
    sayHi: String!
}

`;
const resolvers = {
    Query: {
        sayHi: () => 'hello hi'
    }
};
function startApolloServer(typeDefs, resolvers) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = Hapi.server({
            port: process.env.PORT || 4000,
        });
        app.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return h.response("hello");
            }
        });
        app.route(auth_1.register);
        app.route(auth_1.login);
        const server = new apollo_server_hapi_1.ApolloServer({
            typeDefs,
            resolvers,
            plugins: [(0, apollo_server_hapi_1.ApolloServerPluginStopHapiServer)({ hapiServer: app })],
        });
        yield server.start();
        yield server.applyMiddleware({ app });
        yield app.start();
    });
}
startApolloServer(typeDefs, resolvers)
    .then(() => console.log(`successfully running on port ${process.env.PORT || 4000}`));

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map