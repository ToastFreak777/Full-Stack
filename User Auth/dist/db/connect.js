import Database from "mongoose";
const initializeDatabase = (url) => {
    if (!url)
        throw Error("no url provided");
    return Database.connect(url);
};
export default initializeDatabase;
