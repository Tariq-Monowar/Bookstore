import { Router } from 'express';
import { createBook, deleteBook, getBookById, getBooks, updateBook } from '../controllers/book.controller';
import { getBooksByAuthorId } from '../controllers/author.controller';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);
router.get("/author/:id", getBooksByAuthorId);

export default router;
