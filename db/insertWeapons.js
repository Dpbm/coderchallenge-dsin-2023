import db from './getDB.js';

export default function insertWeapons(id, weapons) {
	const query = 'INSERT INTO weapons (host_id, weapon) VALUES (?, ?);';

	return new Promise((resolve, reject) => {
		const statement = db.prepare(query);
		for (const weapon of weapons) {
			statement.run([id, weapon], function (error) {
				reject(error);
			});
		}
		statement.finalize();

		resolve();
	});
}
