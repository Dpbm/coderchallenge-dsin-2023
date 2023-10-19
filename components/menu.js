import blessed from 'blessed';
import createForm from './form.js';
import createAttributes from './attributes.js';
import createDuck from './duck.js';

const menuOptions = ['Adicionar Hospedeiro', 'classificar zumbis', 'Pato'];

export default function createMenu(screen) {
	const options = blessed.list({
		parent: screen,
		top: 'center',
		left: 'center',
		keys: true,
		vi: true,
		mouse: true,
		scrollable: true,
		scrollbar: true,
		name: 'menu',
		border: {
			type: 'line',
		},
		style: {
			selected: {
				bg: 'blue',
				fg: 'white',
			},
		},
		label: 'Ações',
		items: menuOptions,
	});

	screen.append(options);

	options.on('action', (item) => {
		const index = menuOptions.indexOf(item.content);
		const actions = [createForm, createAttributes, createDuck];
		const action = actions[index];
		options.hide();
		action(screen, options);
	});

	options.focus();
}
