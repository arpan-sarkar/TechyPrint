const router = require("express").Router();

const cartController = require("../controllers/cartController");

router.get("/", cartController.getCart);

router.post("/", cartController.addToCart);

module.exports = router;