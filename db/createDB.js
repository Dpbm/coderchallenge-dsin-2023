import db from './getDB.js';

export default function createDB() {
	db.exec(
		`
            CREATE TABLE IF NOT EXISTS hosts
            (
                ID INTEGER PRIMARY KEY AUTOINCREMENT,
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
                intelligence INTEGER NOT NULL CHECK(intelligence >= 1 AND intelligence <= 100)
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
