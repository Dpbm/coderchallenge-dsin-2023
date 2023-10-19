import blessed from 'blessed';
import createDB from './db/createDB.js';
import menu from './components/menu.js';

createDB();

const screen = blessed.screen({ smartCSR: true, title: 'DSIN Coderchallenge' });

screen.key(['scape', 'C-c'], () => {
	return process.exit(0);
});

menu(screen);
screen.render();
