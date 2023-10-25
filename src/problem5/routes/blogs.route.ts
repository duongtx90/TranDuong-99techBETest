import { Router } from "express";
import BlogController from "../controllers/blog.controller";


const router = Router();

router.get("/", BlogController.getAll)

router.post("/", BlogController.create)

router.get("/:id", BlogController.getOne)
router.put("/:id",BlogController.update)
router.delete("/:id", BlogController.delete)


export default router;