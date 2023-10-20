import db from './getDB.js';

export default function getTotalZombies() {
	return new Promise((resolve, reject) => {
		db.get(
			'SELECT COUNT(*) as count FROM hosts',
			[],
			function (error, row) {
				if (error) reject(error);
				else resolve(row.count);
			}
		);
	});
}
