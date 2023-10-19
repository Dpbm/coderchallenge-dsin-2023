import db from './getDB.js';

export default function createDB() {
	db.exec(
		`
            CREATE TABLE IF NOT EXISTS hosts
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                age INTEGER NOT NULL CHECK(age >= 1),
                sex VARCHAR(15) NOT NULL ,
                weight FLOAT NOT NULL CHECK(weight >= 0.5 AND weight <= 200),
                height FLOAT NOT NULL CHECK(height >= 0.5 AND height <= 3),
                blood VARCHAR(4) NOT NULL,
                music VARCHAR(15) NOT NULL,
                sport VARCHAR(15) NOT NULL,
                game VARCHAR(40) NOT NULL,
                strength INTEGER NOT NULL CHECK(strength >= 1 AND strength <= 100),
                velocity INTEGER NOT NULL CHECK(velocity >= 1 AND velocity <= 100),
                intelligence INTEGER NOT NULL CHECK(intelligence >= 1 AND intelligence <= 100),
                dangerousness INTEGER NOT NULL CHECK(dangerousness >= 0 AND dangerousness <= 100)
            );

            CREATE TABLE IF NOT EXISTS weaknesses
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                host_id INTEGER NOT NULL,
                weakness VARCHAR(30) NOT NULL,
                FOREIGN KEY(host_id) REFERENCES hosts(id)
            );

            CREATE TABLE IF NOT EXISTS defenses
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                host_id INTEGER NOT NULL,
                defense VARCHAR(15) NOT NULL,
                FOREIGN KEY(host_id) REFERENCES hosts(id)
            );

            CREATE TABLE IF NOT EXISTS weapons
            (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                host_id INTEGER NOT NULL,
                weapon VARCHAR(15) NOT NULL,
                FOREIGN KEY(host_id) REFERENCES hosts(id)
            );
        `,
		(error) => {
			if (error)
				console.log(
					`Falha ao tentar criar o banco de dados!\n${error.message}`
				);
		}
	);
}
