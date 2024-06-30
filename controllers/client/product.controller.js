const Product = require("../../models/product.model");

// [GET] /products/
module.exports.index = async (req, res) => {
    const products = await Product.find({
        status: "active",
        deleted: false
    });

    for (const item of products) {
        item.priceNew = ((1 - item.discountPercentage/100) * item.price).toFixed(0);
    }

    // console.log(products);

    res.render("client/pages/products/index", {
        pageTitle: "Danh sách sản phẩm",
        products: products
    });
}

// [POST] /products/create
// module.exports.create = (req, res) => {
//     res.render("client/pages/products/create");
// }

// [PATCH] /products/edit
// module.exports.edit = (req, res) => {
//     res.render("client/pages/products/edit");
// }

// [GET] /products/detail
// module.exports.detail = (req, res) => {
//     res.render("client/pages/products/detail");
// }