import sqlite3 from 'sqlite3';
import location from './getDBLocation.js';

const db = new sqlite3.Database(location);
export default db;
