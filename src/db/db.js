import pg from "pg";

const {Pool} = pg;

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres",
    database: "url_shortner"
});

export default pool;