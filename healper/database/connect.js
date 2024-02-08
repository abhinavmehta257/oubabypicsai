const mongoose = require("mongoose");

const main = async () => {
  await mongoose
    .connect(process.env.DB_CONNECT, { useNewUrlParser: true })
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};

export default main;
