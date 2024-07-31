import dotenv from "dotenv";
import app from "./app";
import knexInstance from "./db/knex";


dotenv.config();

const port = process.env.SERVER_PORT;

const databaseConnection = async () => {
  try {
    const result = await knexInstance.raw('SELECT 1+1 AS result');
    console.log('Database connection successful:', result);
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

app.listen(port, async (): Promise<void> => {
  console.log(`http://localhost:${port}`);
  databaseConnection();
});
