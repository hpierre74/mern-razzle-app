import Info from "../Model/Info";
import cuid from "cuid";

class InfoController {
  static getInfos(req, res) {
    Info.find()
      .exec((err, Infos) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ Infos });
      });
  }
  static getInfo(req, res) {
    Info.findOne({ cuid: req.params.cuid }).exec((err, Info) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ Info });
    });
  }


  static addInfo(req, res) {
    if (
      !req.body.name ||
      !req.body.tel
    ) {
      res.status(403).end();
    }
    const newInfo = new Info(req.body);
    newInfo.cuid = cuid();
    newInfo.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ Info: saved });
    });
  }

  static deleteInfo(req, res) {
    Info.findOne({ cuid: req.params.cuid }).exec((err, Info) => {
        if (err) {
          res.status(500).send(err);
        }  
        Info.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default InfoController;
