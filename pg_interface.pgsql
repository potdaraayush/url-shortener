select * from urls;

drop table urls;

CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    short_id VARCHAR(20) UNIQUE NOT NULL,
    original_url TEXT NOT NULL,
    click_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

create table demo;