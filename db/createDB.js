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
                game VARCHAR(40) NOT NULL
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
