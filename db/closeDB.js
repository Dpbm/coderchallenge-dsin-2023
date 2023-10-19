import db from './getDB';

export default function closeDB() {
	db.close();
}
