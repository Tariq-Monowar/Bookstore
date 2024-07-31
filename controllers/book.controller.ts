import { Request, Response } from "express";
import knex from "../db/knex";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await knex("books").select("*");
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await knex("books").where({ id }).first();
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { title, description, published_date, author_id } = req.body;
    const format_date = new Date(published_date).toISOString().split("T")[0];
    const [id] = await knex("books").insert({
      title,
      description,
      published_date: format_date,
      author_id,
    });
    const newBook = await knex("books").where({ id }).first();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, published_date, author_id } = req.body;
    const format_date = new Date(published_date).toISOString().split("T")[0];

    const updated = await knex("books").where({ id }).update({
      title,
      description,
      published_date: format_date,
      author_id,
    });

    if (!updated) {
      return res.status(404).json({ error: "Book not found" });
    }

    const updatedBook = await knex("books").where({ id }).first();

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await knex("books").where({ id }).del();
    if (!deleted) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({ message: "Book delete successful" });
  } catch (error) {
    res.status(500).json(error);
  }
};


export const getBooksByAuthorId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const books = await knex('books').where({ author_id: id });
    if (!books) {
      return res.status(404).json({ error: "books not found" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books by author' });
  }
};

