const express = require("express");
const app = express();
const processosRouter = require("./routes/ProcessoRoutes");
const cors = require("cors");
 
//middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");

//configure mongoose
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.use("/processos", processosRouter)
 
module.exports = app;