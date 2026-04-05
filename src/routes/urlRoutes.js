import express from "express";
import {handleCreateShortURL} from "../controllers/urlController.js"
import {handleRedirect} from "../controllers/urlController.js"
import {handleAnalytics} from "../controllers/urlController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/url', authMiddleware, handleCreateShortURL)

router.get('/url/:id', authMiddleware, handleAnalytics);

router.get('/:id', handleRedirect);


export default router;