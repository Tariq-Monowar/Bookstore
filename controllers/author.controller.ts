import { Request, Response } from "express";
import knex from "../db/knex";

export const getAllAuthor = async (req: Request, res: Response) => {
  const authors = await knex("authors").select("*");
  res.json(authors);
};

export const createAuthor = async (req: Request, res: Response) => {
  try {
    const { name, bio, birthdate } = req.body;
    const formatBirth = new Date(birthdate).toISOString().split("T")[0];

    const [id] = await knex("authors")
      .insert({
        name,
        bio,
        birthdate: formatBirth,
      })
      .returning("id");

    //find data
    const newAuthor = await knex("authors").where({ id }).first();

    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAuthorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const author = await knex("authors").where({ id }).first();
    if (!author) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Jul 31 2025
export const updateAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, bio, birthdate } = req.body;

    const formatBirth = new Date(birthdate).toISOString().split("T")[0];

    const updated = await knex("authors")
      .where({ id })
      .update({ name, bio, birthdate: formatBirth });

    if (!updated) {
      return res.status(404).json({ error: "Author not found" });
    }

    const updatedAuthor = await knex("authors").where({ id }).first();

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const deleteAuthor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await knex("authors").where({ id }).del();
    if (!deleted) {
      return res.status(404).json({ error: "Author not found" });
    }
    res.status(200).json({ message: "Author delete successful" });
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

