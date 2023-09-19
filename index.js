require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routers = require("./Routes"); // можно не указывать конкретный файл если в данной есть файл index.js (Берет его по умолчанию)
//import router from "./router.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

routers.forEach((route) => {
  app.use("/api", route);
});

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`server started ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
