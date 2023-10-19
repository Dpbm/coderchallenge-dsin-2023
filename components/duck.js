import blessed from 'blessed';
import getDuckHosts from '../db/getDuckHosts.js';
import errorMessage from './error.js';

export default async function createDuck(screen, menu) {
	const hosts = [['id', 'força', 'velocidade', 'inteligência']];

	try {
		const data = await getDuckHosts();
		data.forEach((host) =>
			hosts.push(Object.values(host).map((value) => String(value)))
		);
	} catch (error) {
		errorMessage(screen, 'falha ao tentar pegar os dados!');
	}

	const dataTable = blessed.table({
		parent: screen,
		keys: true,
		scrollable: true,
		scrollbar: true,
		pad: 1,
		left: 'center',
		border: {
			type: 'line',
		},
		data: hosts,
	});

	blessed.text({
		parent: dataTable,
		bottom: 1,
		left: 'center',
		content: 'Pressione BACKSPACE para voltar',
		style: {
			fg: 'white',
			bg: 'red',
		},
		zIndex: 10,
	});

	screen.key('backspace', () => {
		screen.remove(dataTable);
		menu.show();
		menu.focus();
		screen.render();
	});

	screen.append(dataTable);
	dataTable.focus();
	screen.render();
}
