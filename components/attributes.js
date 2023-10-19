import blessed from 'blessed';
import getHosts from '../db/getHosts.js';
import errorMessage from './error.js';
import getStrength from '../logic/getStrength.js';
import getVelocity from '../logic/getVelocity.js';
import getIntelligence from '../logic/getIntelligence.js';
import { padText } from '../utils/strings.js';

export default async function createAttributes(screen, menu) {
	const totalHosts = 5;
	let data = [];

	try {
		data = await getHosts(totalHosts);
	} catch (error) {
		errorMessage(screen, 'falha ao tentar pegar os dados dos hospedeiros!');
	}

	const dataHeaders = [
		'id',
		'idade',
		'sexo',
		'peso',
		'altura',
		'sangue',
		'musica',
		'esporte',
		'game',
	];
	const attributesHeader = ['força', 'velocidade', 'inteligência'];

	const dataTableContainer = blessed.box({
		width: '50%',
		height: '100%',
		top: 0,
		left: 0,
		overflow: 'hidden',
		label: 'Hospedeiros',
		border: {
			type: 'line',
		},
	});

	blessed.text({
		parent: dataTableContainer,
		width: '100%',
		height: '100%',
		left: 0,
		overflow: 'auto',
		wrap: true,
		content: dataHeaders.join(' | '),
	});

	blessed.text({
		parent: dataTableContainer,
		width: '100%',
		height: '100%',
		top: 1,
		left: 0,
		overflow: 'auto',
		wrap: true,
		content: '-'.repeat(74),
	});

	data.forEach(
		(
			{ ID, age, sex, weight, height, blood, music, sport, game },
			index
		) => {
			blessed.text({
				parent: dataTableContainer,
				width: '100%',
				height: '100%',
				top: index + 2,
				left: 0,
				overflow: 'auto',
				wrap: true,
				content: [
					padText(String(ID), 2),
					padText(String(age), 5),
					padText(sex, 4),
					padText(String(weight), 4),
					padText(String(height), 6),
					padText(blood, 6),
					padText(music, 6),
					padText(sport, 7),
					game,
				].join(' | '),
			});
		}
	);

	const attributesTableContainer = blessed.box({
		width: '50%',
		height: '100%',
		top: 0,
		left: '50%',
		overflow: 'hidden',
		label: 'Atributos',
		border: {
			type: 'line',
		},
	});

	blessed.text({
		parent: attributesTableContainer,
		width: '100%',
		height: '100%',
		overflow: 'auto',
		wrap: true,
		content: attributesHeader.join(' | '),
	});

	blessed.text({
		parent: attributesTableContainer,
		width: '100%',
		height: '100%',
		top: 1,
		left: 0,
		overflow: 'auto',
		wrap: true,
		content: '-'.repeat(33),
	});

	data.forEach(
		(
			{ _ID, age, sex, weight, height, _blood, music, sport, game },
			index
		) => {
			const values = [
				padText(
					String(getStrength(age, sex, weight, height, sport)),
					5
				),
				padText(
					String(getVelocity(age, sex, weight, height, sport)),
					10
				),
				getIntelligence(age, sex, music, sport, game),
			];

			blessed.text({
				parent: attributesTableContainer,
				width: '100%',
				height: '100%',
				top: index + 2,
				overflow: 'auto',
				wrap: true,
				content: values.join(' | '),
			});
		}
	);

	const backMessage = blessed.text({
		parent: screen,
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
		screen.remove(dataTableContainer);
		screen.remove(attributesTableContainer);
		screen.remove(backMessage);
		menu.show();
		menu.focus();
		screen.render();
	});

	screen.append(dataTableContainer);
	screen.append(attributesTableContainer);
	screen.append(backMessage);
	dataTableContainer.focus();
	screen.render();
}
