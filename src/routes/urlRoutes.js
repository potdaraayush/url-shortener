import express from "express";
import {handleCreateShortURL} from "../controllers/urlController.js"
import {handleRedirect} from "../controllers/urlController.js"
import {handleAnalytics} from "../controllers/urlController.js"

const router = express.Router();

router.post('/url', handleCreateShortURL)

router.get('/url/:id', handleAnalytics);

router.get('/:id', handleRedirect);


export default router;