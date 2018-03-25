import Restaurant from "../Model/Restaurant";
import cuid from "cuid";

class RestaurantController {
  static getRestaurants(req, res) {
    Restaurant.find()
    .exec((err, restaurants) => {
      err ? res.status(500).send(err) : res.json({ restaurants });
    });
  }
  static getRestaurant(req, res) {
    Restaurant.findOne({ _id: req.params.restaurantId }).exec((err, restaurant) => {
      err ? res.status(500).send(err) : res.json({ restaurant });
    });
  }

  static addRestaurant(req, res) {
    const newRestaurant = new Restaurant(req.body);
    newRestaurant.cuid = cuid();
    newRestaurant.save((err, restaurant) => {
      err ? res.status(500).send(err) : res.json({ restaurant });
    });
  }

  static deleteRestaurant(req, res) {
    Restaurant.findOne({ _id: req.params.restaurantId }).exec((err, restaurant) => {
       err ? res.status(500).send(err) : restaurant.remove(() => {
        res.status(200).end();
      });
    });
  }
}
export default RestaurantController;
