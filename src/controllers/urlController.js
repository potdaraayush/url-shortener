import {createShortURL} from "../services/urlService.js"
import {getURLAndIncrementClicks} from "../services/urlService.js"
import {getAnalytics} from "../services/urlService.js"

export async function handleCreateShortURL(req, res) {
    const {url} = req.body;

    if(!url) {
        return res.status(400).json({
            error: "url is required."
        })
    }

    const userId = req.user.id;
    const shortID = await createShortURL(url, userId);

    res.json({
        shortURL: `http://localhost:8000/${shortID}`
    });
}

export async function handleRedirect(req, res) {
    const {id} = req.params;

    const result = await getURLAndIncrementClicks(id);

    if(!result) {
        return res.status(404).json({
            error: "short URL not found"
        })
    }

    res.redirect(result.original_url);
}

export async function handleAnalytics(req, res) {
    const {id} = req.params;
    const userId = req.user && req.user.id;
    if (!userId) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    const result = await getAnalytics(id, userId);
    if(!result) {
        return res.status(404).json({
            error: "not found"
        })
    }
    res.json(result);
}