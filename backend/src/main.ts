import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 
             "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", 
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT;

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello World" });
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
})