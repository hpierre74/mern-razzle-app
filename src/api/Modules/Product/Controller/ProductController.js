import Product from "../Model/Product";
import cuid from "cuid";

class ProductController {
  static getProducts(req, res) {
    Product.forRestaurant(req.params.restaurantId, (err, products) => {
      err ? res.status(404).send() : res.json(products)
    })
  }
  static getProduct(req, res) {
    Product.findOne({ _id: req.params.ProductId }).exec((err, product) => {
      err ? res.status(500).send(err): res.json({ product });
    });
  }

  static addProduct(req, res) {
    let newProduct = new Product(req.body);
    newProduct.cuid = cuid();
    Product.create(newProduct,(err, product) => {
      err? res.status(500).send(err) : res.json({product})
    })
  }

  static deleteProduct(req, res) {
    Product.findOne({ _id: req.params.productId }).exec((err, product) => {
        if (err) {
          res.status(500).send(err);
        }  
        product.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default ProductController;
