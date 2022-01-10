const Product = require('../models/product')

exports.addProducts = (req, res,) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products', 
            path: '/products'
            
        });
    });    

}
///////////////////////////////////////////////////////
exports.getIndex = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/index.ejs', {
            prods: products,
            pageTitle: 'shop', 
            path: '/'
        });
    }); 
}

exports.getCart = (req, res ) => {
    res.render('shop/cart', {
        path:'/cart',
        pageTitle: 'Your Cart'
    })
}

exports.getOrders = (req, res ) => {
    res.render('shop/orders', {
        path:'/orders',
        pageTitle: 'Your Order'
    })
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle:'Checkout'

    })
}