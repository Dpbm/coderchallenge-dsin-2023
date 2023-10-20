import blessed from 'blessed';
import createDB from './db/createDB.js';
import createMenu from './components/menu.js';
import closeDB from './db/closeDB.js';
createDB();

const screen = blessed.screen({
	smartCSR: true,
	title: 'DSIN Coder Challenge 2023',
});

screen.key(['scape', 'C-c'], () => {
	closeDB();
	screen.destroy();
	return process.exit(0);
});

createMenu(screen);
screen.render();
