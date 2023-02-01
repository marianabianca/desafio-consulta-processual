const express = require("express");
const app = express();
const processosRouter = require("./routes/ProcessoRoutes");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { getAllProcessos, createManyProcessos } = require("./services/ProcessoService");
const { processos } = require("./seed/ProcessosSeed")

// function to seed db in case it's empty
seedDB = async () => {
  let processosInDB = await getAllProcessos()
  if (processosInDB.length === 0) {
    await createManyProcessos(processos)
  }
}
 
dotenv.config();

//middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000'
}));

port = process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//configure mongoose
let database = process.env.MONGO_URI;

if (process.env.NODE_ENV === "testing") {
  database = process.env.MONGO_URI_TEST;
}

mongoose.set("strictQuery", false);
mongoose.connect(
  database,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => {
  console.log("Database connection established");
})
.catch((err) => {
  console.error(`ERROR: ${err}`);
});;

// seed db in case it's empty
seedDB();

app.use("/processos", processosRouter)
 
module.exports = app;