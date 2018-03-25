import Service from "../Model/Service";
//import cuid from "cuid";

class ServiceController {
  static getServices(req, res) {
    Service.find()
      .sort("start")
      .exec((err, Services) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ Services });
      });
  }
  static getService(req, res) {
    Service.findOne({ name: req.params.name }).exec((err, Service) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ Service });
    });
  }

  static addService(req, res) {
    if (
      !req.body.name ||
      !req.body.start ||
      !req.body.end ||
      !req.body.maxPersons ||
      !req.body.lateTime ||
      !req.body.bookTimes
    ) {
      res.status(403).end();
    }
    const newService = new Service(req.body);
    //newService.cuid = cuid();
    newService.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ Service: saved });
    });
  }

  static deleteService(req, res) {
    Service.findOne({ name: req.params.name }).exec((err, Service) => {
        if (err) {
          res.status(500).send(err);
        }  
        Service.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default ServiceController;
