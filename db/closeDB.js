import db from './getDB.js';

export default function closeDB() {
	db.close();
}
