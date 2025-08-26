const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: ["http://127.0.0.1:5500", "http://localhost:5500","http://127.0.0.1:80", "http://localhost:80",  "http://s681int191v081.sit.kmutt.ac.th","http://s681int191v081.sit.kmutt.ac.th:3000","https://s681int191v081.sit.kmutt.ac.th:80"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.set("etag", false);

function noCache(req, res, next) {
  res.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
}

app.get("/api/hello", noCache, (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

app.listen(PORT, () => console.log(`🚀 API at http://localhost:${PORT}`));
