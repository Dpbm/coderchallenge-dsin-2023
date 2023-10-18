import sqlite3 from 'sqlite3';
import path from 'path';

export default function createDB() {
	const db = new sqlite3.Database(path.resolve('db', 'data.db'));

	try {
		db.exec(`
            CREATE TABLE IF NOT EXISTS hosts
            (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
                age INTEGER NOT NULL CHECK(age >= 1),
                sex VARCHAR(15) NOT NULL ,
                weight FLOAT NOT NULL CHECK(weight >= 0.5 AND weight <= 200),
                height FLOAT NOT NULL CHECK(weight >= 0.5 AND weight <= 3),
                blood VARCHAR(4) NOT NULL,
                music VARCHAR(15) NOT NULL,
                sport VARCHAR(15) NOT NULL,
                game VARCHAR(40) NOT NULL
            );
        `);
	} catch (error) {}
}
