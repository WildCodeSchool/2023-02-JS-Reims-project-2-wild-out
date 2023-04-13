const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const eventList = [
  { id: 1, name: "Sports" },
  { id: 2, name: "Concerts" },
  { id: 3, name: "Autres" },
];

router.get("/events", (req, res) => {
  res.json(eventList);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
