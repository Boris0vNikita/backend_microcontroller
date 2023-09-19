const db = require("../db")

class ViewController {
    async getViewBy(req, res) {
      try {
        const posts = await db.query(`select * from "Chat".view_data_sensor`);
        res.json(posts.rows);
      } catch (e) {
        res.status(400).json(e);
      }
    }
    async getViewByNamePlace(req, res) {
      try {
        const place = req.params.name_room
        const posts = await db.query(`select * from "Chat".view_data_sensor  where name_room = '${place}'`);
        res.json(posts.rows);
      } catch (e) {
        res.status(400).json(e);
      }
    }
    async getById(req, res) {
      try {
        const id = req.params.id
        const view = await db.query(`select * from "Chat".view_data_sensor  where "id_removingIndicators" = ${id}`);
        return res.status(200).json(view.rows);
      } catch (e) {
        res.status(500).json(e);
      }
    }
  }
  
  module.exports = new ViewController();
  