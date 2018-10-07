const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();

const appConfig = require ("./config/main-config.js");
const routeConfig = require("./config/route-config.js");
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());


app.use(cookieParser("sfsfsfslkjflksflsdnflks"))

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;
