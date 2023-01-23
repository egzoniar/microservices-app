import dotEnv from "dotenv";

dotEnv.config();

export default {
  PORT: process.env.PORT,
  DB_URL: process.env.DATABASE_URL,
};
