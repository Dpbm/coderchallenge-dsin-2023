import db from './getDB.js';

export default function insertWeaknesses(id, weaknesses) {
	const query = 'INSERT INTO weaknesses (host_id, weakness) VALUES (?, ?);';
	return new Promise((resolve, reject) => {
		const statement = db.prepare(query);
		for (const weakness of weaknesses) {
			statement.run([id, weakness], function (error) {
				reject(error);
			});
		}
		statement.finalize();

		resolve();
	});
}
