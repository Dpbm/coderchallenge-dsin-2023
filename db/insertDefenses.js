import db from './getDB.js';

export default function insertDefenses(id, defenses) {
	const query = 'INSERT INTO defenses (host_id, defense) VALUES (?, ?);';

	return new Promise((resolve, reject) => {
		const statement = db.prepare(query);
		for (const defense of defenses) {
			statement.run([id, defense], function (error) {
				reject(error);
			});
		}
		statement.finalize();

		resolve();
	});
}
