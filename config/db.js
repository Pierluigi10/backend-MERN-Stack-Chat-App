import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline)
  )
  .catch((err) => console.log(`Error: ${err.message}`.red.bold));
