import Database from "mongoose";

const initializeDatabase = (url: string | undefined) => {
  if (!url) throw Error("no url provided");
  return Database.connect(url);
};

export default initializeDatabase;
