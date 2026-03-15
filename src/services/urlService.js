import shortid from "shortid";
import pool from "../db/db.js";

export async function createShortURL(original_url) {
    while(true) {
        const shortID = shortid.generate();
        try {
            await pool.query(
                `insert into urls (short_id, original_url) values ($1, $2)`, 
                [shortID, original_url]
            )
            return shortID;
        } catch(err) {
            if(err.code === "23505") continue
            throw err;
        }
    }
}