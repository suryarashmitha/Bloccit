const express = require("express");
const cookieParser = require('cookie-parser');
const app = express();


app.use(express.static(__dirname + '/assets'));



const appConfig = require ("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

app.use(cookieParser("sfsfsfslkjflksflsdnflks"))

appConfig.init(app, express);
routeConfig.init(app);

module.exports = app;
