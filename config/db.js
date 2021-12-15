import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connect established".cyan.underline))
  .catch((err) => console.log(("[ERROR] Connection failed", err).red.bold));
