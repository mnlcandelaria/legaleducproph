import Database from "../mongodb";

const connectToDatabase = async () => {
  const db = Database.getInstance();
  await db.connect();
};

export { connectToDatabase };
