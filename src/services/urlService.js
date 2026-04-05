import shortid from "shortid";
import pool from "../db/db.js";

export async function createShortURL(original_id, userId) {
    while(true) {
        const shortID = shortid.generate(6);
        try {
            await pool.query(
                `insert into urls (short_id, original_url, user_id) values ($1, $2, $3)`, 
                [shortID, original_url, userId]
            )
            return shortID;
        } catch(err) {
            if(err.code === "23505") continue
            throw err;
        }
    }
}

export async function getURLAndIncrementClicks(shortID) {
    const res = await pool.query(
        `update urls set click_count = click_count+1 where short_id = $1 returning original_url;`, [shortID]
    )
    return res.rows[0];
}

export async function getAnalytics(shortID, userId) {
    const res = await pool.query(
        `select click_count, created_at from urls where short_id = $1 and user_id = $2`, [shortID, userId]
    )
    return res.rows[0];
}