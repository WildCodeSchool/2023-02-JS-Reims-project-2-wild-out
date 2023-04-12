const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const list = [
  { id: 1, name: "Bmw" },
  { id: 2, name: "Renault" },
  { id: 3, name: "Audi" },
  { id: 4, name: "Peugeot" },
];

router.get("/event-listings", (req, res) => {
  res.json(list);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
