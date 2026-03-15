import express from "express";
import {handleCreateShortURL} from "../controllers/urlController.js"

const router = express.Router();

app.post('/url', handleCreateShortURL)

export default router;