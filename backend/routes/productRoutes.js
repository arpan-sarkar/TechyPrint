const express = require("express");
const router = express.Router();

const upload = require("../utils/upload");

const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);

// ADD PRODUCT
router.post("/", upload.single("image"), createProduct);

// UPDATE PRODUCT
router.put("/:id", upload.single("image"), updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;