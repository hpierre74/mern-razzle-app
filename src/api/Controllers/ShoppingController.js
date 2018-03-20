import Shopping from "../Models/Shopping";
import cuid from "cuid";

class ShoppingController {
  static getShoppingList(req, res) {
    Shopping.list(req.params.restaurantId, (err, shoppingItems) => {
      err ? res.status(404).send() : res.json(shoppingItems)
    })
  }
  static getShoppingItem(req, res) {
    Shopping.findOne({ _id: req.params.shopId }).exec((err, shoppingItem) => {
      err ? res.status(500).send(err): res.json({ shoppingItem });
    });
  }

  static getShoppingItemByName(req, res) {
    Shopping.findOne({ name: req.params.name }).exec((err, shoppingItem) => {
      err ? res.status(500).send(err): res.json({ shoppingItem });
    });
  }

  static addShoppingItem(req, res) {
    let newShoppingItem = new Shopping(req.body);
    newShoppingItem.cuid = cuid();
    Shopping.createItem(newShoppingItem,(err, shoppingItem) => {
      err? res.status(500).send(err) : res.json({ shoppingItem })
    })
  }

  static deleteShoppingItem(req, res) {
    Shopping.findOne({ _id: req.params.shopId }).exec((err, shoppingItem) => {
        if (err) {
          res.status(500).send(err);
        }  
        Shopping.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default ShoppingController;
