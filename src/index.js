import express from "express";
import urlRoutes from "./routes/urlRoutes.js"
import dotenv from "dotenv";



dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());

app.use("/", urlRoutes);

app.listen(port, () => {
    console.log(`server is listening on port ${8000}`);
})