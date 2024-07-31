import express, { Router } from "express";
import {
  createAuthor,
  deleteAuthor,
  getAllAuthor,
  getAuthorById,
  getBooksByAuthorId,
  updateAuthor,
} from "../controllers/author.controller";

const router: Router = express.Router();

router.get("/", getAllAuthor);
router.post("/", createAuthor);
router.get("/:id", getAuthorById);
router.put("/:id", updateAuthor);
router.delete("/:id", deleteAuthor);
router.get("/:id/books", getBooksByAuthorId);
export default router;
