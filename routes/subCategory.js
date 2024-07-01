const router = require("express").Router();
const { subCategoryController } = require("../controllers");
const verifyAndFindAdminById = require("../middleware/auth");

router.get("/", subCategoryController.getAllSubCategory);
router.post("/", verifyAndFindAdminById, subCategoryController.addSubCategory);
router.get(
  "/count-subcategories/:id",
  subCategoryController.countSubCategoryByCategory
);
router.patch("/delete/:id", subCategoryController.deleteSubCategory);
router.patch("/remove/:id", subCategoryController.removeSubCategory);
router.get("/:id", subCategoryController.getSubCategoryById);
router.patch("/:id", subCategoryController.editSubCategory);

module.exports = router;
