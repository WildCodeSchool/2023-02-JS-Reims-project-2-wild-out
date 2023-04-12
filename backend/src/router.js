const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

const exitIdea = [
  { id: 1, exit: "beach" },
  { id: 2, exit: "opera" },
  { id: 3, exit: "ballad" },
  { id: 4, exit: "movie theater" },
];

router.get("/exitIdea", (req, res) => {
  res.json(exitIdea);
});

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
