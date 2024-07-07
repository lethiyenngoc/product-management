const dashboardRoute = require("./dashboard.route");
const productsdRoute = require("./product.route");
const systemConfig = require("../../config/system");

module.exports.index = (app) => {
    const path = `/${systemConfig.prefixAdmin}`;

    app.use(`${path}/dashboard`, dashboardRoute);
    
    app.use(`${path}/products`, productsdRoute);
}