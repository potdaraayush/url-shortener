import {createShortURL} from "../services/urlService.js"

export async function handleCreateShortURL(req, res) {
    const {url} = req.body;

    if(!url) {
        return res.status(400).json({
            error: "url is required."
        })
    }

    const shortID = await createShortURL(url);

    res.json({
        shortURL: `http://localhost:8000/${shortID}`
    });
}