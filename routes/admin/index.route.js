const dashboardRoute = require("./dashboard.route");
const productsdRoute = require("./product.route");

module.exports.index = (app) => {
    app.use("/admin/dashboard", dashboardRoute);
    app.use("/admin/products", productsdRoute);
}