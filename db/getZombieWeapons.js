import db from './getDB.js';

export default function getZombieWeapons(id) {
	return new Promise((resolve, reject) => {
		db.all(
			`SELECT weapon FROM weapons WHERE host_id=?;`,
			[id],
			(error, rows) => {
				if (error) reject(error);
				else resolve(rows);
			}
		);
	});
}
