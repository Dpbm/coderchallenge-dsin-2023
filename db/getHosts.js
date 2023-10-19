import db from './getDB.js';

export default function getHosts() {
	return new Promise((resolve, reject) => {
		db.all(`SELECT * FROM hosts`, [], (error, rows) => {
			if (error) reject(error);
			else resolve(rows);
		});
	});
}
