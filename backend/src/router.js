const express = require("express");

const router = express.Router();
const Outing = [
  { id: 1, name: "Museum" },
  { id: 2, name: "Concert" },
  { id: 3, name: "Football" },
];

router.get("/outing", (req, res) => {
  res.json(Outing);
});

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
