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
exports.initializeServer = initializeServer;
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = require("./user/index");
const index_2 = require("./tweet/index");
const cors_1 = __importDefault(require("cors"));
const jwt_1 = __importDefault(require("../services/jwt"));
function initializeServer() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
        app.use(body_parser_1.default.json());
        const graphqlServer = new server_1.ApolloServer({
            typeDefs: `
    ${index_1.User.types}
    ${index_2.Tweet.types}
    
    type Query {
      ${index_1.User.queries}  
      ${index_2.Tweet.queries}
    }
      type Mutation {
      ${index_2.Tweet.mutations}
      }
    `,
            resolvers: Object.assign(Object.assign({ Query: Object.assign(Object.assign({}, index_1.User.resolvers.queries), index_2.Tweet.resolvers.queries), Mutation: Object.assign({}, index_2.Tweet.resolvers.mutations) }, index_2.Tweet.resolvers.extraResolvers), index_1.User.resolvers.extraResolvers),
        });
        yield graphqlServer.start();
        app.use("/graphql", (0, express4_1.expressMiddleware)(graphqlServer, {
            context: (_a) => __awaiter(this, [_a], void 0, function* ({ req, res }) {
                const authHeader = req.headers.authorization || '';
                const token = authHeader.replace('Bearer ', '');
                let user = null;
                if (token) {
                    try {
                        user = jwt_1.default.decodeToken(token);
                    }
                    catch (e) {
                        console.log('Invalid token', e);
                    }
                }
                return { user };
            })
        }));
        return app;
    });
}
